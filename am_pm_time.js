const get_Meridiem_Suffix_Of_Integer = (num) => {
    return num === 0 || num === 24 ?
        '0 am'
        : num === 12 ? '12 pm' : num < 12 ? num + 'am' : num % 12 + 'pm'
}

console.log(get_Meridiem_Suffix_Of_Integer(0));
console.log(get_Meridiem_Suffix_Of_Integer(11));
console.log(get_Meridiem_Suffix_Of_Integer(13));
console.log(get_Meridiem_Suffix_Of_Integer(25));