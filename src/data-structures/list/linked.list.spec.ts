import {
  IterableAccessTests,
  IterableAddTests,
  IterableEqualityTest,
  IterableRemoveTests,
  IterableToArrayTest,
} from '../interfaces/iterable.spec';
import { LinkedList } from './linked.list';
import { AtTests } from './list.spec';

// Iterable specific tests
IterableAddTests<LinkedList<number>>('LinkedList', LinkedList);

IterableRemoveTests<LinkedList<number>>('LinkedList', LinkedList);

IterableAccessTests<LinkedList<number>>('LinkedList', LinkedList);

IterableEqualityTest<LinkedList<number>>('LinkedList', LinkedList);

IterableToArrayTest<LinkedList<number>>('LinkedList', LinkedList);

// List specific tests
AtTests<LinkedList<number>>('LinkedList', LinkedList);
