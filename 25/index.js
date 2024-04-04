// 문제 : 연속된 수의 합
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
// 입출력 예
// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]

// 처음엔 for loop 을 돌리려 했으나
// 규칙이 보였다.
// total/num 를 할 경우 그 배열의 중앙지점을 찾을 수 있었다.
function solve(num, total) {
    let i = Math.round(total / num) - Math.floor(num / 2)
    return new Array(num).fill(0).map((el, index) => { return i + index });
}
console.log(solve(5, 15))
// 정답!!
// 그리고 비슷하지만 다른 해답을 찾아보았다.
function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2 // 올림 내림 과정을 메서드를 사용하지 않고 찾아내는 과정인 것 같다.
    return Array(num).fill().map((_, i) => i + a)
}

// 별거 아니지만 규칙을 찾아내고 단순무식한 방법에서 한 꺼풀 벗어난 것 같아 뿌듯하다.