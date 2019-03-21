// // A function which prints the pyramid picture of size n //
// Функция, которая печатает изображение размера пирамиды n //
// // function printPyramid(n) { /* your code */ } //
// // printStairs(3) //
// //   #  //
// //  ###  //
// // #####  //

// https://www.youtube.com/watch?v=ItOmYp9AKOA 
// видео кода пирамиды
// подсматривал... //
// сам бы тоже решил эту задачу, но вопрос времени //



function printPyramid(n) {
    let result = ``;
    let someSymbol = `#`;
    let shadowSymbol = ` `;

    for (let i = 1; i <= n; i++) {
        let result = ``;
        for (let x = 1; x <= (n-i); x++ ){
            result = result + shadowSymbol;
        }
        for (let y = 1; y <= (i*2-1); y++) {
            result = result + someSymbol;
        }
        console.log(result);
    }
    return result;
}
printPyramid(3);
