// Функция, которая удаляет дублирование букв в строке. Функция должна быть без учета регистра. //


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





unique_char = str => str.split('').reduce((s, v) =>
    (!s.toLowerCase().includes(v.toLowerCase()) || v === ' ') ? (s + v) : s
);

console.log(unique_char("Hello I am Iron Man"));

