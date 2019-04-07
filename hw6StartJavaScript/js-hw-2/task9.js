// Функция, которая объединяет все первые вложенные массивы в один массив (использование reduce):
function concatFirstNestedArrays(arr) {
    let result = arr.reduce(function(first, second){
        return first.concat(second);
    });

    return result;
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));


