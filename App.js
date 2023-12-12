// "use client";
// // simple array methods
// const numbers = [10, 20, 30, 40, 50,];
// // //  push()
// // numbers.push(70);
// // // pop()
// // numbers.pop();

// // // shift()
// // numbers.shift();

// // // unshift
// // numbers.unshift(5);

// // // at()
// // console.log(numbers.at(-3));

// // // indexOf()
// // console.log(numbers.indexOf(50));

// // // includes()
// // console.log(numbers.includes(60));

// // console.log(numbers);

// // // slice()
// // const arr = [2, 3, 4, 6, 8, 9, 12, 32, 67]

// // // const sliceArr = arr.slice(0, 4)

// // // const sliceArr = arr.slice(0, 7)

// // // console.log(sliceArr);
// // // console.log(arr);

// // // splice()
// // const spliceArr1 = arr.splice(0, 4);
// // const spliceArr2 = arr.splice(0, 2);
// // const spliceArr3 = arr.splice(0, 3);

// // console.log(spliceArr1, spliceArr2, spliceArr3);

// // console.log(arr);

// // forEach
// const nums = [1, 2, 3, 4, 5, 7, 8, 9, 6];

// // let sum = 0;
// // for (const num of nums) {
// //   sum += num;
// // }

// // // console.log(sum);
// // let sum = 0

// // nums.forEach((el, index, arr)=>{

// //     console.log(arr)
// //   })

// //   nums.forEach((el, index, arr)=>{
// //   sum += el;
// // })

// // console.log(sum);

// const temps = [18, 21, 24, 25, 27, 32];

// let product = 1;

// temps.forEach((temp) => (product *= temp));

// // console.log(product);

// // // map
// // const areas = [4, 8, 23, 56, 78, 12];

// // const result = areas.map((area, index, arr) => {
// //   return area*area;
// // });

// // console.log(result);

// const areas = [4, 8, 12, 16, 24, 32];

// const result = areas.map((area) => area*area);

// // console.log(result);

// //filter
// const myArr = [10, 12, 13, 15, 20, 34, 7 ,9];

// const odds = myArr.filter((el, index, Arr) => el % 2 !==0);
// const even = myArr.filter((el, index, Arr) => el % 2 ===0);

// // console.log(odds);
// // // console.log(even);

// // find

// const fruits = ["apple", "banana", "mango"];

// const fruit = fruits.find((fruit, index, arr) => fruit.startsWith("b"));
// // console.log(fruit);

// const fruitIndex = fruits.findIndex((fruit, idx, arr) => fruit.startsWith("o"));

// // console.log(fruitIndex)

// some
const friends = ["rini", "mini", "tinni", "nadi"];
const output = friends.some((friend, index, arr) => friend.endsWith("o"));
const output2 = friends.every((friend) => friend.endsWith("i"));

// console.log(output);
// console.log(output2);

// chaining method

const newArr = [2, 4, 5, 8, 9, 11, 15];
let sum2 = 0;

newArr
  .map((num) => num * 2)
  .filter((num) => num > 10)
  .forEach((num) => (sum2 += num));

// console.log(newNums);
// console.log(sum2);

// reduce
const myNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const sum3 = myNumbers.reduce((sum, num) => (sum += num));

// console.log(sum3);

const product2 = myNumbers.reduce((product, num) => (product *= num));

// console.log(product2);

// reduce right

const product3 = myNumbers.reduceRight((product, num) => (product *= num));

// console.log(product3)

// sort()
const foods = ["noodles", "burger", "lasanga", "chocolate", "ramen", "pasta"];

// foods.sort((a, b) => a.localeCompare(b)); //asc
foods.sort((a, b) => b.localeCompare(a)); //dsc

// console.log(foods);

const shoppingCart = [
  { id: 1, title: "Shirt", price: 1000, rating: 4.7 },
  { id: 2, title: "T-Shirt", price: 700, rating: 4.3 },
  { id: 3, title: "Jeans", price: 1500, rating: 3.9 },
  { id: 4, title: "skirt", price: 600, rating: 5 },
  { id: 5, title: "Tops", price: 500, rating: 4.9 },
  { id: 6, title: "Shoe", price: 1800, rating: 4.2 },
];
// const sortedCart = shoppingCart.sort((a, b) =>a.price-b.price)
const sortedCart = shoppingCart.sort((a, b) => a.title.localeCompare(b.title));
// const sortedCart = shoppingCart.sort((a, b) => b.title.localeCompare (a.title))

// console.log(sortedCart);

// flat
const nestedArr = [1, 2, [3, 4], [5, 6, [7, 8]]];
const flattendArr = nestedArr.flat(2).flatMap((el, index, arr) >= el + 4);

console.log(flattendArr);
