// 문제 : 하노이의 탑
// 


// 아래 예제는 모두 틀렸다.
// 2 = [1,2]
// // [[1,2],[1,3],[2,3]

// 3 = [1,3]
// // [[1,3],[1,2],[3,2],[1,3],[2,3]

// 4 = [1,2]
// [[1,2],[1,3],[2,3],[1,2],[3,2],[1,3],[2,3]

// 5 = [1,3]
// [[1,3],[1,2],[3,2],[1,3],[2,3],[1,2],[3,2],[1,3],[2,3]]

function solution(n) {
    var answer = [[1, n % 2 + 2]];
    while (answer.length <= 2n) {
        if (answer.length % 2 == 0) {
            answer[answer.length] = [1, n % 2 + 2];
            answer[answer.length] = [n % 2 + 2, n % 2 + 1];
        }
        else {
            answer[answer.length] = [1, n % 2 + 3];
            answer[answer.length] = [n % 2 + 2, n % 2 + 3];
        }
    }
    return answer;
}
// 여기까지가 멍청한 나의 불찰
// 분명 하나씩 옮긴다고 했는데 엉뚱한 것을 구현하고 있었다.
// 한참을 고민한 끝에 결국 블로그를 참조했다.

function solve2(n) {
    const move = (n, from, to) => {
        console.log(n, '번원반을 ', from, '에서', to, '로 이동')
    }
    // from a
    // via b
    // to c
    const hanoi = (n, from, to, via) => {
        console.log(n, from, to, via)
        if (n === 1) {
            move(n, from, to)
        } else {
            hanoi(n - 1, from, via, to) // point 1
            move(n, from, to)// point 2
            hanoi(n - 1, via, to, from) // point 3
        }
    }
    return hanoi(n, 'a', 'c', 'b')
}
console.log(solve2(3))
// 결과는 경이로웠다.
// 분명 복잡한 구조였고 패턴이 잘 보이지 않는 다고 생각했는데 그에 비해 너무도 처참하게 간결한 코드였다.

// 3을 예로 들면
// hanoi(3, 'a', 'c', 'b') nftv으로 첫 입력이 들어왔다.
// 3 은 1이 아니기 때문에 (point 1)
// hanoi(3 - 1, 'a', 'b', 'c') nfvt
// 2 도 1이 아니기 때문에 (point 1)
// hanoi(2 - 1 , 'a', 'c', 'b') nfvt
// n == 1 일치
// move(1, a, b) // 1 번 원반 a 에서 c 로 출력

// 이 후
// hanoi(2 - 1 , 'a', 'c', 'b') 아래의 move(2, from, to) (point 2) 실행
// move(2,a,b)
// 2번 원반을 a에서 b로 이동 출력

// 이 후
// 마지막 point 3
// hanoi(2 - 1, 'c', 'b', 'a') nvtf
// n == 1 일치 
// move (1,c,b) 1번 원반 c 에서 b로 출력
// 이렇게 한 사이클이 수행됨

// 3 a c b
// 2 a b c
// 1 a c b
// 1 번원반을  a 에서 c 로 이동
// 2 번원반을  a 에서 b 로 이동
// 1 c b a
// 1 번원반을  c 에서 b 로 이동
// 3 번원반을  a 에서 c 로 이동
// 2 b c a
// 1 b a c
// 1 번원반을  b 에서 a 로 이동
// 2 번원반을  b 에서 c 로 이동
// 1 a c b
// 1 번원반을  a 에서 c 로 이동
// 위와 같은 패턴으로 실행됨