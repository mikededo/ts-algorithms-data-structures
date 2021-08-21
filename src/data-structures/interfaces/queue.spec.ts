import { Queue } from './queue';

/**
 * Generic test factory to test enqueue functions on queues
 */
export const QueueEnqueueTests = <T extends Queue<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common enqueuing tests for queue implementation: ${name}`, () => {
    let queue: Queue<number>;

    beforeEach(() => {
      queue = new Ctor();
    });

    describe('enqueue', () => {
      it('should add an element', () => {
        queue.enqueue(1);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(1);
      });

      it('should add many elements', () => {
        queue.enqueue(1).enqueue(2);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(2);
      });
    });

    describe('enqueueAll', () => {
      it('should enqueue all elements', () => {
        queue.enqueueAll([1, 2, 3, 4]);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(4);
      });

      it('should enqueue chained calls', () => {
        queue.enqueueAll([1, 2, 3, 4]).enqueueAll([1, 2, 3, 4]);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(8);
      });
    });
  });
};

/**
 * Generic test factory to test dequeue operator on queues
 */
export const QueueDequeueTests = <T extends Queue<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common dequeueing tests for queue implementation: ${name}`, () => {
    let queue: Queue<number>;

    beforeEach(() => {
      queue = new Ctor();
    });

    describe('dequeue', () => {
      it('should dequeue an the top element', () => {
        queue.enqueue(1).enqueue(2);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(2);

        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(1);
        expect(queue.peek()).toBe(2);
      });

      it('should dequeue many elements', () => {
        queue.enqueue(1).enqueue(2);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.size()).toBe(0);
      });

      it('should return undefined if dequeue on empty queue', () => {
        expect(queue.size()).toBe(0);
        expect(queue.dequeue()).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test peek operator on queues
 */
export const QueuePeekTest = <T extends Queue<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common peeking tests for queue implementation: ${name}`, () => {
    let queue: Queue<number>;

    beforeEach(() => {
      queue = new Ctor();
    });

    describe('peek', () => {
      it('should return the first element without removing it', () => {
        queue.enqueue(1);

        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(1);
      });

      it('should return undefined if peeking on empty queue', () => {
        expect(queue.size()).toBe(0);
        expect(queue.peek()).toBeUndefined();
      });
    });
  });
};

/**
 * Generic test factory to test equality operator on queues
 */
export const QueueEqualityTest = <T extends Queue<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for queue implementation: ${name}`, () => {
    let queue: Queue<number>;
    let helper: Queue<number>;

    beforeEach(() => {
      queue = new Ctor();
      helper = new Ctor();
    });

    describe('equals', () => {
      it('should return true if queues are equal', () => {
        queue.enqueueAll([1, 2, 3]);
        helper.enqueueAll([1, 2, 3]);

        expect(queue.equals(helper)).toBeTruthy();
      });

      it('should return false if queues are not equal', () => {
        queue.enqueueAll([1, 2, 3]);
        helper.enqueueAll([1, 2, 4]);

        expect(queue.equals(helper)).toBeFalsy();
      });
    });
  });
};

/**
 * Generic test factory to test array conversion on queues
 */
export const QueueToArrayTest = <T extends Queue<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common equality tests for queue implementation: ${name}`, () => {
    let queue: Queue<number>;

    beforeEach(() => {
      queue = new Ctor();
    });

    describe('toArray', () => {
      it('should return an empty array', () => {
        expect(queue.toArray()).toStrictEqual([]);
      });

      it('should return an array of elements', () => {
        queue.enqueueAll([1, 2, 3]);

        expect(queue.toArray()).toStrictEqual([1, 2, 3]);
      });
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
