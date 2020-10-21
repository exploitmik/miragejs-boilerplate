import { Server } from 'miragejs';

const resource = 'jobs';

export const jobs = function (server: Server) {
  server.get(resource, (schema, request) => {
    return schema.db[resource];
  });

  server.get(`${resource}/:id`, (schema, request) => {
    return schema.db[resource].find(request.params.id);
  });
};
