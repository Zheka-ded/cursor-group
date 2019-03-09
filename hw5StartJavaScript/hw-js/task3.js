// // A function which prints the stair picture of size n //


function printStairs(n) {
    let symbolPrint = `$!`;
    for (i = 1; i <= n; i++)
    console.log(symbolPrint.repeat(i));
}
printStairs(5);


//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// // Позже еще детальнее разобраться во всех способах //
// // .repeat()
