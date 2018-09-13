export default function() {
  var person = {
        a:1
  }
  Object.defineProperty(person,'a',{
    get(){
        return 3 //当访问这个属性的时候返回3
    },
    set(val){
        console.log(val)//当设置这个属性的时候执行,val是设置的值
    }
  })
  person.a// 3,我们明明写的是a:1,怎么返回的3呢?这就是get()的威力了
  person.a = 5
}
