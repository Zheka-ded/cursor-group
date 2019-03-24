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

const reverse2 = (str) => str.split('').reverse().join('');

// str.length - 1 -- означает что мы начинаем работать со строкой //
// с обратной стороны с конца строки. //
// str[0] -- означает что мы начинаем работать с первого символа строки //
// str.length -- длинна всей строки. //

