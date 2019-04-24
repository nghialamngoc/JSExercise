const countOccurrences = (arr, number) => {
    return arr.reduce( (pre, x, index) => {
        if (x === number)
            pre += 1;
        return pre;
    }, 0)
}

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));