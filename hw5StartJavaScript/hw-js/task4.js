// Функция, которая возвращает общую сумму диапазона //
// A function which returns total sum of a range //

// function sumRange(start, end) { /* your code */ }
// sumRange(2, 4) // 9
// sumRange(-1, 3) // 5

function sumRange(start, end) {
    // Выше имя нашей функциии //
    let sum = 0;
    // Это наша переменная и начальное значение нашего будущего результата //
    for (let i = start; i <= end; i = i + 1) {
        sum = sum + i;
    }
    // Это условие. Функция начинает работать с переменной start, //
    // и работает пока i меньше или равно переменной end. //
    // В sumRange записывается результат наших вычислений //
    return sum;
    // console.log(sum);
}
sumRange(2, 4); // 9 //
sumRange(-1, 3); // 5 //



 