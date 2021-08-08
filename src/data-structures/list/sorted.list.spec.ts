import {
  ContainerAccessTests,
  ContainerEqualityTest,
  ContainerRemoveTests,
  ContainerToArrayTest,
} from '../interfaces/container.spec';
import { AtTests, SortedAddTests } from './list.spec';
import { SortedList } from './sorted.list';

// Container specific tests
ContainerRemoveTests<SortedList<number>>('SortedList', SortedList);

ContainerAccessTests<SortedList<number>>('SortedList', SortedList);

ContainerEqualityTest<SortedList<number>>('SortedList', SortedList);

ContainerToArrayTest<SortedList<number>>('SortedList', SortedList);

// List specifi tests
SortedAddTests<SortedList<number>>('SortedList', SortedList);

AtTests<SortedList<number>>('SortedList', SortedList);