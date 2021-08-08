export abstract class List<T> {
  /**
   * Adds an element to the list. If the index is passed,
   * adds the element at the given position.
   * If the index given is greater than the list size, it
   * appends it
   */
  abstract add(elem: T, index?: number): List<T>;

  /**
   * Adds all elements to the list. If the index is passed,
   * appends the elements at the given position.
   * If the index given is greater than the list size, it
   * appends it
   */
  abstract addAll(elems: T[], index?: number): List<T>;

  /**
   * Removes an element from the list
   */
  abstract remove(elem: T): T | undefined;

  /**
   * Removes all elements that exist in the list and
   * the given list
   */
  abstract removeAll(elems: T[]): T[];

  /**
   * True if the list is empty
   */
  abstract isEmpty(): boolean;

  /**
   * Returns the element at the given index
   */
  abstract at(index: number): T | undefined;

  /**
   * Returns the list size
   */
  abstract size(): number;

  /**
   * True if the given list has the same elements at the
   * same position as this list
   */
  abstract equals(other: List<T>): boolean;

  /**
   * Convert the list to a basic array
   */
  abstract toArray(): T[];
}
