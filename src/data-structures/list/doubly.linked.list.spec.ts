import {
  IterableAccessTests,
  IterableAddTests,
  IterableEqualityTest,
  IterableRemoveTests,
  IterableToArrayTest,
} from '../interfaces/iterable.spec';
import { DoublyLinkedList } from './doubly.linked.list';
import { AtTests } from './list.spec';

// Iterable specific tests
IterableAddTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

IterableRemoveTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

IterableAccessTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

IterableEqualityTest<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

IterableToArrayTest<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

// List specific tests
AtTests<DoublyLinkedList<number>>('DoublyLinkedList', DoublyLinkedList);
