// sample.js

// 22.01.05 수업 자리 배치도 만들기

var memNum = window.prompt('입장객은 몇명?');
var colNum = window.prompt('한줄에 앉을 사람?');
var i, j;
var cnt = 0;
// 가로줄 좌석
// 총 56명을 / 5명씩 가로로 앉습니다. 
// 56 / 5 => 11.2

var rowNum = Math.ceil(memNum / colNum);
//해당 math는 나누고 올림을 해줍니다. 
for (var i = 1; i <= memNum; i++) {
    for (var j = 1; j <= colNum; j++) {
        //var rowNum = memNum / colNum;
        document.write(`<span> 좌석 ${i} - ${j}</span>`);
        //if (i % colNum == 0) {
        cnt++;   
        console.log(cnt, memNum);
          if(cnt == memNum){
            break;
          }  
        }
        document.write('<br>');
    }
    document.write();
//}


/////



// document.write('<table>');
// for (var i=0; i<memNum; i++) {
//     document.write('<tr>');
//     for (var j=1; j<=colNum; j++) {
//         seatNo = i * colNum + j;
//         if (seatNo > memNum) break;
//         document.write('<td>좌석 ' + seatNo + '</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');






// 열 행 조합