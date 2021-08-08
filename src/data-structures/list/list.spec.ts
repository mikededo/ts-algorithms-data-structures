import { List } from './list';

/**
 * Generic test factory. Generic type of the list is number,
 * but any other would work
 */
export const CommonListTests = <I extends List<number>>(
  name: string,
  Ctor: new () => I
) => {
  describe(`Common tests for list impementation: ${name}`, () => {
    let list: List<number>;
    let helper: List<number>;

    beforeEach(() => {
      list = new Ctor();
      helper = new Ctor();
    });

    describe('isEmpty', () => {
      it('should return true if empty', () => {
        expect(list.isEmpty()).toBeTruthy();
      });

      it('should return false if not empty', () => {
        list.add(1);
        expect(list.isEmpty()).toBeFalsy();
      });
    });

    describe('at', () => {
      it('should return the value at a given index', () => {
        list.add(1);

        expect(list.at(0)).toBe(1);
      });

      it('should return undefined on overflowed index', () => {
        expect(list.at(0)).toBeUndefined();
      });
    });

    describe('add', () => {
      it('should add an element', () => {
        list.add(1);

        expect(list.at(0)).toBe(1);
        expect(list.size()).toBe(1);
      });

      it('should add two elements at the same position', () => {
        list.add(1);
        expect(list.at(0)).toBe(1);

        list.add(2, 0);
        expect(list.at(0)).toBe(2);

        expect(list.at(1)).toBeUndefined();
        expect(list.size()).toBe(1);
      });

      it('should add an element to an overflowed index', () => {
        list.add(1, 1);

        expect(list.at(0)).toBe(1);
        expect(list.size()).toBe(1);
      });
    });

    describe('addAll', () => {
      it('should add all elements', () => {
        list.addAll([1, 2, 3]);

        expect(list.size()).toBe(3);
        expect(list.at(0)).toBe(1);
        expect(list.at(1)).toBe(2);
        expect(list.at(2)).toBe(3);
      });

      it('should add all elements, from two list, overlapped', () => {
        list.addAll([1, 2, 3]);
        list.addAll([1, 2, 3], 1);

        expect(list.size()).toBe(4);
        expect(list.at(0)).toBe(1);
        expect(list.at(1)).toBe(1);
        expect(list.at(2)).toBe(2);
        expect(list.at(3)).toBe(3);
      });

      it('should add all elements to an overflowed index', () => {
        list.addAll([1, 2, 3], 3);

        expect(list.size()).toBe(3);
        expect(list.at(0)).toBe(1);
        expect(list.at(1)).toBe(2);
        expect(list.at(2)).toBe(3);
      });
    });

    describe('remove', () => {
      it('should remove the first elem', () => {
        list.add(1);
        expect(list.size()).toBe(1);

        const res = list.remove(1);
        expect(list.size()).toBe(0);
        expect(res).toBeDefined();
        expect(res).toBe(1);
      });

      it('should remove the last elem', () => {
        list.addAll([1, 2, 3]);
        expect(list.size()).toBe(3);

        const res = list.remove(3);
        expect(list.size()).toBe(2);
        expect(res).toBeDefined();
        expect(res).toBe(3);
      });

      it('should return undefined on element not found', () => {
        const res = list.add(1).remove(2);

        expect(list.size()).toBe(1);
        expect(res).toBeUndefined();
      });
    });

    describe('removeAll', () => {
      it('should remove all elems', () => {
        list.addAll([1, 2, 3]);
        expect(list.size()).toBe(3);
        
        const res = list.removeAll([1, 2, 3]);
        expect(list.size()).toBe(0);
        expect(res).toStrictEqual([1, 2, 3]);
      });

      it('should remove only the elems that exist', () => {
        list.addAll([1, 2, 3]);
        expect(list.size()).toBe(3);

        const res = list.removeAll([1, 2, 4]);
        expect(list.size()).toBe(1);
        expect(res).toStrictEqual([1, 2]);
      });

      it('should not remove any item', () => {
        list.addAll([1, 2, 3]);
        expect(list.size()).toBe(3);

        const res = list.removeAll([]);
        expect(list.size()).toBe(3);
        expect(res).toStrictEqual([]);
      });
    });

    describe('equals', () => {
      it('should return true if lists are equal', () => {
        list.addAll([1, 2, 3]);
        helper.addAll([1, 2, 3]);

        expect(list.equals(helper)).toBeTruthy();
      });

      it('should return false if lists are not equal', () => {
        list.addAll([1, 2, 3]);
        helper.addAll([1, 2, 4]);

        expect(list.equals(helper)).toBeFalsy();
      });
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
