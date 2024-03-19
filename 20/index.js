// 문제 : 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// n	result
// 10	30
// 4	6


// 쉬운 문제이나 어떻게 푸는 지가 관건이겠다.
// reduce를 쓸것인가?
// loop 를 돌리는 것이 정석일진데
function solve(n) {
    let arr = [...new Array(n)] // 아니 굳이?
    return result
}
// n 개의 배열을 만들어서 음..
// 뭔가 찝찝하다

// 다른 쪽으로 머리를 굴려보자
// 우선 1 ~ 10까지 합은 55
// 1~ 100까지는 5050 이다.
// 1 ~ 10 까지 짝수 합은 30
// 나름의 규칙을 찾아보자
function solve2(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) count += i
    return (count + n / 2) / 2
}
console.log(solve2(5))
// 테스트 케이스 하나가 틀리다.
// 홀수일때 소수점이나온다.

function solve3(n) {
    let count = 0;
    let cut = n % 2 === 0 ? n : n - 1
    for (let i = 1; i <= cut; i++) count += i
    return (count + cut / 2) / 2
}
console.log(solve2(5))

// 소수점에 대한 예외처리

// 문제를 풀고 다른 사람 풀이를 참고했다.

function solve4(n) {
    var answer = 0;
    for (i = 2; i <= n; i += 2) {
        answer += i
    }
    return answer;
}
// ...
// 내 풀이는 상당히 멍청했다.
// 이정도면 억지로 꼬아서 푼 사람인 것 같다.
// 제발 쉽게 생각하자 제발.
// 아니 쉽게 푸는 것 같다면 그 사람이 잘하는 걸 지도..