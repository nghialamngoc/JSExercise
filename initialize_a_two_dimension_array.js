// Array from dùng để shadow clone 1 array hay 1 đối tượng khả duyệt

// Array.from('foo') => ['f', 'o', 'o']
// Array.from({ 0: 'a', 1: 'b', length: 2}) => ['a', 'b']
// Array.from(['a', 'c'])

// Array.fill(value, start, end)
// Array fill modify an array by change value of each element from a start position( default = 0 ) to an end position ( default = array.length) with static value


const initialize_2D_Array = (w, h, defaultValue) => {
    return Array.from({length: w}).map( () => Array.from({length: h}).fill(defaultValue));
}

console.log(initialize_2D_Array(2, 2, 0));
console.log(initialize_2D_Array(3, 3, 3));