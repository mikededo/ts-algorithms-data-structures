import { List } from './list';

class Node<T> {
  constructor(public value: T, public next: Node<T> = null) {}
}

export class LinkedList<T> extends List<T> {
  constructor(private head: Node<T> = null, private length: number = 0) {
    super();
  }

  add(elem: T): LinkedList<T> {
    const node = new Node(elem);

    if (this.length === 0) {
      this.head = node;
      this.length++;
    } else {
      let curr: Node<T> = this.head;
      let prev: Node<T> = null;

      while (curr) {
        prev = curr;
        curr = curr.next;
      }

      if (prev) {
        if (curr) {
          prev.next = node;
          node.next = curr;
        } else {
          prev.next = node;
        }
      } else {
        node.next = curr;
        this.head = node;
      }

      this.length++;
    }

    return this;
  }

  addAll(elems: T[]): LinkedList<T> {
    elems.forEach((elem) => {
      this.add(elem);
    });

    return this;
  }

  remove(elem: T): T {
    if (this.length === 0) {
      return undefined;
    }

    let curr: Node<T> = this.head;
    let prev: Node<T> = null;

    if (curr.value === elem) {
      this.head = curr.next;
      this.length--;

      return elem;
    }

    while (curr && curr.value !== elem) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    prev.next = curr.next;
    this.length--;

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
    return this.length === 0;
  }

  at(index: number): T {
    if (index >= this.length || !this.length || index < 0) {
      return undefined;
    }

    if (index === 0) {
      return this.head.value;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.value;
  }

  find(elem: T): T {
    if (this.length === 0) {
      return undefined;
    }

    let curr: Node<T> = this.head;

    while (curr && curr.value !== elem) {
      curr = curr.next;
    }

    if (curr) {
      return curr.value;
    }

    return undefined;
  }

  size(): number {
    return this.length;
  }

  equals(that: LinkedList<T>): boolean {
    if (this.length !== that.length) {
      return false;
    }

    let equal = true;
    let thisCurr = this.head;
    let otherCurr = that.head;

    while (thisCurr && equal) {
      equal = thisCurr.value === otherCurr.value;

      thisCurr = thisCurr.next;
      otherCurr = otherCurr.next;
    }

    return equal;
  }

  toArray(): T[] {
    if (this.length === 0) {
      return [];
    }

    const res: T[] = [];
    let curr = this.head;

    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }

    return res;
  }
}
