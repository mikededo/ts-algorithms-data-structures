export interface Stack<T> {
  /**
   * Pushes an element to the head of the stack
   */
  push(elem: T): Stack<T>;

  /**
   * Pushes all the elements from the list
   */
  pushAll(elems: T[]): Stack<T>;

  /**
   * Pops the top element and returns it. If stack is empty,
   * returns undefined
   */
  pop(): T;

  /**
   * Returns the top element without removing it. If stack is empty,
   * returns undefined
   */
  top(): T;

  /**
   * Returns the stack size
   */
  size(): number;

  /**
   * True if the given stack has the same elements at the
   * same position as this stack
   */
  equals(that: Stack<T>): boolean;

  /**
   * Convert the stack to a basic array
   */
  toArray(): T[];
}
