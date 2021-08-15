export interface Iterable<T> {
  /**
   * Adds an element to the iterable
   */
  add(elem: T): Iterable<T>;

  /**
   * Adds all elements to the iterable
   */
  addAll(elems: T[]): Iterable<T>;

  /**
   * Removes an element from the iterable
   */
  remove(elem: T): T | undefined;

  /**
   * Removes all elements that exist in the iterable and
   * the given iterable
   */
  removeAll(elems: T[]): T[];

  /**
   * True if the iterable is empty
   */
  isEmpty(): boolean;

  /**
   * Searches for the given element
   */
  find(elem: T): T | undefined;

  /**
   * Returns the iterable size
   */
  size(): number;

  /**
   * True if the given iterable has the same elements at the
   * same position as this iterable
   */
  equals(that: Iterable<T>): boolean;

  /**
   * Convert the iterable to a basic array
   */
  toArray(): T[];
}
