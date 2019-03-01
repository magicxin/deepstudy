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
function MyPromise(excutor) {
  this.state = PENDGIN
  this.value = null
  excutor(this.resolve,this.reject)
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