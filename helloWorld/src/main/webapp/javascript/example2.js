// example2.js
// 2022-01-06 ~ mokaroo - personal - binary 에서 다운후 notepad -> 여기로 붙여넣기
// ``< 백팁으로 자료를 묶어줄 것. 
let datas = `[{"id":1,"first_name":"Dwayne","last_name":"Blow","email":"dblow0@time.com","gender":"Male"},
{"id":2,"first_name":"Dolph","last_name":"Tossell","email":"dtossell1@walmart.com","gender":"Female"},
{"id":3,"first_name":"Ferdinande","last_name":"Medcraft","email":"fmedcraft2@trellian.com","gender":"Male"},
{"id":4,"first_name":"Adrian","last_name":"Reyna","email":"areyna3@reuters.com","gender":"Female"},
{"id":5,"first_name":"Bethina","last_name":"Jorat","email":"bjorat4@sfgate.com","gender":"Female"},
{"id":6,"first_name":"Marti","last_name":"Cullip","email":"mcullip5@reddit.com","gender":"Female"},
{"id":7,"first_name":"Valeria","last_name":"Stockill","email":"vstockill6@arstechnica.com","gender":"Female"},
{"id":8,"first_name":"Sybil","last_name":"Melburg","email":"smelburg7@creativecommons.org","gender":"Female"},
{"id":9,"first_name":"Sheila-kathryn","last_name":"Edelman","email":"sedelman8@vkontakte.ru","gender":"Female"},
{"id":10,"first_name":"Dotty","last_name":"Parkman","email":"dparkman9@ox.ac.uk","gender":"Female"},
{"id":11,"first_name":"Collie","last_name":"Starking","email":"cstarkinga@japanpost.jp","gender":"Male"},
{"id":12,"first_name":"Nicoline","last_name":"Sacase","email":"nsacaseb@prweb.com","gender":"Female"},
{"id":13,"first_name":"Barth","last_name":"Golborne","email":"bgolbornec@qq.com","gender":"Male"},
{"id":14,"first_name":"Camille","last_name":"Denty","email":"cdentyd@privacy.gov.au","gender":"Female"},
{"id":15,"first_name":"Hillie","last_name":"Gunderson","email":"hgundersone@prnewswire.com","gender":"Female"}]`

let employees = JSON.parse(datas);
// console.log(employees);

document.write(`<table border = "1">`)
document.write(`<thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                </tr>
                </thead>`)
document.write(`<tbody>`);
employees.forEach((item, ind) => {
    // console.log(item.id, item.first_name + ' ' + item.last_name, item['email'], item['gender']);
    document.write(`<tr>
                    <td>${item.id}</td>
                    <td>${item.first_name} ${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>${item.gender}</td>
                    </tr>`);
});


document.write(`</tbody>`);
document.write(`</table border="1">`);
//


// employees => 배열값 중 first_name만 여기 남아보기
let firstNames = [];

employees.foreach(function(item, ind) {
    firstNames.push(item.first_name);
});

console.log(firstNames);
