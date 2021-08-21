import {
  StackEqualityTest,
  StackPopTests,
  StackPushTests,
  StackToArrayTest,
  StackTopTest,
} from '../interfaces/stack.spec';
import { Stack } from './stack';

// Common queue tests
StackTopTest<Stack<number>>('Stack', Stack);

StackPushTests<Stack<number>>('Stack', Stack);

StackPopTests<Stack<number>>('Stack', Stack);

StackEqualityTest<Stack<number>>('Stack', Stack);

StackToArrayTest<Stack<number>>('Stack', Stack);
