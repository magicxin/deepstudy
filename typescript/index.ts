// 断言
let val = 'aaavvvv'
let num: number = (<string>val).length
let num1: number = (val as string).length

function printLabel(labelObject: {label: string}) {
    console.log(labelObject.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface labeledValue {
    label: string;
};
function printLabel1(labelObject: labeledValue) {
    console.log(labelObject.label);
}
printLabel1(myObj);

// option bags
interface SquareConfig {
    color?: string;
    width?: number;
};
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area =  config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});

// 赋值对象字面量实现接口
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20};
// 创建的数组不允许被修改
let readonlyArray: ReadonlyArray<number> = [1,2,3];
let arr_a: number[] = [1,2,3,4];
arr_a = <number[]>readonlyArray;
arr_a = readonlyArray as number[];
