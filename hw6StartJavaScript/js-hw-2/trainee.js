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




// function first (callback) {
//     console.log(`1`);
//     callback();

// }

// first(function() {
//     console.log(2*4);
// });




// function press(callback) {
//     console.log(`Press button`);
//     callback();
// }

// function statusCheker() {
//     console.log(`Pressed`);
// }

// // press(statusCheker());
// press(statusCheker);




// setTimeout(function() {
//     console.log(`1`);
// }, 1000);

// setTimeout(function() {
//     console.log(`2`);
// });

// setTimeout(console.log(`3`));
// setTimeout(console.log(`4`), 5000);








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
// console.log(users.name, users.birthday);





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

























// практика с Богданом //

// Date Даты

// let now = new Date();
// console.log(now);

// let now = new Date(`2002-10-08`);
// console.log(now);

// let now = new Date(2019, 10, 22, 23, 55, 27);
// console.log(now);

// let nowParse = Date.parse(new Date);
// console.log(nowParse);

// let now = new Date();
// console.log(now.getTimezoneOffset());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getMonth() + 1);

// let now = new Date();
// console.log( +now );

// let now2 = new Date(1554313167204);
// console.log(`now2: `, now2);


// let now = new Date();
// console.log(now.getMilliseconds());
// // console.log(now.toLocaleString());
// console.log(now.toString());
// console.log(now.toLocaleString(`uk`, {
//     year: `numeric`,
//     month: `long`,
//     day: `numeric`
// }));


// // пример 12-го задания с практики //

// function adult(birthday) {
//     birthday = new Date(birthday);
//     // console.log(`birthday: `, birthday);
//     let minDate = new Date();
//     // console.log(`minDate: `, minDate);
//     minDate.setFullYear(minDate.getFullYear() - 18);
//     return birthday < minDate;
// }

// console.log( adult(`1990-01-01`) );
// console.log( adult(`2002-01-01`) );


// moment.locale(`uk`);

// let now = moment();
// // let now = moment().subtract(21, `month`).add(10, `years`);
// // let now = moment({year: 2005, mounth: 10});
// // let now = moment([2002, 10, 10]);
// now.isValid();
// console.log(`now.isValid: `, now.isValid());

// console.log(`now: `, now.format(`DD-MMMM-YYYY dddd`));
// console.log(`now: `, now);
// console.log(`now.format: `, now.format());
// console.log(`now.format: `, now.format(`DD-MMMM-YYYY dddd`));

// let goBack = moment().subtract(21, `month`).add(10, `years`).toNow();
// console.log(`goBack: `, goBack);

// let futureIsNow = moment().subtract(21, `month`).add(10, `years`).fromNow();
// console.log(`futureIsNow: `, futureIsNow);


// function adultMoment(birthday) {
//     return moment(birthday).isBefore(moment().subtract(18, `years`));
// }


// console.log( adultMoment(`1990-01-01`) );
// console.log( adultMoment(`2001-04-01`) );








// // Recursion Рекурсия
// function pow(x, n) {
//     let result;

//     if(n > 1) {
//         result = x * pow(x, n - 1);
//     } else {
//         result = x;
//     }

//     // if (n < 1) {
//     //     result = x;
//     // } else {
//     //     result = x * pow(x, ((n - 1)-1));
//     // }

//     console.log(`result: `, result);

//     return result;
// }

// console.log( pow(6, 3) );





// Lodash //


const usersOne = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' },
    { name: 'Lily', birthday: '2001-01-22' }
  ];

  const users = [{
    "id": 1,
    "name": "Krisha",
    "email": "kmahoney0@springer.com",
    "gender": "Male",
    "birthday": "1990-08-15"
  }, {
    "id": 2,
    "name": "Rayner",
    "email": "rmarquot1@gov.uk",
    "gender": "Male",
    "birthday": "2002-03-15"
  }, {
    "id": 3,
    "name": "Jojo",
    "email": "jredmille2@aboutads.info",
    "gender": "Female",
    "birthday": "2005-10-22"
  }, {
    "id": 4,
    "name": "Valentino",
    "email": "vrattenberie3@hp.com",
    "gender": "Male",
    "birthday": "1993-09-29"
  }, {
    "id": 5,
    "name": "Allene",
    "email": "amccrostie4@mapquest.com",
    "gender": "Female",
    "birthday": "2000-06-17"
  }];
  

// _.forEach(usersOne, function(user) {
//     console.log(user.name,`,`, user.birthday);
// });

// _.forEach(users[1], function(prop){
//   console.log(prop);
// });

// _.forEach(users[1], function(key, prop){
//   console.log(key, prop);
// });

// _.forEach(users[users.length-1], function(key, prop){
//   console.log(key, prop);
// });

// _.forEach(users, function(user) {
//     // console.log(user.name,`,`, user.birthday);
//     console.log(user.gender, user.email);
// });

_.forEach(usersOne, function (user){
  console.log(user.name);
})

_.forEach(users, function (user){
  console.log(user.name);
})
















