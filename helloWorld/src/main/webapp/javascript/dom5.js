// dom5.js
// 2022-01-07 ~ 
// 이미지 예시를 만들어 보기  -> 입력시 빈칸에 이름/연락처/주소/이메일이 등록되도록

const data = [{
    name: '호떡',
    phone: '010-2022-0107',
    addr: '대구 중구 100번지',
    email: 'cake@email.com',
}, {
    name: '떡볶이',
    phone: '010-4692-0107',
    addr: '대구 중구 200번지',
    email: 'hot@email.com',
}, {
    name: '츄러스',
    phone: '010-7897-0107',
    addr: '대구 중구 300번지',
    email: 'long@email.com',
}, {
    name: '어묵',
    phone: '010-6963-0107',
    addr: '대구 중구 400번지',
    email: 'soup@email.com',
}];

// <thead>
function makeHead() {

    const fields = ['이름', '연락처', '주소', '메일'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');

    //---위에 삭제 체크박스 버튼을 만들어 봅니다. 
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc); //체크박스 전체 선택
    th.appendChild(checkbox);
    tr.appendChild(th);


    //필드 영역.
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });
    thd.appendChild(tr);
    return thd;
}

// all check fnc
function allCheckFnc() {
    console.log(this.checked);
    // 체크박스 전체 선택 == tbody쪽 checkbox 찾아서 checked = true; allcheck
    let allCheck = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = this.checked;
    }
}

//     let allCheck = document.querySelectorAll('#btn>button')
//     allCheck.addEventListener('click', addallCheckFnc);

//     //allcheckfnc 펑션
//     function addallCheckFnc () {
//         let allCheck = document.querySelectorAll('.row>input[type="checkbox"]')
//         for(let i = 0; i < allCheck.length; i++) {
//             if(allCheck[i].checked == true ) {
//                 allcheck[i].parentNode.onclick();
//             }
//         }
//     }
// }




// 데이터 출력 

// <tbody>
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));
        // let tr = document.createElement('tr');
        // for(let field in obj) {
        //     let td = document.createElement('td');
        //     let text = document.createTextNode(obj[field]);
    });
    return tbd;
    let tr = makeTr(obj);
    //     td.appendChild(text);
    //     tr.appendChild(td);
    // }
    tbd.appendChild(tr);
    // });
}
// tbl.appendChild(makeHead());
// tbl.appendChild(makeBody());
// document.getElementById('list').appendChild(tbl);

// tr 생성 -- 위 바디의 내용을 밑에 tr로 붙여서 가져왔습니다. 
function makeTr(obj) {
    let tr = document.createElement('tr');

    // ------------체크박스 만들기 ----------------------
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    //데이터 영역
    for (let field in obj) {
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}

// <table></table>
// function drawTable() { ---- 기존에 쓰던 펑션 함수 방식
(function () { // ------ 즉시 실행함수라고 해서 변수없음 맨 밑에 끝에 ();로 실행
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());
    document.getElementById('list').appendChild(tbl);
}()); // -- 즉시 실행함수 이름없이 괄호만 있음 실행 ();
// }
// drawTable();

//--------------------------------------------------------------------

//--------------- event / 등록버튼 만들어보기

let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let name = document.querySelector('input[name="name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == '' || phone == '' || addr == '' | email == '') {
        alert('모든 필수값을 입력하세요!');
        return;
    }

    let obj = {
        name: phone,
        phone: phone,
        addr: addr,
        email: email
    }

    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
}

//--------------- event / 선택/삭제 만들어보기
let delBtn = document.querySelector('#btn>button:nth-child(2)'); //버튼의 2번째 - 자식 선택
delBtn.addEventListener('click', addDelback);

function addDelback() {
    let check = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked == true) { //체크박스가 체크가 되어있는지 확인
            check[i].parentNode.parentNode.remove();
        }
    }
}


//---------------- event / 입력화면에 리스트 보여주기 

let names = document.querySelectorAll('table>tbody>tr>td:nth-child(2)');
console.log(this.names);
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', showInfo);
    names[i].checked = this.names;
}

function showInfo() {
    // this 이벤트를 받는 대상(td)
    let parent = this.parentNode;
    // console.log(parent.childNodes[2].innerText); //자식 노드는 s를 붙임 - 자식 여려명/ 부모는 한개?

    document.querySelector('input[name="phone"]').value 
    = parent.childNodes[2].innerText;
}