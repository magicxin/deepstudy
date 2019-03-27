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
var FULFILLED = void 1
var REJECTED = void 2

function MyPromise(excutor) {
  this._state = this._result = void 0
  excutor(function(value) {
    resolve(this,value)
  },function(reson) {})
}

MyPromise.prototype.then = function(onfulfilled,onrejected) {
  console.log(this)
  onfulfilled(this._result)
}

function resolve(promise,value) {
  setTimeout(()=>{
    promise._result = value
  },0)
}
function initialize(promise,excutor) {
  excutor(function(value) {},function(reson) {})
}
