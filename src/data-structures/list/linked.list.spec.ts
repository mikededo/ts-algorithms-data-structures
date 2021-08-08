import { LinkedList } from './linked.list';
import { CommonListTests } from './list.spec';

CommonListTests<LinkedList<number>>('LinkedList', LinkedList);
