// 문제 : 순열 (Permutations)
// 알고리즘 : 주어진 n 엘레멘트들의 모든 경우의 수를 계산하는 방법 / O(n!) 시간 복잡도
// 백트래킹 (backtracking) / DFS 활용하여 문제 접근

// 백트래킹 패턴
// a. 반복 - 주어진 input elements 에 반복문 돌리기
// b. 선택 - 탐색타깃을 설정/선택을 통해 element 순서 교체
// c. 탐색 - DFS를 활용해 탐색 실행
// d. 선택취소 - 선택 과정 다시 복구하기 (undo)


// 1 [a,b,c]
// 2 [a,b,c] - [b,a,c] - [c,b,a]
// 3 [[a,b,c],[a,c,b]] - [[b,a,c][b,c,a]] - [[c,b,a],[c,a,b]]
// 4 'result = 6'
const input = ['a', 'b', 'c']

function solve(arr) {
    const result = []

    // DFS
    const dfs = (i, arr) => {
        // base condition
        if (i == arr.length) {
            return result.push([...arr])
        }
        for (let j = i; j < arr.length; j++) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            // dfs
            dfs(i + 1, arr);
            // swap back
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    dfs(0, arr);
    return result;
}

console.log(solve(['a', 'b', 'c', 'd']))

// 깊이 우선 탐색 (Depth-First-search) 이란?
// 깊이 우선 탐색은 맹목적 탐색방법의 하나로
// 탐색트리의 최근에 첨가된 노드를 선택하고
// 이 노드에 적용 가능한 동작자 중 하나를 적용하여
// 트리에 다음 수준의 한 개의 자식노드를 첨가하며
// 첨가된 자식 노드가 목표노드일 때까지 앞의 자식 노드의 첨가 과정을 반복해 가는 방식이다.

// 이해가 되지 않는다.
// i j 0 0 일때 abc
// i j 0 1 일떄 a 와 b swap bac
// i j 0 3 일때 a 와 c swap cba
// 이후로 이해 불가능.
// 추가 학습 필요