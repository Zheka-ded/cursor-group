// // A function which returns reversed string. //

function reverse(n) {
    let reverseStr = '';
    for (i = n.length - 1; i >= 0; i--){
        reverseStr += n[i];
    }
    console.log(reverseStr);
}
reverse(`cursor:)>`);
