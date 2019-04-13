
const csv_to_array = (data, separated = ",", omitFistLine = false) => {
    
    var result = data
        .slice( omitFistLine ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map( x => x.split(separated) );

    return result;
}

console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));