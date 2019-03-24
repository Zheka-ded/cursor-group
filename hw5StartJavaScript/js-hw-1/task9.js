// Функция, которая возвращает строку со всеми буквами в верхнем регистре (без встроенного метода строки). Функция поддерживает только английский алфавит.//

function uppStr(str) {
    for (let i = 0; i <= str.length; i++) {
        return str.toUpperCase();
    }
}
console.log(uppStr(`asdrfhvj`));

// переделать //

const toUpperCase = str =>
  Array.prototype.map.call(str, (el, i) => {
   const charCode = el.charCodeAt(0);

   const isLowerCaseChar = charCode >= 97 && charCode <= 122;
   if(isLowerCaseChar) {
     return String.fromCharCode(charCode - 32);
   } 
   return el;
  }).join('');