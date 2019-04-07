// Функция , которая возвращает сумму всех чисел от 1 до n использования рекурсии. //

function sumAllRecursion(nRecursion) {
    let resultRecursion = nRecursion + sumAll(nRecursion - 1);
    if (nRecursion != 1) {
        // return nRecursion + sumAll(nRecursion - 1);
        return resultRecursion;
    } else {
        return nRecursion;
    }
}

console.log(sumAllRecursion(2));
console.log(sumAllRecursion(4));



function sumAll(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}
console.log(sumAll(2));
console.log(sumAll(4));