// Напишите функцию, которая возвращает наименьшее из трех чисел. //

function min(a, b, c, d, e){
    let min = Math.min(a, b, c, d, e);
    return min;
}
console.log(min(5, -200, -98769, -7676, 700));



function max(a, b, c, d, e){
    let max = Math.max(a, b, c, d, e);
    return max;
}
console.log(max(5, -200, -98769, -7676, 700));


// ниже функции будут работать с любым кодличеством аргументов //

function mini(...args){
    let min = Math.min(...args);
    return min;
}

function maxi(...args){
    let max = Math.max(...args);
    return max;
}