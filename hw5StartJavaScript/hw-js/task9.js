// A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet. //
// Функция, которая возвращает строку со всеми буквами в верхнем регистре (без встроенного метода строки). Функция поддерживает только английский алфавит.//

function uppStr(str) {
    for (let i = 0; i <= str.length; i++) {
        return str.toUpperCase();
    }
}
console.log(uppStr(`asdrfhvj`));



// function uppStr(str) {
//     let result = ``;
//     for ( let i = 0; i <= str.length; i++ ) {
//         result = result + str[i].toUpperCase() + str[i + 1].toUpperCase();
//         // result = result + str[i];
//         return result;
//     }
//     // return result;
//     // console.log(uppStr(`abc`));
// }
// console.log(uppStr(`as`));
// // // uppStr(`abc`);
