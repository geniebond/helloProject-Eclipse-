//string1.js
//2022-01-05 / 스트링 관련

var val = 'hello';
val = new String('hello');
console.log(typeof val);


var h3Tag = document.querySelector('h3');
var text = h3Tag.innerHTML
text = text.substring(2, 10);
str = text.slice(1, 5);
str = val.substring(0, 2);
// console.log(h3Tag.innerHTML)

var elem = document.getElementById('show');
elem.innerHTML = '<h3>Hi, everyone fucking day today</h3>';
// elem.innerText = '<h3>How are you</h3>';

elem.innerText = str;
console.log(elem);

