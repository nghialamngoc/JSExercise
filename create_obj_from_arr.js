const object_From_Pairs = (arr) => {
    return arr.reduce( (result, value) => {
        result[value[0]] = value[1];
        return result;
    }, {})
}


console.log(object_From_Pairs([['a', 1], ['b', 2]])); 
console.log(object_From_Pairs([[1, 10], [2, 20], [3, 30]]));