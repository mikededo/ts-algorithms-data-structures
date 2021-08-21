export interface Queue<T> {
  /**
   * Enqueues an element to the head of the queue
   */
  enqueue(elem: T): Queue<T>;

  /**
   * Enqueues all the elements from the list
   */
  enqueueAll(elems: T[]): Queue<T>;

  /**
   * Removes the top element and returns it. If queue is empty,
   * returns undefined
   */
  dequeue(): T;

  /**
   * Returns the top element without removing it. If queue is empty,
   * returns undefined
   */
  peek(): T;

  /**
   * Returns the queue size
   */
  size(): number;

  /**
   * True if the given queue has the same elements at the
   * same position as this queue
   */
  equals(that: Queue<T>): boolean;

  /**
   * Convert the queue to a basic array
   */
  toArray(): T[];
}
