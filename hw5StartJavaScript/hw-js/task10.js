// A function which removes duplication of letters in string. The function must be case-insensitive. //
// Функция, которая удаляет дублирование букв в строке. Функция должна быть без учета регистра. //


// function removeDuplicationLetters(str) { /* your code */ }
// removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '


function removeDuplicationLetters(str) {
    let result = ``;

    for (let i = 0; i < str.length; i++) {
        let temp = result.toLowerCase();
        let char = str[i].toLowerCase();
        if ( str[i] === ` ` || !temp.includes(char) ) {
            result = result + str[i];
        }
        
    }

    return result;
}
console.log(removeDuplicationLetters('Hello I am Iron Man'));




// function removeDuplicationLetters(str) {
//     let result = ``;
//     for (let i = 0; i < str.length; i++) {
//         if ( str[i] === ` ` || !result.toLowerCase().includes(str[i].toLowerCase()) ) {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(removeDuplicationLetters('Hello I am Iron Man'));
// removeDuplicationLetters('Hello I am Iron Man');
