//可変長引数
function funcArray (...array){
    console.log(array);
    console.log(...array);
    console.log(array[0]);
}

funcArray(1,2,3,4,5);

console.log('========');

function funcArray2(a,b, ...array2){
    console.log(a);
    console.log(b);
    console.log(array2);
}
funcArray2(2,3,4,5,6);

console.log('========');

var array3 = [1,2,3];
var array4 = [...array3,4,5,6,...array3];
console.log(array4);
