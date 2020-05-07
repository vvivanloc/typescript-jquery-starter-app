
import { Foo } from './foo';

function bar() {
  const foo = new Foo('message','Hello world!');
  foo.doSomething();
}

bar();