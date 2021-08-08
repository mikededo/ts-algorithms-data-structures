export interface Container<T> {
  /**
   * Adds an element to the container
   */
  add(elem: T): Container<T>;

  /**
   * Adds all elements to the container
   */
  addAll(elems: T[]): Container<T>;

  /**
   * Removes an element from the container
   */
  remove(elem: T): T | undefined;

  /**
   * Removes all elements that exist in the container and
   * the given container
   */
  removeAll(elems: T[]): T[];

  /**
   * True if the container is empty
   */
  isEmpty(): boolean;

  /**
   * Searches for the given element
   */
  find(elem: T): T | undefined;

  /**
   * Returns the container size
   */
  size(): number;

  /**
   * True if the given container has the same elements at the
   * same position as this container
   */
  equals(other: Container<T>): boolean;

  /**
   * Convert the container to a basic array
   */
  toArray(): T[];
}
