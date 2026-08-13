let arr = [1,2,3,4,5,6,7,8,9,10];

arr.map((data)=>console.log(data));
const multipleOfTwo = arr.map((data)=>data*2);
console.log(multipleOfTwo);

const divisibleByThree = arr.filter((num)=> num%3==0);
console.log(divisibleByThree);

const firstDivisibleByThree = arr.find((num)=> num%3==0);
console.log(firstDivisibleByThree);

const sumOfArr = arr.reduce((data,acc)=> acc += data,0);
console.log(sumOfArr);

