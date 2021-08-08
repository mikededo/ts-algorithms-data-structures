import {
  ContainerAccessTests,
  ContainerAddTests,
  ContainerEqualityTest,
  ContainerRemoveTests,
  ContainerToArrayTest,
} from '../interfaces/container.spec';
import { DoublyLinkedList } from './doubly.linked.list';
import { AtTests } from './list.spec';

// Container specific tests
ContainerAddTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

ContainerRemoveTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

ContainerAccessTests<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

ContainerEqualityTest<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

ContainerToArrayTest<DoublyLinkedList<number>>(
  'DoublyLinkedList',
  DoublyLinkedList
);

// List specific tests
AtTests<DoublyLinkedList<number>>('DoublyLinkedList', DoublyLinkedList);
