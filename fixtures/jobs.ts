import faker from 'faker';

export const jobs = Array(10)
  .fill(0)
  .map(() => ({
    name: faker.name.jobTitle(),
  }));
