import faker from 'faker';

export const users = Array(10)
  .fill(0)
  .map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    state: faker.address.state(),
    country: faker.address.country(),
  }));
