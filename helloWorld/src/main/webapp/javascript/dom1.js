// dom1.js
// 2022-01-06 ~ dom

let pelemt = document.querySelector('body>p');
console.log(pelemt);
pelemt.innerHTML = "not hello";

let newP = document.createElement('p');
newP.innerHTML = 'Good, morning!';
console.log(newP);

pelemt.after(newP);

let list = document.querySelectorAll('ul>li');
console.log(list);
