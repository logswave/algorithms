// 문제 : 나선형 매트릭스 (Spiral Matrix)
// 2D array / 2차원 배열 순회 문제
// m x n 사이즈의  매트릭스 element를 나선형 모양으로 순회
// -----
// 1 2 3 
// 4 5 6
// 7 8 9
// -----
// 예제
// input : [[1,2,3],[4,5,6],[7,8,9]]
// output: [1,2,3,6,9,8,7,4,5]
// 문제 접근
// 1. 4곳의 코너 포인터를 각가 변수에 저장 및 초기화
// 2. top left 에서 시작, 첫번째 row 왼쪽 오른쪽으로 순회 (순회가 끝나면 top 포인터 +1)
// 3. right top 코너에서 시작, 맨우측 위 -> 아래로 순회 (순회가 끝나면 right 포인터 -1)
// 4. right bottom 코너에서 시작 맨우측 오른쪽 -> 왼쪽 순회 (순회가 끝나면 bottom 포인터 -1)
// 5. left 포인터에서 시작, 왼쪽 -> 오른쪽으로 순회  (left 포인터 +1)

function solve(matrix) {
    const result = [];
    let left = 0;
    let right = matrix[0].length - 1
    let top = 0;
    let bottom = matrix.length - 1
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]) // [1,2,3] [5]
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][bottom]) // [6,9]
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]) // [8,7]
            }
        }
        bottom--;
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]) // [4]
            }
        }
        left++;
    }
    return result
}
console.log(solve([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// (0,0)L T (2,2)R B 형태의 좌표 포인터를 설정하고 해당 좌표를 옮겨가며 2차원 배열 input 의 값을 뽑아내서 push 하는 방법
// 꽤 헷갈리는 문제였다.