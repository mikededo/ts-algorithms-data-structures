import { Iterable } from './iterable';

/**
 * Generic test factory to test add functions on iterables
 */
export const IterableAddTests = <T extends Iterable<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common adding tests for iterable implementation: ${name}`, () => {
    let iterable: Iterable<number>;

    beforeEach(() => {
      iterable = new Ctor();
    });

    describe('add', () => {
      it('should add an elem', () => {
        iterable.add(1);

        expect(iterable.find(1)).toBeDefined();
        expect(iterable.size()).toBe(1);
      });

      it('should add many elements', () => {
        iterable.add(1).add(2);

        expect(iterable.find(1)).toBeDefined();
        expect(iterable.find(2)).toBeDefined();
        expect(iterable.toArray()).toStrictEqual([1, 2]);
        expect(iterable.size()).toBe(2);
      });
    });

    describe('addAll', () => {
      it('should add all elements', () => {
        iterable.addAll([1, 2, 3]);

        expect(iterable.size()).toBe(3);
        expect(iterable.find(1)).toBeDefined();
        expect(iterable.find(2)).toBeDefined();
        expect(iterable.find(3)).toBeDefined();
        expect(iterable.toArray()).toStrictEqual([1, 2, 3]);
      });

      it('should add all elements, appended', () => {
        const range = [1, 2, 3];
        iterable.addAll(range);
        iterable.addAll(range);

        expect(iterable.size()).toBe(6);
        expect(iterable.toArray()).toStrictEqual([...range, ...range]);
      });
    });
  });
};

/**
 * Generic test factory to test remove functions on iterables
 */
export const IterableRemoveTests = <T extends Iterable<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common remove tests for iterable implementation: ${name}`, () => {
    let iterable: Iterable<number>;

    beforeEach(() => {
      iterable = new Ctor();
    });

    describe('remove', () => {
      it('should remove the first elem', () => {
        iterable.add(1);
        expect(iterable.size()).toBe(1);

        const res = iterable.remove(1);
        expect(iterable.size()).toBe(0);
        expect(res).toBeDefined();
        expect(res).toBe(1);
      });

      it('should remove the last elem', () => {
        iterable.addAll([1, 2, 3]);
        expect(iterable.size()).toBe(3);

        const res = iterable.remove(3);
        expect(iterable.size()).toBe(2);
        expect(res).toBeDefined();
        expect(res).toBe(3);
      });

      it('should return undefined on elem not found', () => {
        const res = iterable.add(1).remove(2);

        expect(iterable.size()).toBe(1);
        expect(res).toBeUndefined();
      });
    });

    describe('removeAll', () => {
      it('should remove all elems', () => {
        iterable.addAll([1, 2, 3]);
        expect(iterable.size()).toBe(3);

        const res = iterable.removeAll([1, 2, 3]);
        expect(iterable.size()).toBe(0);
        expect(res).toStrictEqual([1, 2, 3]);
      });

      it('should remove only the elems that exist', () => {
        iterable.addAll([1, 2, 3]);
        expect(iterable.size()).toBe(3);

        const res = iterable.removeAll([1, 2, 4]);
        expect(iterable.size()).toBe(1);
        expect(res).toStrictEqual([1, 2]);
      });

      it('should not remove any elem', () => {
        iterable.addAll([1, 2, 3]);
        expect(iterable.size()).toBe(3);

        const res = iterable.removeAll([]);
        expect(iterable.size()).toBe(3);
        expect(res).toStrictEqual([]);
      });
    });
  });
};

/**
 * Generic test factory to test access functions on iterables
 */
export const IterableAccessTests = <T extends Iterable<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common access tests for iterable implementation: ${name}`, () => {
    let iterable: Iterable<number>;

    beforeEach(() => {
      iterable = new Ctor();
    });

    describe('find', () => {
      it('should find an elem if exists', () => {
        iterable.addAll([1, 2, 3, 4, 5, 6]);
        const res = iterable.find(3);

        expect(res).toBeDefined();
        expect(res).toBe(3);
      });

      it('should return only one elem if repeated', () => {
        iterable.addAll([1, 2, 3, 1, 1, 2]);
        const res = iterable.find(2);

        expect(res).toBeDefined();
        expect(res).toBe(2);
      });

      it('should return undefined on find if no elements', () => {
        const res = iterable.find(1);

        expect(res).toBeUndefined();
      });

      it('should return undefined if elem does not exist', () => {
        iterable.addAll([1, 2, 3, 4, 5]);
        const res = iterable.find(6);

        expect(res).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test equality operator on iterables
 */
export const IterableEqualityTest = <T extends Iterable<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for iterable implementation: ${name}`, () => {
    let iterable: Iterable<number>;
    let helper: Iterable<number>;

    beforeEach(() => {
      iterable = new Ctor();
      helper = new Ctor();
    });

    describe('equals', () => {
      it('should return true if iterables are equal', () => {
        iterable.addAll([1, 2, 3]);
        helper.addAll([1, 2, 3]);

        expect(iterable.equals(helper)).toBeTruthy();
      });

      it('should return false if iterables are not equal', () => {
        iterable.addAll([1, 2, 3]);
        helper.addAll([1, 2, 4]);

        expect(iterable.equals(helper)).toBeFalsy();
      });
    });
  });
};

/**
 * Generic test factory to test array conversion on iterables
 */
export const IterableToArrayTest = <T extends Iterable<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for iterable implementation: ${name}`, () => {
    let iterable: Iterable<number>;

    beforeEach(() => {
      iterable = new Ctor();
    });

    describe('toArray', () => {
      it('should return an empty array', () => {
        expect(iterable.toArray()).toStrictEqual([]);
      });

      it('should return an array of elements', () => {
        iterable.addAll([1, 2, 3]);

        expect(iterable.toArray()).toStrictEqual([1, 2, 3]);
      });
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
