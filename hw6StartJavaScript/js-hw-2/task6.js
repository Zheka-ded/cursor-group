
function minMax(arr) {
    let min = arr[0];
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
        if ( min > arr[i]) min = arr[i];

        if(max < arr[i]) max = arr[i];
    }

    return{
        min,
        max
    }

    // return[
    //     min,
    //     max
    // ]
}
console.log(minMax([1, 4, 8, 2, -20, ( -23 + -23445), 9432, 4, -3456, -9477]));


// function min(arr) {
//     let min = arr[0];
//     // в min будет сщхранено минимальное значение массива //

//     for (let i = 0; i < arr.length; i++) {
//         // цикл работает по всей длинне массива //

//         if ( min > arr[i]) min = arr[i];
//         // если минимальное значение больше значения массива 
//         // минимальное значение перезаписывается, и так по 
//         // всей длинне массива

//     }
//     return min;
// }
// // min([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
// console.log(min([1, 4, 8, 2, -20, 432, 4, -3456, -477]));
// console.log(min([1, 4, 8, 2, -20, (23 - 23445), 432, 4, -3456, -477]));

// function max(arr) {
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if(max < arr[i]) max = arr[i];
//     }

//     return max;
// }
// // max([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
// console.log(max([1, 4, 8, 2, -20, 432, 4, 3456, -477]));


function minMax(arr) {
    let min = arr[0];
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
        if ( min > arr[i]) min = arr[i];

        if(max < arr[i]) max = arr[i];
    }

    return{
        min,
        max
    }

    // return[
    //     min,
    //     max
    // ]
}
console.log(minMax([1, 4, 8, 2, -20, ( -23 + -23445), 9432, 4, -3456, -9477]));


function filterNumbers(arr, maxNumber) {
    let result = arr.length;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < maxNumber) {
            result = arr.length;
        }
    }

    return [
        result
    ]
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]
console.log(filterNumbers([1, 4, 8, 1, 20], 5));