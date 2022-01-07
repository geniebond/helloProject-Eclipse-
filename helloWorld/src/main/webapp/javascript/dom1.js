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
list[0].remove();
console.log(list);

document.getElementById('delBtn').onclick = function () {
    let fname = document.getElementById('fname').value;
    let liTag = document.createElement('li');
    liTag.innerHTML = fname;
    document.querySelector('ul');
    ul.appendChild(liTag);

}

let obj = {
    name:"hong",
    hobbies: {
        first: 'riding',
        last: 'sleeping;'
    }
}

obj.hobbies.first