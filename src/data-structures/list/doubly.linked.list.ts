import { List } from './list';

class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> = null,
    public prev: Node<T> = null
  ) {}
}

export class DoublyLinkedList<T> extends List<T> {
  constructor(private head: Node<T> = null, private length: number = 0) {
    super();
  }

  add(elem: T): DoublyLinkedList<T> {
    const node = new Node(elem);

    if (this.length === 0) {
      this.head = node;
    } else {
      let curr: Node<T> = this.head;
      let prev: Node<T> = null;

      while (curr) {
        prev = curr;
        curr = curr.next;
      }

      if (curr) {
        if (prev) {
          node.next = curr;
          node.prev = prev;
          curr.prev = node;
          prev.next = node;
        } else {
          this.head = node;
          node.next = curr;
          curr.prev = node;
        }
      } else {
        prev.next = node;
        node.prev = prev;
      }
    }

    this.length++;

    return this;
  }

  addAll(elems: T[]): DoublyLinkedList<T> {
    elems.forEach((elem) => {
      this.add(elem);
    });

    return this;
  }

  remove(elem: T): T {
    if (!this.length) {
      return undefined;
    }

    let curr: Node<T> = this.head;
    let prev: Node<T> = null;

    if (curr.value === elem) {
      this.head = curr.next;

      if (this.head) {
        this.head.prev = null;
      }

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
    if (curr.next) {
      curr.next.prev = prev;
    }

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
    if (index >= this.length || !this.length) {
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

  equals(that: DoublyLinkedList<T>): boolean {
    if (this.length !== that.length) {
      return false;
    }

    let equal = true;
    let thisCurr = this.head;
    let thatCurr = that.head;

    while (thisCurr && equal) {
      equal = thisCurr.value === thatCurr.value;

      thisCurr = thisCurr.next;
      thatCurr = thatCurr.next;
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
