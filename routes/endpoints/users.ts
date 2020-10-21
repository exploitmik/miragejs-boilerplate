import { Server } from 'miragejs';

const resource = 'users';

export const users = (server: Server) => {
  server.get(resource, (schema, request) => {
    return schema[resource].all();
  });

  server.get(`${resource}/:id`, (schema, request) => {
    return schema[resource].find(request.params.id);
  });

  server.post(resource, (schema, request) => {
    const data = JSON.parse(request.requestBody);
    schema[resource].create(data);
  });
};
