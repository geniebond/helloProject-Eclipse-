// array1.js
//2022-01-06 ~ 배열/ 배열은 내용이 많고 중요하다고 하심


let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let fname = document.getElementById('fname').value;
    if(!fname) {
        alert('값을 입력하세요');
        return;
    }
    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for(let i = 0; i < list.length; i++) {
        if(list[i].innerText == fname) {
            list[i].style.display = 'none';
        }
    }
}




//
const numAry = [23, 17, 33, 72, 88];

let sum = 0;
numAry.forEach(function (item, idx, ary) {
    if (idx % 2 == 0)
        sum += item;

});
console.log(`합계 : ${sum}`);


const names = ['강백호', '서태웅', '채치수', '정대만', '송태섭'];
// for (let i = 0; i < 3; i++) {
//     const name = window.prompt(`추가 이름 입력>> `);
const fname = window.prompt(' 삭제할 이름 입력>> ');
//
for (i = 0; i < names.length; i++) {
    if (fname == names[i]) {

    }
    names.splice(i, 1);
}
// names.splice(1, 1, '제임스본드');
//     names.push(name);

console.log(names);
// }

// names.splice(1, 2, '누군가', '누군가2');
//요렇게 적으며 위의 names에서 1번위 위치에서 1,2= 2개 값
//서태웅, 채치수의 이름이 -> 누군가 누군가2로 대체됨
// 반대로 names.splice(1, 2); -> 요렇게 적으면 대체 값없이 기존 2개이름이 삭제됨

//




// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// // console.log(list);
// list.forEach(function (item, index, ary) { //foreach ()안에 함수를 정의하세요.
//     console.log(item, index, ary);
//     console.log(item, item.innerHTML); // 태그의 가운데 값을 inner html 이다.
//     if(idx % 2==0)
//     item.innerText = '<h3>hello</h3>';
// }); 

// //foreach는 list만큼 값을 가지면서 -> fuction(){} 구문 메소드를 실행을 시킨다. 