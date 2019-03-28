// Лекция с Дмитрием //

// let counter = (function () {
//     let count = 0;
//     return function () {

//         return count++
//     }
// }());

// let counter = function (num) {
//     counter.count = num !== undefined ? num : counter.count
//     return counter.count++
// }
// counter.count = 0;
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// IIFE
// Так было в ES-5
// let carColor = `Grey`;

// const car = (function () {
//     return{
//         changeToRed: function () {
//             carColor = `Red`;
//             return carColor;
//         },
//         changeToBlack: function () {
//             carColor = `Black`;
//             return carColor;
//         }
//     }
// })();

// console.log(carColor);
// console.log(car.changeToBlack());

// Так стало в ES-6 

// let carColor = `Grey`;

// const car = (() => {
//     return{
//         changeToRed: () => {
//             carColor = `Red`;
//             return carColor;
//         },
//         changeToBlack: () => {
//             carColor = `Black`;
//             return carColor;
//         }
//     }
// })();

// console.log(carColor);
// console.log(car.changeToBlack());


// let result = (function (a, b) {
//     return a + b;
// })(2, 3);

// console.log(result);




// function first () {
//     setTimeout (function () {
//         console.log(`1`);
//     }, 2000)
    
// } 

// function second() {
//     console.log(`2`);
// }

// first();
// second();







// function first (callback) {
//     console.log(`1`);
//     // setTimeout (function () {
//     //     console.log(`1`);
//     // }, 2000)
// }

// function second(a, b) {
//     console.log(a + b);
// }

// first(second(11, 11));




function first (callback) {
    console.log(`1`);
    callback();

}

first(function() {
    console.log(2*4);
});








// function first () {
//     let nTime = 10000;
//     // console.log(`1`);
//     setTimeout(function () {
//         console.log(`1`);
//     }, nTime)
// }

// function second () {
//     console.log(`2`);
// }

// first();
// second();


// function printTimeout(str, n) {
//     let time = 1000 * n;
//     setTimeout(function () {
//         return str;
//     }, time)
// }
// printTimeout('hello', 2);
// console.log(printTimeout('hello', 2));


// function convert(n) {
//     const UAN_CURENCY = 27;
//     const SUM = n*UAN_CURENCY;
//     // console.log(SUM);
//     return SUM;
// }
// convert(5);
// console.log(convert(5));





























    // !##@##@!##!@##@##@##! //

// // лекция с Иваном //

// const myObgect = {
//     key: `valye`,
//     name: `Zheka`,
//     lastName: `Shevchenko`,
//     age: 300,
//     lokation: `Kyiv`,
//     children: null,
//     friends: [`Ivan`, `Kardan`, `Pricepa`, `Cun`],
//     car: {
//         name: `fantastick`,
//         year: 2021,
//         model: `'S'`
//     },
//     logText: function () {
//         console.log(`text`);
//     }
// }

// const car = {
//     name: `bmw`,
//     model: `m-5`,
//     year: 2005
// }

// // console.log(myObgect);
// // console.log(myObgect.name, myObgect.car.model);
// // console.log(car);
// // console.log(car[`name`]);
// console.log(Object.values(myObgect));
// console.log(Object.keys(myObgect));



// const myArr = [`Don`, `Digidon`, `Nosik`, `pupsik`, `zhaba`, `Shapokkyack`];
// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr.length);
// console.log(myArr[myArr.length - 1]);








// const someObject = {
//     aaa: `bbb`
// };
// console.log(someObject);
// someObject.name = `name`;
// console.log(someObject);
// someObject.name = `bbb`;
// console.log(someObject);

// массивы и объекты //

// const users = [
//     { name: 'John', birthday: '1999-6-12' },
//     { name: 'Bill', birthday: '2005-5-19' },
//     { name: 'Carol', birthday: '2003-10-11' },
//     { name: 'Luce', birthday: '2000-11-22' }
//   ];
// console.log(users[users.length-1]);
// users.push({
//     name: `Bla-bla-bal`
// });
// console.log(users);





