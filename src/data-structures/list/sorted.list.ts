import { List } from './list';

/**
 * Faster implementation of a sorted list that does not
 * use links but arrays for faster serches. However, inserts
 * are not as fast.
 */
export class SortedList<T> extends List<T> {
  constructor(private list: Array<T> = []) {
    super();
  }

  add(elem: T): SortedList<T> {
    if (this.isEmpty()) {
      this.list.push(elem);
    } else if (this.list[0] > elem) {
      this.list = [elem, ...this.list];
    } else {
      const index = this.list.findIndex((value) => value >= elem);

      if (index === -1) {
        this.list.push(elem);
      } else {
        const half = this.list.splice(index);

        this.list = [...this.list.splice(0, index), elem, ...half];
      }
    }

    return this;
  }

  addAll(elems: T[]): SortedList<T> {
    elems.forEach((elem) => {
      this.add(elem);
    });

    return this;
  }

  remove(elem: T): T {
    const iof = this.list.indexOf(elem);
    if (iof === -1) {
      return undefined;
    }

    this.list.splice(iof, 1);

    return elem;
  }

  removeAll(elems: T[]): T[] {
    const list: T[] = [];

    elems.forEach((elem) => {
      const res = this.remove(elem);

      if (res) {
        list.push(res);
      }
    });

    return list;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  at(index: number): T {
    return this.list[index];
  }

  find(elem: T): T {
    return this.list.find((value) => value === elem);
  }

  size(): number {
    return this.list.length;
  }

  equals(that: SortedList<T>): boolean {
    if (this.list.length !== that.list.length) {
      return false;
    }

    let equal = true;
    for (let i = 0; i < this.list.length && equal; i++) {
      equal = this.list[i] === that.list[i];
    }

    return equal;
  }

  toArray(): T[] {
    return this.list;
  }
}
