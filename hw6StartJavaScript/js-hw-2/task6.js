// Функция, которая принимает массив чисел, и maxNumberфункция возвращает новый массив с числами, не превышающими maxNumber.

function filterNumbers(arr, maxNumber) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) {
            result.push(arr[i]);
        }
    }

    return result;
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]
console.log(filterNumbers([1, 4, 5, -100, 156, 8, 1, 20], 5));

// .push добавляет элемент/значение в конец массива