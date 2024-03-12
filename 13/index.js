// 저주의 숫자

// 문제 설명
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자

// ex)
// 1=1	6=8
// 2=2	7=10
// 3=4	8=11
// 4=5	9=14
// 5=7	10=16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// 나는 for loop 을 진행하면서 10진법 수마다 3x 수가 변환된 것을 저장하려고 했다.
function solve(n) {
    let count = 1;
    for (let i = 1; i < n;) {
        i++
        count++
        while (count % 3 === 0 || String(count).includes('3')) {
            count++
        }
        console.log(i, count)
    }
    return count
}
console.log('정답', solve(40))
// for loop 조건문 상의 i++와 내부의 i++ 차이를 정확히 알 필요가 있다.

// 좀 더 나은 코드
function solution(n) {
    let i = 1 // 10진법
    let threeNum = 1 // 3x 마을의 수
    while (n > i) {
        while (threeNum % 3 === 0 || String(threeNum).includes('3')) {
            threeNum++
        }
        i++
        threeNum++
    }

    return threeNum
}
// console.log(solution(40))