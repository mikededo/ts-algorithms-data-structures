import { Stack } from './stack';

/**
 * Generic test factory to test push functions on stacks
 */
export const StackPushTests = <T extends Stack<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common enqueuing tests for stack implementation: ${name}`, () => {
    let stack: Stack<number>;

    beforeEach(() => {
      stack = new Ctor();
    });

    describe('push', () => {
      it('should add an element', () => {
        stack.push(1);

        expect(stack.top()).toBe(1);
        expect(stack.size()).toBe(1);
      });

      it('should add many elements', () => {
        stack.push(1).push(2);

        expect(stack.top()).toBe(2);
        expect(stack.size()).toBe(2);
      });
    });

    describe('pushAll', () => {
      it('should push all elements', () => {
        stack.pushAll([1, 2, 3, 4]);

        expect(stack.top()).toBe(4);
        expect(stack.size()).toBe(4);
      });

      it('should push chained calls', () => {
        stack.pushAll([1, 2, 3, 4]).pushAll([1, 2, 3, 4]);

        expect(stack.top()).toBe(4);
        expect(stack.size()).toBe(8);
      });
    });
  });
};

/**
 * Generic test factory to test pop operator on stacks
 */
export const StackPopTests = <T extends Stack<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common popping tests for stack implementation: ${name}`, () => {
    let stack: Stack<number>;

    beforeEach(() => {
      stack = new Ctor();
    });

    describe('pop', () => {
      it('should pop an the top element', () => {
        stack.push(1).push(2);

        expect(stack.top()).toBe(2);
        expect(stack.size()).toBe(2);

        expect(stack.pop()).toBe(2);
        expect(stack.size()).toBe(1);
        expect(stack.top()).toBe(1);
      });

      it('should pop many elements', () => {
        stack.push(1).push(2);

        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
      });

      it('should return undefined if pop on empty stack', () => {
        expect(stack.size()).toBe(0);
        expect(stack.pop()).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test top operator on stacks
 */
export const StackTopTest = <T extends Stack<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common toping tests for stack implementation: ${name}`, () => {
    let stack: Stack<number>;

    beforeEach(() => {
      stack = new Ctor();
    });

    describe('top', () => {
      it('should return the first element without removing it', () => {
        stack.push(1);

        expect(stack.top()).toBe(1);
        expect(stack.size()).toBe(1);
      });

      it('should return undefined if toping on empty stack', () => {
        expect(stack.size()).toBe(0);
        expect(stack.top()).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test equality operator on stacks
 */
export const StackEqualityTest = <T extends Stack<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for stack implementation: ${name}`, () => {
    let stack: Stack<number>;
    let helper: Stack<number>;

    beforeEach(() => {
      stack = new Ctor();
      helper = new Ctor();
    });

    describe('equals', () => {
      it('should return true if stacks are equal', () => {
        stack.pushAll([1, 2, 3]);
        helper.pushAll([1, 2, 3]);

        expect(stack.equals(helper)).toBeTruthy();
      });

      it('should return false if stacks are not equal', () => {
        stack.pushAll([1, 2, 3]);
        helper.pushAll([1, 2, 4]);

        expect(stack.equals(helper)).toBeFalsy();
      });
    });
  });
};

/**
 * Generic test factory to test array conversion on stacks
 */
export const StackToArrayTest = <T extends Stack<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for stack implementation: ${name}`, () => {
    let stack: Stack<number>;

    beforeEach(() => {
      stack = new Ctor();
    });

    describe('toArray', () => {
      it('should return an empty array', () => {
        expect(stack.toArray()).toStrictEqual([]);
      });

      it('should return an array of elements', () => {
        stack.pushAll([1, 2, 3]);

        expect(stack.toArray()).toStrictEqual([3, 2, 1]);
      });
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
