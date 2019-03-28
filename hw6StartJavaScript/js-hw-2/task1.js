// Функция, которая печатает strчерез nнесколько секунд.

function print (str, n) {
    n *= 1000;
    setTimeout (function () {
        console.log(str);
    }, n)
}
print(`woo`, 2);


// function print (str, n) {
//     let nSecond = n * 1000;
//     setTimeout (function () {
//         console.log(str);
//     }, nSecond)
// }
// print(`woo`, 2);

