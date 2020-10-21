import faker from 'faker';

export const countries = Array(10)
  .fill(0)
  .map(() => ({
    name: faker.address.country(),
  }));
