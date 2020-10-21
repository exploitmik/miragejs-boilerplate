import { jobs, products, countries, users } from './endpoints';

export const routes = function () {
  jobs(this);
  products(this);
  countries(this);
  users(this);
};
