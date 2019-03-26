// Функция, которая возвращает строку со всеми буквами в верхнем регистре (без встроенного метода строки). Функция поддерживает только английский алфавит.//

const uppStr2 = (str) => {
  return str.split('').map.call(str, (el, i) => {
 const charCode = el.charCodeAt(0);
 
 const isLowerCaseChar = charCode >= 97 && charCode <= 122;
 if(isLowerCaseChar) {
   return String.fromCharCode(charCode - 32);
 } 
 return el;
}).join('');
}
console.log(uppStr2(`dfghjhgf ну да ну да`));



function uppStr(str) {
    for (let i = 0; i <= str.length; i++) {
        return str.toUpperCase();
    }
}
console.log(uppStr(`asdrfhvj`));

// // переделать //

// const toUpperCase = str =>
//   Array.prototype.map.call(str, (el, i) => {
//    const charCode = el.charCodeAt(0);

//    const isLowerCaseChar = charCode >= 97 && charCode <= 122;
//    if(isLowerCaseChar) {
//      return String.fromCharCode(charCode - 32);
//    } 
//    return el;
//   }).join('');

