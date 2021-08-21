import { Queue } from '../interfaces/queue';

class Node<T> {
  constructor(public value: T, public next: Node<T> = null) {}
}

export class FIFOQueue<T> implements Queue<T> {
  constructor(
    private head: Node<T> = null,
    private tail: Node<T> = null,
    private length: number = 0
  ) {}

  enqueue(elem: T): Queue<T> {
    const node = new Node(elem);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  enqueueAll(elems: T[]): Queue<T> {
    elems.forEach((elem) => {
      this.enqueue(elem);
    });

    return this;
  }

  dequeue(): T {
    if (this.length === 0) {
      return undefined;
    }

    const res = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return res;
  }

  peek(): T {
    return this.length ? this.head.value : undefined;
  }

  size(): number {
    return this.length;
  }

  equals(that: FIFOQueue<T>): boolean {
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
