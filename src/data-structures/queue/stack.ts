import { Stack as StackBase } from '../interfaces/stack';

class Node<T> {
  constructor(public value: T, public next: Node<T> = null) {}
}

export class Stack<T> implements StackBase<T> {
  constructor(private head: Node<T> = null, private length: number = 0) {}

  push(elem: T): Stack<T> {
    const node = new Node(elem);

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  pushAll(elems: T[]): Stack<T> {
    elems.forEach((elem) => {
      this.push(elem);
    });

    return this;
  }

  pop(): T {
    if (this.length === 0) {
      return undefined;
    }

    const res = this.head.value;

    this.head = this.head.next;
    this.length--;

    return res;
  }

  top(): T {
    return this.length ? this.head.value : undefined;
  }

  size(): number {
    return this.length;
  }

  equals(that: Stack<T>): boolean {
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