// const myArr2 = [300, 4, 8, 2, -20, ( -23 + -23445), 9432, 4, -3456, -9477, 0.000009];

// // for (let i = 0; i < myArr2.length; i++) {
// //     console.log(i);
// // }

// myArr2.push(100500);
// // .push() - добавляет значение в конце массива //
// console.log(myArr2);

// for (let i = 0; i < myArr2.length; i++) {
//     console.log(i);
// }

// myArr2.pop();
// // .pop() - забирает последнее значение массива //
// const deletedValuePop = myArr2.pop();
// console.log(deletedValuePop);
// console.log(myArr2);
// console.log(myArr2.length);
// console.log(myArr2.pop());


// .shift() - забирает первое значение массива //

// const deletedValueShift = myArr2.pop();
// console.log(myArr2.shift());
// console.log(myArr2.length);

// console.log(myArr2.unshift(`boom!`));
// .unshift() - добавляет значение в начало массива //
// myArr2.unshift(`hi!`);

// console.log(myArr2);

// // myArr2.splice(3, 3);
// .splice(3, 2) - удаляет определенное значение в массиве и определенное
// количество значений после первого удаленного, .splice(3, 2, `brrr`, `200???`) 
// и может заменить удаленные значения 

// myArr2.splice(3, 2);
// console.log(myArr2);
// myArr2.splice(3, 4, `brrr`, `200???`);
// console.log(myArr2);



// const joined = myArr2.join();
// .join() приводит к объеденению в строку если я правильно понял //
// console.log(typeof joined, joined);
// console.log(joined);



// const sortedMyArr2 = myArr2.sort();
// .sort() - сортирует элеменнты массива //
// console.log(sortedMyArr2);
// const sortedMyArr2 = myArr2.sort((a, b) => a - b );
// console.log(sortedMyArr2);
// const sortedMyArr2 = myArr2.sort((a, b) => b-a );


// const sortedMyArr2 = myArr2.sort((a, b) => {
//     // debugger
//     return b-a;
// } );
// console.log(sortedMyArr2);


















// const users = [
//     { name: 'John', birthday: '1999-6-12' },
//     { name: 'Bill', birthday: '2005-5-19' },
//     { name: 'Carol', birthday: '2003-10-11' },
//     { name: 'Luce', birthday: '2000-11-22' }
//   ];
// console.log(users[users.length-1]);
// users.push({
//     name: `Bla-bla-bal`
// });
// console.log(users);





// const myArr = [`Don`, `Digidon`, `Nosik`, `pupsik`, `zhaba`, `Shapokkyack`];
// // const sortMyArr = myArr.sort();
// // const sortMyArr = myArr.reverse();
// console.log(myArr);

// const myArr2 = [300, 4, 8, 2, -20, ( -23 + -23445), 9432, 4, -3456, -9477, 0.000009];

// // for (let i = 0; i < myArr2.length; i++) {
// //     // console.log(myArr2);
// //     console.log(myArr2[i]);
// // }
// // console.log(myArr2);

// // const callback = item => console.log(item);
// // myArr2.forEach(callback);
// // myArr2.map();
// // .map() - изменяет массив //

// // const updatedArr = myArr2.map(item => item + 10000);
// const updatedArr = myArr2.map(item => {
//     return item + 10000;
// });
// console.log(updatedArr);



























// function filterNumbers(arr, maxNumber) {
//     // let arr = arr.length;
//     let result = arr;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < maxNumber) {
//             result = arr.length;
//         } else {
            
//         }
//     }
//     return result;
// }
// filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]
// console.log(filterNumbers([1, 4, 8, 1, 20], 5));


// const arr = [1, 4, 8, 1, 20];
// const updatedArr = arr.map(item => {
//     return item < 5;
// });

// console.log(updatedArr);