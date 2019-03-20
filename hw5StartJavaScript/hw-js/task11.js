// A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21… //
// Функция, которая при задании числа nвозвращает n-е число в последовательности Фибоначчи . Последовательность начинается с 1 и выглядит так: 1, 1, 2, 3, 5, 8, 13, 21… //

// function fibonacci(n) { /* your code */ }
// fibonacci(3) // 2
// fibonacci(5) // 5
// fibonacci(7) // 13

function fibonacci(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result = n-1;
        console.log(result, n, i);
    }

    // return result;
    // console.log(result);
}
fibonacci(3) // 2
// fibonacci(5) // 5
// fibonacci(7) // 13