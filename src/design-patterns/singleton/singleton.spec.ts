import { Database } from './singleton';

jest.mock('./singleton');

describe('Singleton', () => {
  it('object instances should deep equal', () => {
    expect(Database.instance).toStrictEqual(Database.instance);
  });
});
