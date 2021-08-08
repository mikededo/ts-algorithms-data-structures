import { Container } from './container';

/**
 * Generic test factory to test add functions on containers
 */
export const ContainerAddTests = <T extends Container<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common adding tests for container implementation: ${name}`, () => {
    let container: Container<number>;

    beforeEach(() => {
      container = new Ctor();
    });

    describe('add', () => {
      it('should add an elem', () => {
        container.add(1);

        expect(container.find(1)).toBeDefined();
        expect(container.size()).toBe(1);
      });

      it('should add many elements', () => {
        container.add(1).add(2);

        expect(container.find(1)).toBeDefined();
        expect(container.find(2)).toBeDefined();
        expect(container.toArray()).toStrictEqual([1, 2]);
        expect(container.size()).toBe(2);
      });
    });

    describe('addAll', () => {
      it('should add all elements', () => {
        container.addAll([1, 2, 3]);

        expect(container.size()).toBe(3);
        expect(container.find(1)).toBeDefined();
        expect(container.find(2)).toBeDefined();
        expect(container.find(3)).toBeDefined();
        expect(container.toArray()).toStrictEqual([1, 2, 3]);
      });

      it('should add all elements, appended', () => {
        const range = [1, 2, 3];
        container.addAll(range);
        container.addAll(range);

        expect(container.size()).toBe(6);
        expect(container.toArray()).toStrictEqual([...range, ...range]);
      });
    });
  });
};

/**
 * Generic test factory to test remove functions on containers
 */
export const ContainerRemoveTests = <T extends Container<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common remove tests for container implementation: ${name}`, () => {
    let container: Container<number>;

    beforeEach(() => {
      container = new Ctor();
    });

    describe('remove', () => {
      it('should remove the first elem', () => {
        container.add(1);
        expect(container.size()).toBe(1);

        const res = container.remove(1);
        expect(container.size()).toBe(0);
        expect(res).toBeDefined();
        expect(res).toBe(1);
      });

      it('should remove the last elem', () => {
        container.addAll([1, 2, 3]);
        expect(container.size()).toBe(3);

        const res = container.remove(3);
        expect(container.size()).toBe(2);
        expect(res).toBeDefined();
        expect(res).toBe(3);
      });

      it('should return undefined on elem not found', () => {
        const res = container.add(1).remove(2);

        expect(container.size()).toBe(1);
        expect(res).toBeUndefined();
      });
    });

    describe('removeAll', () => {
      it('should remove all elems', () => {
        container.addAll([1, 2, 3]);
        expect(container.size()).toBe(3);

        const res = container.removeAll([1, 2, 3]);
        expect(container.size()).toBe(0);
        expect(res).toStrictEqual([1, 2, 3]);
      });

      it('should remove only the elems that exist', () => {
        container.addAll([1, 2, 3]);
        expect(container.size()).toBe(3);

        const res = container.removeAll([1, 2, 4]);
        expect(container.size()).toBe(1);
        expect(res).toStrictEqual([1, 2]);
      });

      it('should not remove any elem', () => {
        container.addAll([1, 2, 3]);
        expect(container.size()).toBe(3);

        const res = container.removeAll([]);
        expect(container.size()).toBe(3);
        expect(res).toStrictEqual([]);
      });
    });
  });
};

/**
 * Generic test factory to test access functions on containers
 */
export const ContainerAccessTests = <T extends Container<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common access tests for container implementation: ${name}`, () => {
    let container: Container<number>;

    beforeEach(() => {
      container = new Ctor();
    });

    describe('find', () => {
      it('should find an elem if exists', () => {
        container.addAll([1, 2, 3, 4, 5, 6]);
        const res = container.find(3);

        expect(res).toBeDefined();
        expect(res).toBe(3);
      });

      it('should return only one elem if repeated', () => {
        container.addAll([1, 2, 3, 1, 1, 2]);
        const res = container.find(2);

        expect(res).toBeDefined();
        expect(res).toBe(2);
      });

      it('should return undefined on find if no elements', () => {
        const res = container.find(1);

        expect(res).toBeUndefined();
      });

      it('should return undefined if elem does not exist', () => {
        container.addAll([1, 2, 3, 4, 5]);
        const res = container.find(6);

        expect(res).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test equality operator on containers
 */
export const ContainerEqualityTest = <T extends Container<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for container implementation: ${name}`, () => {
    let container: Container<number>;
    let helper: Container<number>;

    beforeEach(() => {
      container = new Ctor();
      helper = new Ctor();
    });

    describe('equals', () => {
      it('should return true if containers are equal', () => {
        container.addAll([1, 2, 3]);
        helper.addAll([1, 2, 3]);

        expect(container.equals(helper)).toBeTruthy();
      });

      it('should return false if containers are not equal', () => {
        container.addAll([1, 2, 3]);
        helper.addAll([1, 2, 4]);

        expect(container.equals(helper)).toBeFalsy();
      });
    });
  });
};

/**
 * Generic test factory to test array conversion on containers
 */
export const ContainerToArrayTest = <T extends Container<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for container implementation: ${name}`, () => {
    let container: Container<number>;

    beforeEach(() => {
      container = new Ctor();
    });

    describe('toArray', () => {
      it('should return an empty array', () => {
        expect(container.toArray()).toStrictEqual([]);
      });

      it('should return an array of elements', () => {
        container.addAll([1, 2, 3]);

        expect(container.toArray()).toStrictEqual([1, 2, 3]);
      });
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
