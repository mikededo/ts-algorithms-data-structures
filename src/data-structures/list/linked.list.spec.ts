import {
  ContainerAccessTests,
  ContainerAddTests,
  ContainerEqualityTest,
  ContainerRemoveTests,
  ContainerToArrayTest,
} from '../interfaces/container.spec';
import { LinkedList } from './linked.list';
import { AtTests } from './list.spec';

// Container specific tests
ContainerAddTests<LinkedList<number>>('LinkedList', LinkedList);

ContainerRemoveTests<LinkedList<number>>('LinkedList', LinkedList);

ContainerAccessTests<LinkedList<number>>('LinkedList', LinkedList);

ContainerEqualityTest<LinkedList<number>>('LinkedList', LinkedList);

ContainerToArrayTest<LinkedList<number>>('LinkedList', LinkedList);

// List specific tests
AtTests<LinkedList<number>>('LinkedList', LinkedList);