// 문제 : 
// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// image.png
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

// board
// [[0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]
// [0, 0, 1, 0, 0]
// [0, 0, 0, 0, 0]]
// 안전한 구역 16

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 1) {
                if (i != 0 && j != 0) arr[i - 1][j - 1] = 2
                if (i != 0) arr[i - 1][j] = 2
                if (i != 0 && j != arr[i].length - 1) arr[i - 1][j + 1] = 2
                if (j != 0) arr[i][j - 1] = 2
                if (j != arr[i].length - 1) arr[i][j + 1] = 2
                if (i != arr[i].length - 1 && j != 0) arr[i + 1][j - 1] = 2
                if (i != arr[i].length - 1) arr[i + 1][j] = 2
                if (i != arr[i].length - 1 && j != arr[i].length) arr[i + 1][j + 1] = 2
            }
        }
    }

    return arr.flat().filter((element) => element == 0).length
}

console.log(solve([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]))
// 이렇게 밖에 할 수 없었을까..
// 더 나은 코드를 보고 이해하는 부분에 한해서 몇가지 개선했다.
// 배열을 굳이 다시 for loop 할 필요없이 한겹 벗겨낸 뒤 계산하면 된다는 사실.(flat()을 활용했다.)
// 배열을 굳이 새로운 배열로 복사 하지 않아도 된다는 점. (폭탄주변은 2로 하면 된다.)
// 아무래도 if 문이 너무 불편한데..

// best practice 
function solution(board) {

    let outside = [[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
            ? false : safezone++;
    }));

    return safezone;
}
// forEach 를 이중 순회하는 것까지만 이해가 간다.
// 나중에 다시 파먹어야겠다. 이해할 날이 오기를..