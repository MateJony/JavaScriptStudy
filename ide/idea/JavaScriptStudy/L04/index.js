/**
 * Created by TTYH_MAC on 15/12/1.
 */


function A() {

    this.sayHeHe = function() {
        console.log("hehe JS");
    }

}

A.prototype.sayHello = function() {
    console.log("Hello JS");
} // 实例方法

A.sayHi = function() {
    console.log("Hi JS");
} // 静态方法

var a = new A();
a.sayHello();
a.sayHeHe();
A.sayHi();


function B() {

}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHeHe();
