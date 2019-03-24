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
