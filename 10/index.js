// 문제 : 하노이의 탑
// 


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
        console.log(answer.length)
        if (answer.length % 2 == 0) {
            answer[answer.length] = [1, n % 2 + 2];
            answer[answer.length] = [n % 2 + 2, n % 2 + 1];
        }
        else {
            answer[answer.length] = [1, n % 2 + 3];
            answer[answer.length] = [n % 2 + 2, n % 2 + 3];
        }
        console.log(answer.length)
    }
    return answer;
}
console.log(solution(2))
console.log(solution(3))