// map.js 
// 기존 daum.net에 있던 자료 여기로 백업

function makePage(aryData) {
    // [{ID:??, first_)name:??, last_name:??, email:??}]
    //-> table 형식.
    table > thead, tbody > tr > th, td

    let ul = document.createElement('ul');
    aryData.forEach(function (item) {
        let li = document.createElement('li');
        let text = document.createTextNode(`${item.id} - ${item.first_name} - ${item.last_name}`);
        li.appendChild(text);
        ul.appendChild(li);
    });
    console.log(ul);
    document.getElementsByTagName('body')[0].appendChild(ul);


    ///============내가 만든 table 코드 
    // let tbl = document.createElement('table');
    // tbl.setAttribute('border', '1');

    // let thd = document.createElement('thead');
    // let tr = document.createElement('tr');
    // tbl.appendChild(tr);

    // aryData.forEach(function (item) {
    //     let th = documnet.createElement('th');
    //     let thText = document.createTextNode(`${item.address} - 
    //     ${item.centerName} - ${item.centerType} - ${item.createAt} 
    //     - ${item.facilityName}- ${item.id} - ${item.lat} - ${item.lng} 
    //     - ${item.org} = ${item.phoneNumber}- ${item.sido} - ${item.sigungu} 
    //     - ${item.updatedAt} - ${item.zipCode}`);

    //     th.appendChild(thText);
    //     tr.appendChild(th);
    //     tbl.appendChild(thd);

    //     let tbd = document.createElement('tbody');
    //     aryData.forEach(function (item) {
    //         let td = document.createElement('td');
    //         let tdText = document.createTextNode(`${item.address} - 
    //     ${item.centerName} - ${item.centerType} - ${item.createAt} 
    //     - ${item.facilityName}- ${item.id} - ${item.lat} - ${item.lng} 
    //     - ${item.org} = ${item.phoneNumber}- ${item.sido} - ${item.sigungu} 
    //     - ${item.updatedAt} - ${item.zipCode}`);

    //         td.appendChild(tdText);
    //         th.appendChild(td)
    //     })
    //     tbd.appendChild(tr);
    // })
    // tbl.appendChild(tbd);
}

// 공공데이터 자료를 -> 보여줄 항목들 정의;
const fields = ['id', 'centerName', 'address', 'phoneNumber', 'sido', 'sigungu', 'map'];
// lat, lng가 위도 경도지만 여기선 map(lng + lat)으로 따로 만들어서 사용합니다.

function showCenterList(data) { // showCenterList의 새로운 function
    //전체 카운트 : data.currentCount : 284
    // 현재페이지 : data.page : 1
    // 전체데이터 : data.data : 284건의 접종 센터 정보. 

    // table 요소가 있으면 삭제.
    if (document.getElementById('tbl')) {
        document.getElementById('tbl').remove();
    }


    let table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');

    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // table 의 하위 요소 thead / tbody 추가
    table.append(thead, tbody);
    // thead
    let tr = document.createElement('tr');

    fields.forEach(function (field) {

        let td = document.createElement('th');
        let text = document.createTextNode(field.toUpperCase());
        td.append(text);
        tr.append(td);

    });
    thead.append(tr);

    // tbody 작성
    // data.data.forEach('show').append(table);

    // data.data.forEach(function (item) {
    data.forEach(function (item) {
        let tr = document.createElement('tr');
        fields.forEach(function (field) {
            if (field == 'map') {

                //lat + lng => map 링크 새로 연결
                // if - map이 아니라면 원래 코드를 실행하겠습니다. 
                //item.lat // 의도
                //item.lng // 경도
                let linkTag = document.createElement('a');
                linkTag.setAttribute('href', `daum.html?lat=${item.lat}&lng=${item.lng}&facility=${item.facilityName}`);
                linkTag.setAttribute('target', '_blank');
                linkTag.innerText = item.centerName;

                let td = document.createElement('td');
                td.appendChild(linkTag);
                tr.append(td);

            } else {
                // if - map이 아니라면 원래 코드를 실행하겠습니다. 
                let td = document.createElement('td');
                let text = document.createTextNode(item[field]);
                td.append(text);
                tr.append(td);
            }

        });
        tbody.append(tr);
    });

    document.getElementById('show').append(table);
}

