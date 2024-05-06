// 문제 : 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
// 
// 제한사항
// dots의 길이 = 4
// dots의 원소의 길이 = 2
// -256 < dots[i]의 원소 < 256
// 잘못된 입력은 주어지지 않습니다.

function solve(dots) {
    return (Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]) - Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0])) * (Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]) - Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1]))
}
console.log(solve([[1, 1], [2, 1], [2, 2], [1, 2]]))