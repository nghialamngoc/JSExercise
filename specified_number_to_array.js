
//rest và spead áp dụng cho các đối tượng trả duyệt
//`${n}` => chuyển số n thành chuỗi

const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));

//solution 2

const toNarr = num => {
    return Array.from(String(num), Number);
};
console.log(toNarr(123456)); // [1, 2, 3, 4, 5, 6]