// 시도별로 센터정보를 보여주기 -- 22-01-11 새로 추가
function showCenterListBySido(data) {
    // data.totalCount, data.page, data.data
    let centers = data.data;
    // 시도 => 정보생성.
    let filteredCenter = []; // 시도이름, 중복된거는 제거 
    centers.filter(function (item) {
        //  filercenter 값 중에서 item.sido 같은 값이 없으면 추가 
        if (filteredCenter.indexOf(item.sido) == -1) {
            filteredCenter.push(item.sido);
        }
    });
    console.log(filteredCenter);

    // 버튼 생성.
    let show = document.getElementById('show');
    filteredCenter.forEach(function (centerName) {
        let btn = document.createElement('button');
        btn.innerText = centerName;
        btn.addEventListener('click', showSidoList);
        show.appendChild(btn);
    });

    function showSidoList() {
        // 서울특별시 -> 서울특별시 소속의 센터를 출력하고
        console.log(this.innerText);
        let searchCenterName = this.innerText;

        let filterAry = centers.filter(function (item) {
            return item.sido == searchCenterName;
        });

        // filterAry.length -> 배열의 크기
        // paging 페이지 수를 계산 
        let totalCnt = filterAry.length; // 43줄이면 / 10씩 나눠서 -> 4.3 / 올림해서 5페이지로 출력처리   
        let totalPage = Math.ceil(totalCnt / 10);
        for (let i = 1; i <= totalPage; i++) {
            let startCnt = (i - 1) * 10 + 1;
            let endCnt = i * 10;

        }
        console.log(filterAry); //필터링 - 어느도의 몇개 출력
        showCenterList(filterAry); //43개 호출. 10개씩 페이지자료 구분해서
        // filterAry 안에는 -> [{}, {}, {}, {}] - 자료가 들어가있다?
    }

    // 페이지 출력 / 나누기 
    pagingList();

    function pagingList() { // 총 283개의 센터 정보중 -> 페이지를 10개씩 나누어서 출력

        let allA = document.querySelector('#page>a');
        for (let a of allA) {
            a.setAttribute('class', '');
        }
        if (this.nodeType == 1) {
            this.setAttribute('class', 'active');
        }
        let page = this.innerText; // <a>2</a>
        if (page == null || page == '') {
            page = '1';
        }
        page = parseInt(page);
        pagingAry = filterAry.filteredCenter(function (item, ind) {
            let startCnt = (page - 1) * 10; // 0
            let endCnt = (page * 10); // 10
            return startCnt <= ind && ind < endCnt; // 10 ~ 19
        });
        showCenterList(pagingAry);

    }
    
    // 서울특별시 클릭. 22.01.11 추가
    let firstBtn = document.querySelector('#show>button:nth-child(1)');
    firstBtn.click(); //클릭 이벤트 호출 
}

// 사용자가 입력한값을 읽고 ->
// let addBtn = document.querySelector('#searchBtn');
// addBtn.addEventListener('click', addCallback);

// function addCallback() {
//     let = document.querySelector('input[name="searchCenter"]').value;

//     if (`${item.facilityName}` == '') {
//         alert('검색할 (시, 도)를 입력해주세요. ');
//         return;
//     }

    // 버튼에 -> 이벤트 등록.
// for(let i = 0; i < filteredCenter.length; i++) {
//     if(filteredCenter[i].sido == item.sido) {
//         break;
//     } else {
//         filteredCenter.push(item); // 배열에 push로 정보 넣기
//     }
// }
// if(filteredCenter[i].sido == item.sido)

////

// Asynchoronous Javascript and xml (ajax);
let url =
    `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=vEtzmMvrEZ%2FqbnefkvnCnXg9DJTIblenMdkvb9PGu%2B0TQGJNnikhPZ6c7DccLd9MRGamHkFHlMLV59CNrvgs1A%3D%3D`;
let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () { //요청에 대한 응답을 받는 이벤트 리스너 
    if (xhtp.readyState == 4 && xhtp.status == 200) { // 200이란 http 상태 코드를 뜻함
        console.log('readyState : ' + xhtp.readyState); // 요청 시 xhr 객체(코드의 첫 줄) 각 상태별로 readyState가 변경됨 
        console.log('status: ' + xhtp.status);
        let data = JSON.parse(xhtp.responseText)
        console.log(data); // currentCount : 284, data: [{}{}{}], totalCount: 284

        // console.log(xhtp.responseText);
        console.log(data);

        // makePage(data); 
        // showCenterList(data.data); //전체 접종센터 리스트를 가져옵니다. 01-10
        showCenterListBySido(data) // 접종센터 시도군을 정리하기 위해 새로만듬 01-11
    }
}
xhtp.open('get', url);
xhtp.send(); // open요청 후 -> send로 요청 전송 