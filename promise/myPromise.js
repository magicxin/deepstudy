/**'use strict'

var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2
// 构造函数
function MyPromise(excutor) {
  // 初始化状态和返回值
  this._state = this.result = void 0
  // 初始化订阅者
  this.subscribers = []
}

MyPromise.prototype.then = function(onFulfilled,onRejected) {
  var _state = this._state
  var child = new this.constructor()
  // 如果状态是 fulfilled 或 rejected
  if(_state) {
    asap()
  }else {// 如果状态是 pending
    subscribe()
  }
  // 返回一个promise 保证链式调用
  return child
}

// 订阅
function subscribe() {
  
}

// 发布
function publish() {
  
}

// 尽快执行
function asap() {
  
}**/

// 执行传入的参数
var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2

function MyPromise(excutor) {
  this._state = this._result = void 0
  this._subscribers = []
// 异步时会报错，因为当前还不存在 excutor 方法
//excutor((value) => {
//  resolve(this,value)
//},(reson) => {})

// 通过 noop 判断是否是 child
  if(noop !== excutor) {
    initialize(this,excutor)
  }
}
// then 方法 需要包含 三个状态 返回 promise 对象
MyPromise.prototype.then = function(onfulfilled,onrejected) {
  var _state = this._state
  // 初始化 excutor 防止实例化时错误引用
  var child = new this.constructor(noop)
    if(_state) {
      onfulfilled(this._result)
    }else {
      subscribe(this,child,onfulfilled,onrejected)
    }
  // 返回一个promise 保证链式调用
  return child
}

// 初始化
function initialize(promise,excutor) {
  excutor((value) => {
    resolve(promise,value)
  },(reson) => {})
}

function resolve(promise,value) {
  // 保证 fulfilled 状态不可变
  if (promise._state !== PENDING) {
    return;
  }
  promise._result = value;
  promise._state = FULFILLED;
  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

// 发布者 需要通知订阅
function publish() {
  
}
// 订阅者，需要将事件加入队列
function subscribe(parent,child,onfulfilled,onrejected) {
    
}
// 
function noop() {}
