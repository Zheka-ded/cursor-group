// Напишите функцию, которая возвращает наименьшее из трех чисел. //
// Write a function which returns the smallest of three numbers. //

// function min(a, b, c) { /* your code */ }
// min(10, 5, 11) // 5
// min(3, 8, 4) // 3

// function mini(a, b, c, d, e) {
//     console.log(Math.max(a, b, c, d, e));
//     console.log(Math.min(a, b, c, d, e));
// }
// mini(10, 5, 101, 1, -40);

// Так чесно будет? //


// function minVal(a, b, c, d, e) {
//     let minVal = (a, b, c, d, e);
//     let min = minVal[0];
//     for (let i = 0; i < minVal.length; i = i + 1) {
//         if (min > minVal[i]) min = minVal[i];
//     }
//     console.log(minVal);
// }
// minVal(10, 5, -101, 1, -40);





// function maxVal(a, b, c, d, e) {
//     let maxVal = (a, b, c, d, e);
//     let max = maxVal[0];
//     for (let i = 0; i < maxVal.length; i = i + 1) {
//         if (max < maxVal[i]) max = maxVal[i];
//     }
//     console.log(maxVal);
// }
// maxVal(10, 5, -101, 1, -40);



// function minVal(a, b, c, d, e) {
    
//     // let minVal = ;
//     let minVal = (a, b, c, d, e);
//     let min = minVal[0];
//     for (i = 0; i < minVal.length; i++) {
//         if (min > minVal[i]) min = minVal[i];
//     }
//     console.log(minVal);
// }
// minVal(10, -5, 101, 1, 40);




// const numbers = [2, 15, -1001, 200, 55, -50];
// const min = getMinValue(numbers);
// // const max = maxSIze(numbers);
// console.log(min);
// // console.log(max);

// function getMinValue(numbers) {
//     const min = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (min > numbers[i]) min = numbers[i];
//     }
//     return min;
// }




// пример использования
var array = [2, 5, 6, -7, -12, 15, 0, 3, -8, 9];
var max = getMaxValue(array);
var min = getMinValue(array);
console.log(max);
console.log(min);
 
// получение максимального элемента массива
function getMaxValue(array){
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i]; 
    }
    // возвращаем максимальное значение
    return max;
}
 
// получение минимального элемента массива
function getMinValue(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}






// let minVal = (a, b, c, d, e);
// minVal(10, 5, 101, 1, -40);

// function minVal(a, b, c, d, e) {
//     let minVal = (a, b, c, d, e);
//     let min = minVal[0];
//     // let min = Array[0];
//     for (let i = 0; i < minVal.length; i = i + 1) {
//         if (min > minVal[i]) min = minVal[i];
//     }
//     // return min;
//     // console.log(minVal(10, 5, 101, 1, -40));
//     // console.log(min);
//     console.log(minVal);
// }
// // console.log(minVal(10, 5, 101, 1, -40));
// // console.log(min);
// minVal(10, 5, 101, 1, -40);
// // console.log(min);