//var PENDGIN = '0'
//var FULFILLED = '1'
//var REJECTED = '2'
//function MyPromise(fn) {
//this.state = PENDGIN
//setTimeout(()=>{
//  fn(this.resolve,this.reject)
//},0)
//}
//MyPromise.prototype = {
//then(onFulfilled,onRejected) {
//  var result = ''
//if(typeof(onFulfilled) === 'function') {
//  result = new MyPromise(onFulfilled,onRejected)
//}
//if(typeof(onRejected) === 'function') {
//  result = new MyPromise(onFulfilled,onRejected)
//}
//return result
//},
//resolve() {
//  
//},
//reject() {
//  
//}
//}
///*
// @desc 当状态为 FULFILLED 后调用，只能调用一次
// @params [undefined, thenable, promise] value  @desc promise 的值
// * */
//function onFulfilled(value) {
//
//}
///*
// @desc 当状态为 REJECTED 后调用，只能调用一次
// @params [] reason @desc promise 的拒因
// * */
//function onRejected(value) {
//
//}
var PENDGIN = '0'
var FULFILLED = '1'
var REJECTED = '2'
var queue = []
// 定义一个构造函数
function MyPromise(excutor) {
  // 初始化状态为等待态
  this.state = PENDGIN
  // 初始化等待处理的值，这个值可以是 thenable Promise 或一个实际值
  this.value = null
  setTimeout(()=>{
    excutor(this.resolve,this.reject)
  },0)
}
MyPromise.prototype = {
  then(onFulfilled,onRejected) {
    if(this.state === PENDGIN) {
      queue.push([onFulfilled,onRejected])
    }if(this.state === FULFILLED && typeof(onFulfilled)==='function') {
      onFulfilled()
    }if(this.state === REJECTED && typeof(onRejected)==='function') {
      onRejected()
    }
  },
  resolve(value) {
    this.state = FULFILLED
    this.value = value
    queue[0][0](value)
    queue.shift()
  },
  reject() {
    
  },
}
/*
   @desc 当状态为 FULFILLED 后调用，只能调用一次
   @params [undefined, thenable, promise] value  @desc promise 的值
   * */
function onFulfilled(value) {

}
/*
   @desc 当状态为 REJECTED 后调用，只能调用一次
   @params [] reason @desc promise 的拒因
   * */
function onRejected(value) {

}