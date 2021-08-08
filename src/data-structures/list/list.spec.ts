import { List } from './list';

/**
 * Generic test factory for at function of lists
 */
export const AtTests = <T extends List<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common at tests for list implementation: ${name}`, () => {
    let list: List<number>;

    beforeEach(() => {
      list = new Ctor();
    });

    it('should return the element at the first position', () => {
      list.addAll([1, 2]);

      expect(list.at(0)).toBeDefined();
      expect(list.at(0)).toBe(1);
    });

    it('should return undefined if index is less than 0', () => {
      expect(list.at(-1)).toBeUndefined();
    });

    it('should return undefined if index overflows', () => {
      expect(list.at(2)).toBeUndefined();
    });
  });
};

/**
 * Generic test factory for sorted lists
 */
export const SortedAddTests = <T extends List<number>>(
  name: string,
  Ctor: new () => T
) => {
  describe(`Common adding tests for sorted list implementation: ${name}`, () => {
    let list: List<number>;

    beforeEach(() => {
      list = new Ctor();
    });

    describe('add', () => {
      it('should keep order on adding sorted elements', () => {
        list.add(1).add(2).add(3);

        expect(list.size()).toBe(3);
        expect(list.toArray()).toStrictEqual([1, 2, 3]);
      });

      it('should keep order on adding not sorted elements', () => {
        list.add(3).add(2).add(1);

        expect(list.size()).toBe(3);
        expect(list.toArray()).toStrictEqual([1, 2, 3]);
      });

      it('should keep order on adding repeated elements', () => {
        list.add(2).add(1).add(1).add(4).add(3).add(3);

        expect(list.size()).toBe(6);
        expect(list.toArray()).toStrictEqual([1, 1, 2, 3, 3, 4]);
      });
    });

   describe('addAll', () => {
      it('should keep order on adding elements from an ordered array', () => {
        const range = [...Array(10).keys()];
        list.addAll(range);

        expect(list.size()).toBe(10);
        expect(list.toArray()).toStrictEqual(range);
      });

      it('should keep order on adding two lists', () => {
        const range = [...Array(5).keys()];
        list.addAll(range).addAll(range);

        expect(list.size()).toBe(10);
        expect(list.toArray()).toStrictEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]);
      }); 
    });
  });
};

describe('Common tests for CommonListTests implementations', () => {
  it('should be used per implementation', () => {});
});
