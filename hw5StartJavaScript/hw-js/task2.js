// // A function which returns reversed string. //


function reverse(str) {
    let reverseStr = ``;
    for ( let i = str.length - 1; i >= 0; i = i - 1) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
    // console.log(reverseStr);
}
reverse(`qwerty!`);

// str.length - 1 -- означает что мы начинаем работать со строкой //
// с обратной стороны с конца строки. //
// str[0] -- означает что мы начинаем работать с первого символа строки //
// str.length -- длинна всей строки. //


// function reverse(n) {                   // !==>!    // наша функция     n - строка которую мы будем выводить в обратном порядке
//     let reverseStr = '';                // !==>!    // переменная для создания строки реверса
//     for (i =-- n.length; i >= 0; i--){  // !==>!    // (i = n.length - 1; i >= 0; i--) переберает строку 
//         reverseStr += n[i];             // !==>!    // записывает новую строку
//     }
//     console.log(reverseStr);            // !==>!    // выводит обратную строку
// }
// reverse(`cursor:)>`);                   // !==>!    // запись того что мы хотим получить в обратном порядке
// reverse(`iOld`);

// Сапорты напишите если я что-то не правильно записал
