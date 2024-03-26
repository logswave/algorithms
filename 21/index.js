// 문제 : 배열의 평균 값

function solve(num) {
    return num.reduce((acc, cur) => { return acc + cur }, 0) / num.length;
}