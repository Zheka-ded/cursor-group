// // console.log(`hi`);

// // // let user = new Object();
// let user = {
//     name: `iOld`,
//     age: 33,
//     gender: `man`,
//     lives: `Kyiv`,
//     wasBornIn: `Konotop`,
//     'likes dogs': true,
// };
// console.log(user);
// console.log(user.gender);
// // let key = `loves wife`;
// // user[key] = true;

// // // user."likes cats" = true; // запись не правильная
// // user[`likes cats`] = true;
// // user.isAdmin = true;
// // // delete user.lives;
// // // delete user.gender;
// // // delete user[`likes cats`];

// // console.log(user);
// // console.log(user[`likes dogs`]);
// // console.log(user[`likes cats`]);
// // // console.log(user.name, user.gender);
// // // console.log(user.name); // выводит после значение после . 

// let iOld = {
//     age: 33,
//     name: `Zheka`,
//     gender: `man`,
//     hi() {
//         console.log(`hello ` + this.name)
//     }
// }
// let n = `name`;
// iOld.age
// iOld.hi();
// iOld[`hi`]();
// console.log(iOld.hi);
// console.log(iOld);


// function hi() {
//     console.log(`hi-hello ` + user.name);
// }
// hi();

// let person = {
//     name: `Bobbi`,
//     age: 105,
//     gender: `undefine`,

//     greet: function () {
//         return `hello, i m ` + this.name
//     }
// }
// console.log(person.greet());

// // let arr = [
// //     [ `key`, `value`],
// //     [ `x`, 100 ],
// //     [ `y`, 200 ],
// //     [ `usd`, 1 ],
// //     [ `uan`, ]
// // ]

// // let a = `hi`;
// // let b = `man`;
// // let c = ` `;
// // console.log(a+c+b);

// // let d = `5`;
// // let e = `3`;
// // console.log( +d + +e);

// // function power(n, exponent) {
// //     if (exponent === 0) {
// //       return 1;
// //     }
  
// //     let result = n;
  
// //     for (let index = exponent; index > 1; index -= 1) {
// //       result *= n;
// //     }
  
// //     return result;
// //   }
  
  
// //   console.log( Math.pow(28, 2) );
// //   console.log( 2**3 );

// function showMessage() {
//     console.log(`vsem privet`);
// }

// showMessage();

// function showMessageTwo() {
//     let message = `tyt byv Vasya`;
//     console.log(message);
// }

// showMessageTwo();



// function counti() {
//     // переменные i,j не будут уничтожены по окончании цикла
//     for (var i = 0; i < 3; i++) {
//       var j = i * 2;
//     }
  
//     console.log( i ); // i=3, последнее значение i, при нём цикл перестал работать
//     console.log( j ); // j=4, последнее значение j, которое вычислил цикл
// }

//   counti();

// function count() {
//     var i, j; // передвинули объявления var в начало
//     for (i = 0; i < 3; i++) {
//       j = i * 2;
//     }
  
//     // alert(i); // i=3
//     // alert( j ); // j=4
// }

// count();

// function convert() {
//     let uan = 28;
//     console.log(+uan * 2);
// }

// convert();

