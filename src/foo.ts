// this will embed sass style in the js file thru webpack
import "./foo.scss";

/** 
 * Just for illustrative purposes :)
 */
import * as $ from "jquery";

/**
 * Some silly class to illustrate TypeScript modules
 */
export class Foo {
  constructor(private divId: string, private message: string) {}

  private doSomethingPrivate = () => {
    $(`#${this.divId}`).addClass("foo").text(this.message);
  };

  doSomething = () => {
    this.doSomethingPrivate();
  };
}
