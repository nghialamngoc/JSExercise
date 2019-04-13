

const csv_to_array2 = (data, separated = ",") => {
    var headers = data.slice(0 , data.indexOf("\n")).split(separated);
    var body = data.slice(data.indexOf("\n") + 1).split("\n").map( x => x.split(separated));
    var result = [];
    
    for (let i = 0; i < body.length; i++) {
        let item = {}
        for (let j = 0; j < headers.length; j++) {

            Object.assign(item, {
               [headers[j]]: body[i][j]
           })
            
        }
        result = result.concat(item)
    }
    
    
    console.log(result);
}

console.log(csv_to_array2('col1,col2\na,b\nc,d'));

console.log(csv_to_array2('col1;col2\na;b\nc;d', ';'));


const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => {obj[title] = values[index]; return obj;}, {});
    });
  };
  console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
  console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]