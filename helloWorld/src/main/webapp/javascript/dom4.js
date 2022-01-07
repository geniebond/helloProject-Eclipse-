// dom4.js
//2022-01-07
const titles = ['이름', '학생번호', '점수',];

const students = [{
    fullName : '겨울',
    studNo : '1001',
    score : 80
}, {
    fullName : '핸드크림',
    studNo : '1002',
    score : 85
}, {
    fullName : '호떡',
    studNo : '1003',
    score : 83
}, {
    fullName : "붕어빵",
    studNo : '1005',
    score : 218
}];

//table태그 모양으로 
let parent = document.getElementById('show');


// table > thead > tbody 
//1) 먼저 테이블 부터 만들어 봅니다. 
let tbl = document.createElement('table'); // ()에는 만들 태그 이름을 넣는다.
tbl.setAttribute('border', '1'); //속성 추가 
parent.appendChild(tbl);

//2) <thead></thead>
let thd = document.createElement('thead'); 


//3) <tr></tr> // thead의 하위에 ---------------------------------
let tr = document.createElement('tr');

tbl.appendChild(tr);
//4) <th></th> // th
titles.forEach(function (title) {
    let th = document.createElement('th');
    //th.innerText <-- 요렇게도 만들어도 되지만 우린 이번에 밑에 foreach로..
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
});
tbl.appendChild(thd);
//-----------------------------------------------여기까지가 thead 영역

 // 위 만튼 테이블에 버튼을 추가해봅니다. 
 let td = document.createElement('th');
 let text = document.createTextNode("삭제");
 td.appendChild(text); 
 tr.appendChild(td);

//5)---------------<tboyd></tbody>
let tbd = document.createElement('tbody'); 
students.forEach(function (obj) {
    let tr = document.createElement('tr');

    tr.onmouseover = function(e) {
        e.target.parentNode.style.backgroundColor = 'red';
    }

    tr.onmouseout = function (e) {
        e.target.parentNode.style.backgroundColor = 'none';
    }
   
    // ---- 밑에 하나씩 선언보단 for in으로 필드값을 반복하면 간소화할 수 있따
    // ---- field의  갯수만큼 반복해서 생성 
    for(let field in obj) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field]); //obj의 field를 쓴다고 정의
    td.appendChild(text); 
    tr.appendChild(td);
    }

    // ------------삭제버튼 
    let td = document.createElement('td');
    let btn = document.createElement('button'); //여기 btn에 event삭제를 달아준다
    btn.onclick = function(e) { 
        console.log(e.target);
        e.target.parentNode.parentNode.remove(); //remove 요소삭제 메소드
    }
    let text = document.createTextNode('삭 제'); 
    btn.appendChild(text); //버튼을 text의 부모로
    td.appendChild(btn);
    tr.appendChild(td);
   


    // //--------------------- 밑에는 하나씩 선언하니 양이 많아진다. 
    // //<td>학생 이름</td>
    // let td = document.createElement('td');
    // let text = document.createTextNode(obj.fullName);
    // td.appendChild(text); //바로위 td와 text의 자식 부모관계를 요렇게 정리하고.
    // tr.appendChild(td); // tr은 td의 부모 관계를 명시 ?

    // // tr을 제외하고 필드값들을 한줄씩 하줄씩 복사하고 수정함
    // // 학생번호
    // td = document.createElement('td');
    // text = document.createTextNode(obj.studNo);
    // td.appendChild(text);
    // tr.appendChild(td);

    // //점수
    // td = document.createElement('td');
    // text = document.createTextNode(obj.score);
    // td.appendChild(text);
    // tr.appendChild(td);

    // </tr>
    tbd.appendChild(tr); //끝에 tr을 써도 되고 옆처럼 쓰는 방식도 있음
});
//6) 테이블 닫기  </table>
tbl.appendChild(tbd);





