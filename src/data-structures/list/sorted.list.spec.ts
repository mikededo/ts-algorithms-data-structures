import {
  IterableAccessTests,
  IterableEqualityTest,
  IterableRemoveTests,
  IterableToArrayTest,
} from '../interfaces/iterable.spec';
import { AtTests, SortedAddTests } from './list.spec';
import { SortedList } from './sorted.list';

// Iterable specific tests
IterableRemoveTests<SortedList<number>>('SortedList', SortedList);

IterableAccessTests<SortedList<number>>('SortedList', SortedList);

IterableEqualityTest<SortedList<number>>('SortedList', SortedList);

IterableToArrayTest<SortedList<number>>('SortedList', SortedList);

// List specifi tests
SortedAddTests<SortedList<number>>('SortedList', SortedList);

AtTests<SortedList<number>>('SortedList', SortedList);
