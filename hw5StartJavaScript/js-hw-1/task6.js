// Функция, которая печатает изображение размера пирамиды n //

// https://www.youtube.com/watch?v=ItOmYp9AKOA 
// видео кода пирамиды
// подсматривал... //
// сам бы тоже решил эту задачу, но вопрос времени //



function printPyramid(n) {
    let result = ``;
    const someSymbol = `#`;
    const shadowSymbol = ` `;

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


const printPyramidMini = n => {
    for(let i=0; i < n; i++)
      console.log(" ".repeat(n-i) + "#".repeat(2 * i + 1));
  }
  
  printPyramidMini(3);