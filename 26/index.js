// 문제 : 다음에 올 수
// 문제 설명
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
// 
// 제한사항
// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// common의 원소는 모두 정수입니다.
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 등비수열인 경우 공비는 0이 아닌 정수입니다.

// 입출력 예
// common	result
// [1, 2, 3, 4]	5
// [2, 4, 8]	16
// 입출력 예 설명
// 입출력 예 #1
// [1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.
// 입출력 예 #2
// [2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.// 문제 : 

function solve(common) {
    let i = common[1] - common[0]
    let j = common[2] - common[1]
    if (j > i) {
        return common[common.length - 1] * i
    }
    return common[common.length - 1] + i;
}
// 특정 테스트케이스가 실패였다.
//  찾아보니 -n 의 등비수열에 대한 반례가 존재했다.
// console.log(solve([-1, 2, -4]))
function solve2(common) {
    let i = common[1] - common[0]
    let j = common[2] - common[1]
    if (j == i) return common[common.length - 1] + i;
    return common[common.length - 1] * common[1] / common[0]
}
// solve 의 경우 등차수열만 대응했고 등비수열에 대해서는 대응이 되지 않았다.
// common[1]/common[0] 으로 등비에 대해 대응해 주었다.
console.log(solve2([1, 2, 3, 4, 5]))