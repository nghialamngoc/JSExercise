const filter_Non_Unique = (arr = []) => {
    return arr.filter( (x, i) => {
        if(arr.indexOf(x) === i && arr.lastIndexOf(x) === i)
            return x;
    })
}

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Non_Unique([1, 2, 3, 4]));  