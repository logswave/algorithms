// 문제 : 겹치는 선분의 길이
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
// 
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100
// 입출력 예
// lines	result
// [[0, 1], [2, 5], [3, 9]]	2
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8
// 입출력 예 설명
// 입출력 예 #1
// 
// 두 번째, 세 번째 선분 [2, 5], [3, 9]가 [3, 5] 구간에 겹쳐있으므로 2를 return 합니다.
// 입출력 예 #2
// 
// 겹친 선분이 없으므로 0을 return 합니다.
// 입출력 예 #3
// 
// 첫 번째와 두 번째 선분이 [3, 5] 구간에서 겹칩니다.
// 첫 번째와 세 번째 선분 [1, 5] 구간에서 겹칩니다.
// 두 번째와 세 번째 선분 [3, 9] 구간에서 겹칩니다.
// 따라서 [1, 9] 구간에 두 개 이상의 선분이 겹쳐있으므로, 8을 return 합니다.

// -100 + 100 사이 이므로 최대 배열은 200 하지만 200을 loop 하는건 비효율적
// lines 의 최대 값과 최소값을 구한다.
// 배열에 값을 저장하고 2가 반복되면 값으로 인정
function solve(lines) {
    let max = Math.max.apply(null, lines.flat());
    let min = Math.min.apply(null, lines.flat());
    let arr = new Array(max - min).fill(0)
    // 최대 최소값을 구해서 편차만큼의 배열을 생성
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            arr[j - min] += 1
        }
    }
    return arr.reduce((a, c) => c > 1 ? a + 1 : a, 0);
}
console.log(solve([[0, 2], [-3, -1], [-2, 1]]))
