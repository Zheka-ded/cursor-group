// // 1 //
// // let userName = `name`;
// // let userPhone = `123`;

// // if (userName || userPhone) {
// //     console.log(userName + ` ` + userPhone);
// // }



// // let userName;
// let userName = `name`;
// // let userPhone;
// let userPhone = `123`;

// if (!userName && !userPhone) {
//     console.log(`no name, no phone`);
// } else {
//     console.log(userName + ` ` + userPhone);
// }


// // 2 //
// let str = `hello my friend`;
// console.log(`str:`, str);
// console.log(str);

// let str2 = `!!!`;
// console.log(str2);
// console.log(`str2:`, str2);
// console.log(str + ` ` + str2);

// let str3 = `magic ${str + ` ` + str2}`;
// console.log(str3);
// console.log(`str3:`, str3);

// let str4 = `some text ${128 - 125}, ${3 * 3}`;
// // let str4 = `some text ${128 - 125} + ${3 * 3}`;
// console.log(str4);



// 3 //
// function sayHello() {
//     console.log(`Hello`);
// }
// sayHello();

// function sayHello() {
//     return function () {
//         console.log(`Im another text`);
//     }
// }
// let test = sayHello();
// console.log(`test:`, test);
// test();

// function sayHello(a, b, c) {
//     return `blababa`;
// }
// let test = sayHello();
// console.log(`test:`, test);


// // 4 power //
// // поднесение числа к степени //
// function power(n, exponent) {
//     if (exponent === 0) {
//         return 1;
//     }
//     let result = n;

//     // for (let i = 0; i < exponent -1; i = i +1){
//     //     result = result * n;
//     //     console.log(`result:`, result);
//     // }
//     for (i = 1; i < exponent; i++){
//         result *= n;
//         console.log(`result:`, result, exponent, i);
//     }

//     return result;
// }
// console.log(power(3, 4));
// console.log(power(10, 0));
// console.log(power(5, 5));



// // 5 string repeat //
// // возврат строки //
// function stringRepeat(str, n) {
//     let result = ``;
//     for (i = 0; i < n; i++) {
//         // result = result + str;
//         result += str;
//         // console.log(`i`, i, result);
//         console.log(`result:`, result);
//         // console.log(result);
//     }
//     return result;
// }

// console.log(stringRepeat(`abc`, 3));





// // 6 in range //
// function inRange(n, start, end) {
//     if (n>start && n<end) {
//         return true;
//     } else{
//         return `fuck you!`;
//     }
// }
// console.log(inRange(10, 0, 10));
// console.log(inRange(5, 0, 10));



// function outRange(n, start, end) {
//     if (n<start && n>end) {
//         return true;
//     } else{
//         return `and you fuck you`;
//     }
// }
// console.log(outRange(11, 0, 10));
// console.log(outRange(5, 0, 10));
// console.log(outRange(5, 6, 4));



// 7 remove letter //
// function removeLetter(str, letter) {
//     let result = ``;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== letter) {
//             result = result + str[i];
//         }
//     }
//     return result;
    
//     // for (let i = 0; i < str.length; i++) {
//     //     if (str[i] === letter){
//     //         console.log(`do nothing`);
//     //     } else{
//     //         result = result + str[i];
//     //     }
//     // }
//     // return result;
// }
// console.log(removeLetter(`abbbbbc abc`, `b`));

// function remuveLetterImproved(str, letter) {
//     // let result = ``;
//     while (str.indexOf(letter) !== -1 ) {
//         let i = str.indexOf(letter);
//         str = str.substring(0, i) + str.substring(i + 1)
//     }



//     // return result;
// }

// console.log(`abcdcccd`.indexOf(`d`));
// console.log(`abcdcccd`.indexOf(`d`, 4));

// console.log(remuveLetterImproved(`abc`, `c`));



// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !


// function convert(n) {                   // !==>!    // наша функция     n - сумма которую мы будем конвертировать
//     const uanCurrency = 27;             // !==>!    // константа с курсом нашей гривни
//     // const sum = n*uanCurrency;       // !==>!    // делаем конвертацию (можно и без этогй строки)!
//     // console.log(sum);                // !==>!    // выводим в консоль результат (можно и без этогй строки)!
//     console.log(n*uanCurrency);         // !==>!    // выводим в консоль (сокращенная запись)
//     // return sum;
// }
// convert(5);      


// function convert(n) {
//     const UAN_CURENCY = 27;
//     const SUM = n*UAN_CURENCY;
//     // console.log(SUM);
//     return SUM;
// }
// convert(5);


// function reverse(str) {
//     let reverseStr = ``;
//     for (i = str.length - 1; i >= 0; i = i - 1) {
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
//     // console.log(reverseStr);
// }
// reverse(`qwerty!`);


// function printStairs(n) {
//     let someSymbol = `#`;
//     let result = ``;
//     for (let i = 1; i <= n; i++){
//         result = result + someSymbol;
//         console.log(result);
//     }

//     return result;
//     // console.log(result);
// }

// printStairs(3);


// // минимальное и максимальное значение //
// // пример использования
// var array = [2, 5, 6, -7, -12, 15, 0, 3, -8, 9];
// var max = getMaxValue(array);
// var min = getMinValue(array);
// console.log(max);
// console.log(min);
 
// // получение максимального элемента массива
// function getMaxValue(array){
//     var max = array[0]; // берем первый элемент массива
//     for (var i = 0; i < array.length; i++) { // переберем весь массив
//         // если элемент больше, чем в переменной, то присваиваем его значение переменной
//         if (max < array[i]) max = array[i]; 
//     }
//     // возвращаем максимальное значение
//     return max;
// }
 
// // получение минимального элемента массива
// function getMinValue(array){
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// }

