// A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21… //
// Функция, которая при задании числа nвозвращает n-е число в последовательности Фибоначчи . Последовательность начинается с 1 и выглядит так: 1, 1, 2, 3, 5, 8, 13, 21… //

// Ниже ссылка на решение этой задачи //
// https://learn.javascript.ru/task/fibonacci-numbers //

function fibonacci(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        
    }
    return b;
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(90));
