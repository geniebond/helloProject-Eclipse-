

let data = '';

// <thead>
const titles = ['EmpID', 'Name', 'Addr', 'Email', 'hireDate', 'jobId', 'salary']; //tr-th 이름
const fields = ['employeeId', 'firstName', 'lastName', 'email', 'hireDate', 'jobId', 'salary']; // td 자료  


function makeHead() {

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
	titles.forEach(function(field) {
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


// <tbody>
function makeBody() {
	let tbd = document.createElement('tbody');
	data.forEach(function(obj) {
		tbd.appendChild(makeTr(obj));
		// let tr = document.createElement('tr');
		// for(let field in obj) {
		//     let td = document.createElement('td');
		//     let text = document.createTextNode(obj[field]);
	});
	return tbd;
}

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
	for (let field of fields) {
		let td = document.createElement('td');
		let text = document.createTextNode(obj[field]);
		td.appendChild(text);
		tr.appendChild(td);
	}
	return tr;
}

// <table></table>
// function drawTable() { ---- 기존에 쓰던 펑션 함수 방식
(function() { // ------ 즉시 실행함수라고 해서 변수없음 맨 밑에 끝에 ();로 실행
	let xhtp = new XMLHttpRequest();
	xhtp.onreadystatechange = function() { //요청에 대한 응답을 받는 이벤트 리스너 

		if (xhtp.readyState == 4 && xhtp.status == 200) { // 200이란 http 상태 코드를 뜻함
			console.log('readyState : ' + xhtp.readyState); // 요청 시 xhr 객체(코드의 첫 줄) 각 상태별로 readyState가 변경됨 
			console.log('status: ' + xhtp.status);
			data = JSON.parse(xhtp.responseText)

			let tbl = document.createElement('table');
			tbl.setAttribute('border', '1');
			tbl.appendChild(makeHead());
			tbl.appendChild(makeBody());
			document.getElementById('list').appendChild(tbl);
			// console.log(xhtp.responseText);
			console.log(data);
		}
	}
	xhtp.open('get', '../EmpList.json'); //상위 폴더에 있는 json파일을 가져옵니다.
	xhtp.send(); // open요청 후 -> send로 요청 전송
}()); // -- 즉시 실행함수 이름없이 괄호만 있음 실행 ();


//--------------- event / 등록버튼 만들어보기
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
	let eid = document.querySelector('input[name="eid"]').value;
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;
	let hireDate = document.querySelector('input[name="hire_date"]').value;
	let email = document.querySelector('input[name="email"]').value;
	let salary = document.querySelector('input[name="salary"]').value;

	if (eid == '' || lname == '' || hireDate == '' | email == '') {
		alert('모든 필수값을 입력하세요!');
		return;
	}

	// ajax 호출

	const xhtp = new XMLHttpRequest();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText); // <-- 여기에 json데이터가 담겨지게 됩니다. json -> javasript object 변경.	
		console.log(result);

		let tr = makeTr(result);
		document.querySelector('#list > table > tbody').appendChild(tr);
	}
	xhtp.open('post', '../InsertEmployeeServlet');
	xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhtp.send(`employee_id=${eid}&first_name=${fname}&last_name=${lname}&hire_date=${hireDate}&email=${email}&salary=${salary}`);


	/* let obj = {
		name: phone,
		phone: phone,
		addr: addr,
		email: email
	}

	let tr = makeTr(obj);
	document.querySelector('#list>table>tbody').appendChild(tr); */
}

//--------------- event / 선택/삭제 만들어보기
let delBtn = document.querySelector('#btn>button:nth-child(2)'); //버튼의 2번째 - 자식 선택
delBtn.addEventListener('click', addDelback);

function addDelback() {
	let check = document.querySelectorAll('tbody input[type="checkbox"]');
	for (let i = 0; i < check.length; i++) {
		if (check[i].checked == true) { //체크박스가 체크가 되어있는지 확인

			console.log(check[i].parentNode.nextSibling.innerText); //부모 노드의 형제 노드 호출
			let del_id = check[i].parentNode.nextSibling.innerText;
			// 디벨로퍼랑 삭제 하고 싶다면 ajax를 여기서도 호출 (삭제 서블릿 호출 = > 화면에서 삭제)
			const xhtp = new XMLHttpRequest();
			xhtp.onload = function() {
				// 서버 호출 결과값을 받아오면 실행하는 부분. 
				console.log(xhtp.responseText);
				let result = JSON.parse("xhtp.responseText");
				if (result.retCode == 'Success') {
					//화면 삭제. 
					check[i].parentNode.parentNode.remove();
				} else {
					window.alert(result.retVal);
				}

			}
			xhtp.open('post', '../DeleteEmployeeServlet'); //이름은 알아서 정하면 됨
			xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhtp.send(`eid==${del_id}`);
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

		document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
	}