//basic.js

/*
    자바 스크립트르의 주석구문
    입니당.
*/

//변수를 선언할때는 밑에와 같이

// 'use strict'
//위 use strict는 변수타입 없는 오류를 체크해준다. 타이트하게 엄격하게 만들고싶을때 ....

var v1;
var myname = "Hong";
v1 = "hello, world";
v1 = 'nice, world';
v1 = 'nice, "world"';

v1 = 'nice, ' + myname;
v1 = `good, ${myname}`;

v1 = 100;

v1 = 3.14;

// 

var v2 = 10;
var result = v1 + v2;

//

var trueOrFalse = true;
trueOrFalse = false;
trueOrFalse = 10 < 20;
trueOrFalse = 10; // 0, null, undefined, '' = false 가능 그외엔 true
trueOrFalse = '';
trueOrFalse = 'hello';


if(trueOrFalse) {
    console.log('참값입니다.');
} else {
    console.log('거짓이거나 값이 없습니다.');
}


console.log(v1);
console.log(typeof v1);
//

var str = '<ul>';
str += '<li>Apple</li>';
str += '<li>Banana</li>';
str += '<li>Cherry</li>';
str += '</ul>';
document.write(str);

// var 변수선언 :
var num1 = 10;

num3 = 30;

console.log('global: ' + num1);
//console.log('global: ' + num3);

function f1() {
    var num1 = 20;
    var num3 = 40;
    //var < 변수를 쓰면안에ㅓ만 쓰이고 / 없으면 전역변수? 밖에서도 사용이 가능하긴함
    console.log('local : ' + num1);
}
f1();

console.log('global : ' + num1);
//console.log('global: ' + num3);

