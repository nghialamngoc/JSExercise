const random_Number_In_Range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random_Number_In_Range(2, 10)); 
console.log(random_Number_In_Range(1, 5)); 
console.log(random_Number_In_Range(-5, -2)); 
console.log(random_Number_In_Range(0, 1));