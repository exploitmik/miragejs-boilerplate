import { ServerConfig } from 'miragejs/server';
import { Server } from 'miragejs';
import { models } from './models';
import { fixtures } from './fixtures';
import { routes } from './routes';

type ExposeConfig = 'environment' | 'timing';

const defaultConfig: ServerConfig<any, any> = {
  models,
  fixtures,
  routes,
};

export const makeServer = (externConfig: Pick<ServerConfig<any, any>, ExposeConfig>) => {
  const config: ServerConfig<any, any> = {
    ...defaultConfig,
    ...externConfig,
  };

  return new Server(config);
};
