// 문제 : 특이한 정렬
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로
// 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10,000
// 1 ≤ numlist의 원소 ≤ 10,000
// 1 ≤ numlist의 길이 ≤ 100
// numlist는 중복된 원소를 갖지 않습니다.

// 접근
// 1. while loop 으로 차곡차곡 result 정렬.
// 2. result.length 가 numlist.length 와 동일할 경우 탈출

function solve(numlist, n) {
    let array = numlist.sort((a, b) => b - a)
    let result = [];
    let i = 0
    while (array.length > result.length) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] - i === n) {
                result.push(array[j])
            }
            else if (array[j] + i === n) {
                result.push(array[j])
            }
        }
        i++
    }
    return result
}
console.log(solve([1, 2, 3], 2))