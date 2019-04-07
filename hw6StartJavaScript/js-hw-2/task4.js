// // Функция, которая возвращает факториал числа, используя рекурсию. //

// // // Ниже рабочая функция, копия задания по сумме диапазона с первого дз по js //

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
        // console.log(`result:`, result);
        // console.log(`i:`, i);
    }
    
    return result;
}
 factorial(3); // 6
factorial(5); // 120
console.log(factorial(3));
console.log(factorial(5));



function factorialRecursion(nRecursion) {
    if (nRecursion != 1) {
        return nRecursion * factorialRecursion(nRecursion - 1);
    } else {
        return nRecursion;
    }
}

console.log(factorialRecursion(5));