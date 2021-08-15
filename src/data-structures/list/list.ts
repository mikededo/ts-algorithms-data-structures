import { Iterable } from '../interfaces/iterable';

export abstract class List<T> implements Iterable<T> {
  /**
   * Adds an element to the list
   */
  abstract add(elem: T): List<T>;

  /**
   * Adds all elements to the list
   */
  abstract addAll(elems: T[]): List<T>;

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
   * Searches for the given element
   */
  abstract find(elem: T): T | undefined;

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
