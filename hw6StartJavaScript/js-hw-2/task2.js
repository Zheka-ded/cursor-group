

// function filterNumbers(arr, maxNumber) {
//     // let arr = arr.length;
//     // let maxNumber;
//     let result;
//     // let result = arr;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             arr.slice();
//         } else {
//             // arr.slice((arr[i] > maxNumber), );
//             result = arr[i];
//         }
//         return result;
//     }
//     // return result;
// }
// filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]
// console.log(filterNumbers([1, 4, 8, 1, 20], 5));


// console.log(filterNumbers(arr.slice((srr[i] > 5, )); // [1, 4, 1])


// function filterNumbers(arr, maxNumber) {
//     // let arr = arr.length;
//     let result = arr;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < maxNumber) {
//             arr.slice();
//         } else {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]
// console.log(filterNumbers([1, 4, 8, 1, 20], 5));



// const arr = [1, 4, 8, 1, 20, -20];
// console.log(arr.slice(arr.length, (arr > 5) ));



function filterNumbers(arr, maxNumber) {
    let maxNumber = arr.length;
    let max = arr[0];

    // for (let i = 0; i < arr.length; i++){
    //     if ( min > arr[i]) {
    //         min = arr[i];
    //     } else if(max < arr[i]) {
    //         max = arr[i];
    //     }
    // }

    // как правильно записать так как выше или так как ниже //
    
    for (let i = 0; i < arr.length; i++){
        if (maxNumber < arr[i]) arr[i];

        if(max < arr[i]) max = arr[i];
    }

    return{
        maxNumber,
        max
    }

    // return[
    //     min,
    //     max
    // ]
}
console.log(filterNumbers([1, 4, 8, 2, -20, ( -23 + -23445), 9432, 4, -3456, -9477], 5));
