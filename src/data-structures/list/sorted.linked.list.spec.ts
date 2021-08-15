import {
  IterableAccessTests,
  IterableEqualityTest,
  IterableRemoveTests,
  IterableToArrayTest,
} from '../interfaces/iterable.spec';
import { AtTests, SortedAddTests } from './list.spec';
import { SortedLinkedList } from './sorted.linked.list';

// Iterable specific tests
IterableRemoveTests<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

IterableAccessTests<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

IterableEqualityTest<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

IterableToArrayTest<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

// List specific tests
SortedAddTests<SortedLinkedList<number>>('SortedLinkedList', SortedLinkedList);

AtTests<SortedLinkedList<number>>('SortedLinkedList', SortedLinkedList);
