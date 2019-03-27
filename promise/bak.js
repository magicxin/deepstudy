'use strict'
var PROMISE_ID = Math.random().toString(36).substr(2)

var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2
// Promise 构造函数
function MyPromise(excutor) {
  // 当前状态 Pending fulfilled reject 返回结果 thenable promise value
  this._result = this._state = void 0
  this._subscribers = []
  this.queue = []
  // console.log(this.constructor) 需要打印出 MyPromise 所以不能更改 prototype
  // 初始化
  initialize(this,excutor)
}

MyPromise.prototype.then = function(onfulFilled,onReject) {
  var parent = this
  var child = new this.constructor(noop)
  var _state = parent._state
  if(_state) {
    var callback = arguments[_state - 1]
    asap(parent)
  }else {
    subscribe(parent,child,onfulFilled,onReject)
  }
  return child
}
// 预处理函数
function initialize(promise,excutor) {
  try {
    excutor(function(value) {
      resolve(promise,value)
    },function(reason) {
      reject(promise,reason)
    })
  } catch (e) {
    reject(promise,e)
  }
}

function resolve(promise,value) {
  promise._result = value
  promise._state = FULFILLED
  asap(promise)
}

function reject(value) {
  
}
function fulfill(promise, value) {
  
}
// 为当前 Promise 设置一个 Id
var id = 0
function nextId() {
  return id++
}

// 空函数
function noop() {}

// 订阅者
function subscribe(parent,child,onfulFilled,onReject) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;
  
  _subscribers[length] = child
  _subscribers[length + FULFILLED] = onfulFilled
  _subscribers[length + REJECTED] = onReject
}
// 发布者
function publish(promise) {
  if(promise._subscribers.length === 0) return 
  promise._subscribers[length + FULFILLED].apply(null,[promise._result])
  
}
// 宏任务 微任务，尽快执行
function asap(promise) {
  setTimeout(function() {
      publish(promise)
  },0)
}
