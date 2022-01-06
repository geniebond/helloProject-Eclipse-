//string1.js
//2022-01-05 ~ 06 / 스트링 관련 참조 :  https://www.w3schools.com/js/js_string_methods.asp 

const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}
//오브 젝트 타입으로 읽어오고 싶으면 이렇게 쓰고 ..
person.fullName = 'Hwang';
person.toString();

// 문자열 1번부터 ~ 5번째까지 문자열을 가져와라
const str = "Hwang";
str.length;
let newStr = str.substring(1, 5);
console.log(newStr);


//
newStr = str.slice(-3, -1);
console.log(newStr);

//
newStr = str.replace('a', '').replace('', '-');
console.log(newStr);


// 문자 대체 = 'a'위치의 문자를 두번째 설정값으로 변경 ' '빈칸이면 빈칸이 되버림

// 예제 - 주민번호 : 000101-3123456, 990101-2123456
//                  850101-1234567, 870101-2123456, 9201012123456
// 남자/여자 구별하는 function
function getGender(jm) {

    if (jm.length != 13 && jm.length != 14) {
        return;
    }


    //7번째 위치 1,3 : 남자 / 2,4:여자
    let genNum = jm.substring(7, 8).replace('-', '').replace(' ', '');
    genNum = jm.slice(-7, -6);
    let person = '남자';

    if (genNum == '1' || genNum == '3') {
        person = '남자';
    } else if (genNum == '2' || genNum == '4') {
        person = '여자';
    } else {
        person = 'Null';
    }
    return person;
}
console.log(getGender('000101-3123456')); //남자
//문자열 7번째 위치부터 8번쨰 위치까지 1개의 문자를 가져와라
console.log(getGender('990101-2123456')); //여자
console.log(getGender('850101-1234567')); // 남자
console.log(getGender('870101-2123456')); // 여자
console.log(getGender('9201012123456')); // 여자

//
console.log('hello'.toUpperCase().toLowerCase());

// concat 2개의 문자를 연결해주는 역할을 합니다. 
// concat의 위치에 , 를 쓰고 !나 공백등을 추가할 수 있습니다. 
let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ', str2, '!!'));

let str3 = str1.concat(' ', str2, '!!');
// charAt은 -> 검색하고싶은 문자를 설정 있으면 -> 위치의 값을 넘겨줍니다. 
let pos = str3.charAt(6);
console.log(pos);

// split 문자를 나누는것
// ex hello world!! -> 이어놓은 문장을 각각 잘라서 출력해줍니다.
// '' 따옴표 공란이 없으면 1개식 문자를 나열하니 주의..
let ary = str3.split(' ');
for (let str of ary) {
    console.log(str);
}

//해당 lorem의 문자의 -> 단어가 몇개 인지 알아봅니다. 
let temp = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab, eligendi iusto laboriosam saepe distinctio asperiores eaque unde tenetur ut quam atque ea veniam architecto aperiam velit libero enim quisquam!'

let tempAry = temp.split(' ');
console.log(tempAry.length);

//
let fruits = 'Apple Banana Cherry Melon 사과 포도';
let fruit = prompt('과일 이름 입력 : ');


function getLoc(fruit) {
    
    if(!fruit) {
        return;
    }
    //위의 if는 입력값이 없으면 -> 기능을 종료 - undefined 로 나옴

    //문자를 나누고 -> charat으로 몇번째인지 가져온다?
    let ftp = fruits.split(' ');
    console.log(ftp);

    let cnt = 0;

    //어떻게 되는지 모르겠으면 콘솔로 출력을 해보고 -> 다시 계산식을 생각해봅니다. 

    for (i = 0; i < ftp.length; i++) {
        if (fruit.toUpperCase() == ftp[i].toUpperCase()) {
            //대문자 소문자 상관없이 -> 입력시킬때 오류가 안나고 비교되게 하기 toUppercase()
            cnt = i + 1;
        }
    }
    if (cnt == 0) {
        return '찾는 과일 없음';
    }
    return cnt + ' 번째';
}
console.log(getLoc(fruit));











// var val = 'hello';
// val = new String('hello');
// console.log(typeof val);


// var h3Tag = document.querySelector('h3');
// var text = h3Tag.innerHTML
// text = text.substring(2, 10);
// str = text.slice(1, 5);
// str = val.substring(0, 2);
// // console.log(h3Tag.innerHTML)

// var elem = document.getElementById('show');
// elem.innerHTML = '<h3>Hi, everyone fucking day today</h3>';
// // elem.innerText = '<h3>How are you</h3>';

// elem.innerText = str;
// console.log(elem);