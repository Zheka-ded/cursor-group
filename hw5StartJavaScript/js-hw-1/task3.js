// // A function which prints the stair picture of size n //



function printStairs(n) {
    const SOME_SYBOL = `#`;
    let result = ``;
    for (let i = 1; i <= n; i++){
        result = result + SOME_SYBOL;
        console.log(result);
    }
    return result;
    // console.log(result);
}

printStairs(3);



//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// // Позже еще детальнее разобраться во всех способах //
// // .repeat()
