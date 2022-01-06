//number1.js
//2022-01-06 math 객체 사용 -> p571

let num1 = 100.523;
console.log(Math.floor(num1));
//math floor - 매개변수의 소수점 이하 부분을 버립니다. 

console.log(Math.ceil(num1));
//ceil는 소수점 이하 부분을 올립 합니다. 

console.log(Math.round(num1));
//round 소수점 이하 부분을 반올립합니다. 

// for(i = 0; i < 10; i++) {
//     let temp = Math.random();
//     console.log(temp);
// }


// math random은 0 ~ 1 사이의 무작위 수를 반환
// console.log('-----------------');
// console.log(Math.floor(Math.random() * 5) +1 ); // 0~ 6 까지 무작위 수 

// 박스에서 숫자 찾아보기 게임

let findVal = -1;
let order = parseInt(Math.random() * 9);

for (let i = 0; i < 9; i++) {
    let temp = parseInt(Math.random() * 9) + 1;
    document.write(`<div>${temp}</div>`);

    if (i % 3 == 2) {
        document.write(`<br>`);
    }
    if (i == order) {
        findVal = temp;
    }
}
window.alert(findVal + ' 를 찾으세요');

function clickFnc(e) {
    console.log(e.target.innerText);
    // window.alert(e.target.innerText);
    if (e.target.innerText == findVal) {
        window.alert('축하합니다! ' + findVal + ' 를 찾았습니다!');
        e.target.style.color = 'blue';
    }
}

let divElem = document.getElementsByTagName('div');
// document 영역에서 -> div 태그를 찾아오는 메소드

console.log(divElem);
for(let i = 0; i< divElem.length; i++){
    divElem[i].onclick = clickFnc;
}
// divElem.onclick = function() {
//     window.alert(this.innerText);
// }