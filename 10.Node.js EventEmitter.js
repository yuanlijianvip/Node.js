// Node.js EventEmitter
// Node.js所有的异步I/O操作在完成时都会发送一个事件到事件队列
// Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时触发一个事件，一个fs.readStream对象
// 会在文件被打开的时候触发一个事件。所有这些产生事件的对象都是events.EventEmitter的实例。

// EventEmitter类
// events模块只提供了一个对象: events.EventEmitter。EventEmitter的核心就是事件触发与事件监听功能的封装。
// 你可以通过require("events");来访问该模块。

//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// EventEmitter对象如果在实例化时发生错误，会触发error事件。当添加新的监听器时，newListener事件会触发，当监听被移除时，
// removeListener事件被触发。

// 下面用简单的例子说明EventEmitter的用法：
//event.js文件


// EventEmitter的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，
// EventEmitter支持若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。


// EventEmitter提供了多个属性，如on和emit。on函数用于绑定事件函数，emit属性用于触发一个事件。接下来我们来具体看一下
// EventEmitter的属性介绍。

// 方法
// 1.addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部。
// 2.on(event,listener) 为指定事件注册一个监听器,接收一个字符串event和一个回调函数。
server.on('connection', function(stream){
    console.log('someone connected!');
});
// 3.once(event, listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器
server.once('connection', function(stream) {
    console.log('Ah,we have our first user!');
});
// 4.removeListener(event, listener) 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 它接收两个参数，第一个是事件名称，第二个是回调函数名称。
var callback = function(stream) {
    console.log('someone connected!');
};
server.on('connection', callback);
//...
server.removeListener('connection', callback);
// 5.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器
// 6.setMaxListeners(n); 默认情况下，EventEmitters如果你添加的监听器超过10个就会输出警告信息。
// setMAxListeners函数用于提高监听器的默认限制的数量。
// 7.listeners 返回指定事件的监听器数组。
// 8.emit(event, [arg1], [arg2], [...]) 按监听器顺序执行每个监听器，如果事件有注册监听返回true,否则返回false。

// 类方法
// listenerCount(emitter, event) 返回指定事件的监听器数量
// events.emitter.listenerCount(eventName) //推荐

// 事件
// 1.newListener
//     event-字符串，事件名称
//     listener-处理事件函数
//     该事件在添加新监控时被触发
// 2.removeListener
//     event-字符串，事件名称
//     listener-处理事件函数
//     从指定监听器数组中删除一个监听器，需要注意的是，此操作将会改变处于被监听之后的那些监听器的索引。


// erroe事件
// EventEmitter定义了一个特殊的事件error,它包含了错误的语义，我们在遇到异常的时候通常会触发error事件。
// 当error被触发时，EventEmitter规定如果没有监听器的响应，Node.js会把它当做异常，退出程序并输出错误信息。
// 我们一般要为会触发error事件的对象设置监听器，避免遇到错误后从整个程序崩溃。


// 继承EventEmitter
// 大多数时候不能直接使用EventEmitter,而是在对象中继承它。包括fs net http在内的，只要是支持事件响应的核心模块都是
// EventEmitter的子类。
// 为什么要这样做呢？
// 首先，具体某个实体功能的对象实现事件符合语义，事件的监听和发生应该是一个对象的方法。
// 其次Javascript的对象机制是基于原型的，支持部分多重继承，继承EventEmitter不会打乱对象原有的继承关系。