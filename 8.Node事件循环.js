// Node.js事件循环
// Node.js是单进程单线程应用程序，但是因为v8引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
// Node.js几乎每一个API都支持回调函数的
// Node.js基本上所有的事件机制都是用设计模式中观察者模式实现。
// Node.js单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，没个异步事件都生成一个事件观察者，
// 如果有事件发生就调用该回调函数。

// 事件驱动程序
// Node.js使用事件驱动模型，当web server接收到请求，就把他关闭然后进行处理，然后去服务下一个web服务。
// 当这个请求完成，他被放回处理队列，当到达队列开头，这个结果被返回给用户。
// 这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。(这也称之为非阻塞式IO)
// 在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。


// 整个事件驱动的流程就是这么实现的，非常简洁。这有点类似于观察者模式，事件相当于一个主题(Subject),而所有注册到这个事件的
// 处理函数相当于观察者(Observer)。

// Node.js有多个内置的事件，我们可以通过引入events模块，并通过实例化EventEmitter类来绑定和监听事件，如下实例:

// 引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
// 以下程序绑定事件处理程序:
//绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
// 我们可以通过程序触发事件：
eventEmitter.emit('eventName');


//Node应用程序是如何工作的？
// 在Node应用程序中，执行异步操作的函数将回调函数作为最后一个参数，回调函数接收错误对象作为第一个参数。？

