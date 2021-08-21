import {
  QueueEqualityTest,
  QueuePeekTest,
  QueueDequeueTests,
  QueueEnqueueTests,
  QueueToArrayTest,
} from '../interfaces/queue.spec';
import { FIFOQueue } from './fifo';

// Common queue tests
QueuePeekTest<FIFOQueue<number>>('FIFOQueue', FIFOQueue);

QueueDequeueTests<FIFOQueue<number>>('FIFOQueue', FIFOQueue);

QueueEnqueueTests<FIFOQueue<number>>('FIFOQueue', FIFOQueue);

QueueEqualityTest<FIFOQueue<number>>('FIFOQueue', FIFOQueue);

QueueToArrayTest<FIFOQueue<number>>('FIFOQueue', FIFOQueue);
