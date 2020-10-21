import { Server } from 'miragejs';

const resource = 'products';

export const products = (server: Server) => {
  server.get(resource, (schema, request) => {
    return schema.db[resource];
  });

  server.get(`${resource}/:id`, (schema, { params }) => {
    return schema.db[resource].find(params.id);
  });
};
