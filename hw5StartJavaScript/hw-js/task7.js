// A function which transforms first and last letter to uppercase (use built in string’s method). //
// Функция, которая преобразует первую и последнюю букву в верхний регистр (используйте встроенный метод строки). //



// Признаюсь, подсмотрел //
function firstAndLastToUpper(str){
    let result = ``;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[0] || i === str.length - 1) {
            result = result + str[i].toUpperCase();
        } else {
            result = result + str[i];
        }
    }
    return result;
}
console.log(firstAndLastToUpper(`abc`));
firstAndLastToUpper('abc') // 'AbC'
