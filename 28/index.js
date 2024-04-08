// 문제 : 최빈값
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000
// 입출력 예
// array	result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	-1
// [1]	1

function solve(array) {
    let result = 0;
    let max = 0;
    let stack = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) count++
        }
        if (count > stack) {
            stack = count
            max = count
            result = array[i]
        }
        else if (count == stack && result !== array[i]) {
            max = -1
            result = -1
        }
    }
    return result
}
// console.log(solve([1, 2, 3, 3, 3, 4]))
// 너무 찝찝한데..
// 시간복잡도는 O(제곱n) : 오더 엔 제곱
// 다른 풀이를 보니 js 메서드를 많이 사용했다.
// 다른 방법으로도 풀어봐야지
function solve2(array) {
    const set = [...new Set(array)]
    const countArr = set.map((item) => array.filter((el) => el == item).length)
    const max = Math.max.apply(null, countArr)
    const maxDup = countArr.filter((el) => el === max)
    if (maxDup.length >= 2) return -1
    return set[countArr.indexOf(max)]
}
// console.log(solve2([1, 2, 3, 3, 4, 4, 5, 5, 5]))
// 뭔가 js 메서드를 최대한 활용해서도 풀어보았는데 생각보다 시간이 오히려 적게 들었다?