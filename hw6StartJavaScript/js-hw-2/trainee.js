// // Функция, которая возвращает объект с минимальными и максимальными числами из массива чисел. //


// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++){
//         if ( min > arr[i]) min = arr[i];
//         if(max < arr[i]) max = arr[i];
//     }

    
//     return{
//         min,
//         max
//     }

//     // return[
//     //     min,
//     //     max
//     // ]
    
// }
// console.log(minMax([1, 4, 8, 2, -20, (23 - 23445), 432, 4, -3456, -477]));


// function min(arr) {
//     let min = arr[0];
//     // в min будет сщхранено минимальное значение массива //
//     for (let i = 0; i < arr.length; i++) {
//         // цикл работает по всей длинне массива //
//         if ( min > arr[i]) min = arr[i];
//         // если минимальное значение больше значения массива 
//         // минимальное значение перезаписывается, и так по 
//         // всей длинне массива
//     }
//     return min;
// }
// // min([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
// console.log(min([1, 4, 8, 2, -20, 432, 4, -3456, -477]));
// console.log(min([1, 4, 8, 2, -20, (23 - 23445), 432, 4, -3456, -477]));

// function max(arr) {
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if(max < arr[i]) max = arr[i];
//     }

//     return max;
// }
// // max([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
// console.log(max([1, 4, 8, 2, -20, 432, 4, 3456, -477]));

// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++){
//         if ( min > arr[i]) min = arr[i];
//         if(max < arr[i]) max = arr[i];
//     }

//     return{
//         min,
//         max
//     }
// }
// console.log(minMax([1, 4, 8, 2, -20, (23 - 23445), 432, 4, -3456, -477]));










// Функция , которая возвращает сумму всех чисел от 1до nиспользования рекурсии.
// function sumAll(n) {
//     if (n === 1 || n === 0)
// }
// sumAll(2); // 3
// sumAll(4); // 10



// function removeDuplicationLetters(str) {
//     let result = ``;
//     for (let i = 0; i < str.length; i++) {
//         if ( str[i] === ` ` || !result.toLowerCase().includes(str[i].toLowerCase()) ) {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(removeDuplicationLetters('Hello I am Iron Man'));
// removeDuplicationLetters('Hello I am Iron Man');














// // Функция, которая возвращает общую сумму диапазона //
// // A function which returns total sum of a range //

// // function sumRange(start, end) { /* your code */ }
// // sumRange(2, 4) // 9
// // sumRange(-1, 3) // 5

// function sumRange(start, end) {
//     // Выше имя нашей функциии //
//     let sum = 0;
//     // Это наша переменная и начальное значение нашего будущего результата //
//     for (let i = start; i <= end; i = i + 1) {
//         sum = sum + i;
//     }
//     // Это условие. Функция начинает работать с переменной start, //
//     // и работает пока i меньше или равно переменной end. //
//     // В sumRange записывается результат наших вычислений //
//     return sum;
//     // console.log(sum);
// }
// sumRange(2, 4); // 9 //
// sumRange(-1, 3); // 5 //






















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



























function filterNumbers(arr, maxNumber) {
    // let arr = arr.length;
    let result = arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) {
            result = arr.length;
        } else {
            
        }
    }
    return result;
}
filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]
console.log(filterNumbers([1, 4, 8, 1, 20], 5));


const arr = [1, 4, 8, 1, 20];
const updatedArr = arr.map(item => {
    return item < 5;
});

console.log(updatedArr);