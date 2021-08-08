import {
  ContainerAccessTests,
  ContainerEqualityTest,
  ContainerRemoveTests,
  ContainerToArrayTest,
} from '../interfaces/container.spec';
import { AtTests, SortedAddTests } from './list.spec';
import { SortedLinkedList } from './sorted.linked.list';

// Container specific tests
ContainerRemoveTests<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

ContainerAccessTests<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

ContainerEqualityTest<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

ContainerToArrayTest<SortedLinkedList<number>>(
  'SortedLinkedList',
  SortedLinkedList
);

// List specific tests
SortedAddTests<SortedLinkedList<number>>('SortedLinkedList', SortedLinkedList);

AtTests<SortedLinkedList<number>>('SortedLinkedList', SortedLinkedList);
