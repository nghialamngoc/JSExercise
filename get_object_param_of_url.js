//#Source https://bit.ly/2neWfJ2 


// => string match method trả về một mảng array các string khớp với biểu thức rexg input
const get_URL_Parameters = url =>
(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
  (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
  {}
);
console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 
console.log(get_URL_Parameters('google.com'));
console.log(get_URL_Parameters('https://www.w3resource.com'));