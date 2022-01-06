// example1.js

const students = [{
    fullName : '류지학',
    studNo : '1001',
    score : 80
}, {
    fullName : '핸드크림',
    studNo : '1002',
    score : 85
}, {
    fullName : '퍽킹',
    studNo : '1003',
    score : 83
}, {
    fullName : "십팔",
    studNo : '1005',
    score : 218
}];

students.pop(); // 배열 마지막부터 1나씩 내용을 삭제
students.shift(); // 배열 처음부터 내용을 1나씩 삭제 

// function makeUl(ary) {
//     var str = '';
//     str += `<ul>`
//     str += `<li>이름</li>
//     <li>학번</li>
//     <li>점수</li>`

//     str += `<ul>`;
//     str += `</ul>`

//     for(var field of students) {
//         str += `<li>${student[field]}</li>`;
//     }
//     str += `</ul>`;
// }
// return ary;

document.write(`<ul>`);
students.forEach(liFnc); // callback function
// {
//     document.write(`<li>${item.fullName} - ${item.studNo} - 
//     ${item.score} </li>`);

// });

students.push({fullName: '홍당무', studNo: '1004', score: 18});

document.write(`</ul>`);

function liFnc(item) {
    document.write(`<li>${item.fullName} - ${item.studNo} - 
    ${item.score} </li>`);
}

//
const numAry = [1, 2, 3];
// numAry[3] = 4; // 배열에 추가 값 더하기
// numAry[numAry.length] = 10; // 또 배열에 추가 값 더하기 
// numAry[numAry.length] = 20; // length로 하면 배열 수를 안정하고 그냥 길이에 ㅇ넣으면 된다

//  또는 추가 할때 요렇게..
numAry.push(4); // push는 배열의 마지막에 순차적으로 값을 더함
numAry.push(44);

numAry.unshift(18); //unshift는 배열의 맨 앞에 순차적으로 값을 더함


console.log(numAry);






