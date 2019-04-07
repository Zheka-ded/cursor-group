// Функция, которая возвращает среднее число чисел в массиве.

function average(arr) {
    let result = 0;

    for (i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }

    return result / arr.length;
    
}
average([1,4,2]) // 2.33
console.log(`average: `,average([1,4,2]));
console.log(`average: `,average([1,4,2,5,1,2]));
console.log(`average: `,average([2,2,2,2,2,3,3,5,8,7,7,5]));


// reduce

function averageReduce(arr) {
    let result = arr.reduce(function (sum, curent){
        return sum + curent;
    });
    return result / arr.length;
}
averageReduce([1,4,2]) // 2.33
console.log(`averageReduce: `,averageReduce([1,4,2]));
console.log(`averageReduce: `,averageReduce([1,4,2,5,1,2]));
console.log(`averageReduce: `,averageReduce([2,2,2,2,2,3,3,5,8,7,7,5]));