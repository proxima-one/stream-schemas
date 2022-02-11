# Base Stream Schema

Stream processes are defined as in the following schema.

## Schema 

### Stream Process 

- id: unique stream identifier 
- name: descriptive stream name 
- version: string that describes current version of stream
- input_streams: list of input stream ids 
- output_streams: list of output stream ids
- container_id: identitifier for stream process 
- build: string location for build files


```typescript
interface EventStreamProcessSchema<T> {
  id: string;
  name: string;
  owner: string;
  version: string;
  input_streams: Array<EventStreamProcessSchema<T>>;
  output_streams: Array<EventStreamProcessSchema<T>>;
  container_id: string; 
  build: string;
}
```

### Event Stream

- id: unique stream identifier
- process_id: unique identifier for process that creates the stream 
- name: descriptive stream name 
- version: string that describes current version of stream
- serdes: serialization of the current stream
- type: represents an enum for StreamType [SOURCE, STATELESS, STATEFUL, QUERY]

```typescript
interface EventStreamSchema<T> {
  id: string;
  process_id: string;
  name: string;
  version: string;
  type: StreamType;
  serdes: Serdes<T>;
}
```