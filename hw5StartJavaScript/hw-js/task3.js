// // A function which prints the stair picture of size n //


function printStairs(n) {                   // !==>!    // наша функция     n - число повторений записи
    let symbolPrint = `#`;                 // !==>!    // строка которую мы будем выводить в консоли
    for (i = 1; i <= n; i++)                // !==>!    // смотрит какая строка записана и плюсует ее (добавляет точно такую)
    console.log(symbolPrint.repeat(i));     // !==>!    // выводит в консоль результат операции и повторяет ее
}
printStairs(5);                             // !==>!    // количество повторений и сложений строк


//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// // Позже еще детальнее разобраться во всех способах //
// // .repeat()


// Сапорты напишите если я что-то не правильно записал


// Ниже пробные варианты. //


// function printStairs(n) {
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 1; j < n-i; j++) {

//         }
//         for (let k = 1; k <= (1*i+1); k++) {
//             str = str + '#';
//         }
//         console.log(str);
//     }
// }
// printStairs(7);



// function printStairs(n) {                   // !==>!    // наша функция     n - число повторений записи
//     let printStairs = `#`;                 // !==>!    // строка которую мы будем выводить в консоли
//     for (i = 1; i <= n; i++)                // !==>!    // смотрит какая строка записана и плюсует ее (добавляет точно такую)
//     console.log(printStairs.repeat(i));     // !==>!    // выводит в консоль результат операции и повторяет ее
// }
// printStairs(5); 

// function printStairs(n) {
//     let printStairs = `#`;
//     for (i = 1; i <= n; i++){
//         printStairs = printStairs + i;
//     }
//     console.log(printStairs);
// }
// printStairs(2);