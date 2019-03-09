// // A function which prints the stair picture of size n //


function printStairs(n) {                   // !==>!    // наша функция     n - число повторений записи
    let symbolPrint = `$!`;                 // !==>!    // строка которую мы будем выводить в консоли
    for (i = 1; i <= n; i++)                // !==>!    // смотрит какая строка записана и плюсует ее (добавляет точно такую)
    console.log(symbolPrint.repeat(i));     // !==>!    // выводит в консоль результат операции и повторяет ее
}
printStairs(5);                             // !==>!    // количество повторений и сложений строк


//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// // Позже еще детальнее разобраться во всех способах //
// // .repeat()


// Сапорты напишите если я что-то не правильно записал