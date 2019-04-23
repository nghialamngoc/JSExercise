const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);

console.log(initialize_Array_With_Range(5)); 
console.log(initialize_Array_With_Range(8, 3));  
console.log(initialize_Array_With_Range(6, 0, 2));  


/* result 
    [0,1,2,3,4,5]
    [3,4,5,6,7,8]
    [0,2,4,6]
*/