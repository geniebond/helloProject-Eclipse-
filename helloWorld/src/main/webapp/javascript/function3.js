// function3
// 2022-01-05 // [배열]

function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값: ${result}`);

//
function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(getMax(30, 40));
//

function getmaxVal(ary) {
    // ary 배열의 값 중에서 제일 큰값.

    for (var i = 0; i < ary.length; i++) {
        console.log(numAry[i]);
        var temp = ary[i];

        if (maxVal < temp) {
            maxVal = temp;
        }
    }
    return maxVal;
}

var maxVal = 0;
var numAry = [34, 20, 15, 8, 10, 55];
console.log(`최대값: ${getmaxVal(numAry)}`);


//최소값 구하기
function getMinVal(aryMin) {
    //ary배열에 갑중에서 제일 작은값 반환

    for (var i = 0; i < aryMin.length; i++) {

        console.log(minAry[i]);
        var minTemp = aryMin[i];

        if (minVal > minTemp) {
            minVal = minTemp;
        }
    }
    return minVal;
}

// var minVal = 100;
var minVal = Number.MAX_SAFE_INTEGER;
var minAry = [100, 40, 80, -10, 7];
console.log(`최소값: ${getMinVal(minAry)}`);