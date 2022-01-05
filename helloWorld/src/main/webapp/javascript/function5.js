// function5.js
// 2022-01-05

var result = 100;
console.log(result);

//
function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);
//

var result = 200;
console.log(result);

// let result = 300;
//해당 let은 var와 달리 중복선언이 되지 않는다.
let summay = 100;
console.log(summay);

function block1() {
    let summay = 200;
    console.log(summay);

}

console.log(summay);
//렛은 두번 선언 할 수 없지만 위 처럼 블록을 이용하면 변수가 발생합니다. 

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

console.log('---------------');

//변수를 선언할때는 var 또는 let을 쓰고
//상수를 쓸 경우

let myName = 'Hong';
myName = 'Hwang';
//위는 변수

//아래는 '상수' 변하지 않는 값 - 자바와 동일 합니다. 
const pi = 3.14
// pi = 3.1415;

const obj = {
    fullName: 'KildongHong',
    birth: '2012-05-04',
    score: 80,
    showInfo: function () {
        return this.fullName + ', ' + this.score;
    },
    showAge: function () {
        let today = new Date();
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000 * 60 * 60 * 24 * 365)
        age = Math.floor(age);
        console.log(age);
        return age;
    }
}
console.log(obj.fullName, obj.score);

//하단의 obj는 상수이지만 -> 상수의 필드값을 가져와 변경한것이러 출력오류가 안남.
obj.age = 30;
console.log(obj.age);

console.log(obj.showInfo());
console.log(obj.showAge() + '살 입니다.'); 