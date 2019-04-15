const radom = () => {
    return Math.floor((Math.random()) * 256);
}

const radomColorHex = () => {
    return "#" + radom().toString(16) + radom().toString(16) + radom().toString(16);
}

console.log(radomColorHex());