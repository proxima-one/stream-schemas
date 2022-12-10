#!/usr/bin/env node

// @ts-check
/* eslint-disable */

const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const isCI = require('is-ci');

const config = JSON.parse(fs.readFileSync('tsconfig.json').toString());
config.files = [];
config.references = [];

(async function() {
  if (isCI) {
    // dont run it on CI
    return;
  }

  const { stdout, stderr } = await exec('yarn workspaces info --json');

  const lines = stdout.split('\n');
  const openBracketIdx = lines.indexOf("{");
  const closeBracketIdx = lines.lastIndexOf("}");

  if (openBracketIdx < 0 || closeBracketIdx < 0)
    throw new Error("can't parse yarn workspaces");

  const depthTree = lines.slice(openBracketIdx, closeBracketIdx+1).join('\n');
  const workspaces = JSON.parse(depthTree);

  for (const name in workspaces) {
    const workspace = workspaces[name];
    const location = path.resolve(process.cwd(), workspace.location);
    const tsconfigPath = path.resolve(location, 'tsconfig.json');
    if (fs.existsSync(tsconfigPath)) {
      config.references.push({
        path: workspace.location,
      });
      try {
        const workspaceConfig = JSON.parse(
          fs.readFileSync(tsconfigPath).toString(),
        );

        workspaceConfig.compilerOptions.composite = true;
        workspaceConfig.references = [];
        for (const dependency of workspace.workspaceDependencies) {
          const dependecyLocation = path.resolve(
            process.cwd(),
            workspaces[dependency].location,
          );
          if (
            fs.existsSync(
              path.resolve(dependecyLocation, 'tsconfig.json'),
            )
          ) {
            workspaceConfig.references.push({
              path: path.relative(location, dependecyLocation),
            });
          }
        }
        fs.writeFileSync(
          tsconfigPath,
          JSON.stringify(workspaceConfig, undefined, 2),
        );
      } catch (err) {
        console.log("Can't update tsconfig at ", tsconfigPath);
        throw err;
      }
    }
  }
  fs.writeFileSync('tsconfig.json', JSON.stringify(config, undefined, 2));
})();
