let val = 'aaavvvv';
let num = val.length;
let num1 = val.length;
function printLabel(labelObject) {
    console.log(labelObject.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
;
function printLabel1(labelObject) {
    console.log(labelObject.label);
}
printLabel1(myObj);
;
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
let p1 = { x: 10, y: 20 };
let readonlyArray = [1, 2, 3];
let arr_a = [1, 2, 3, 4];
arr_a = readonlyArray;
arr_a = readonlyArray;
