// 문제 : 합성수 찾기

function solve(n) {

    let result = 0;
    for (let i = 3; i <= n; i++) {
        let count = 2;
        let j = 2;
        while (j < i) {
            console.log(i, j)
            if (i % j === 0) {
                console.log('나머지', i % j === 0)
                count++
                break;
            }
            j++
        }
        if (count === 3) {
            result++
        }
    }
    return result
}
console.log(solve(10))

// 첫번쨰로 성공시킨 worst practice 
// 불필요한 코드를 개선시켜보자.

function solve(n) {
    let result = 0;
    for (let i = 3; i <= n; i++) {
        let j = 2;
        while (j <= i / 2) {
            if (i % j === 0) {
                result++
                break;
            }
            j++
        }
    }
    return result
}

// count 변수를 굳이 따로 둘필요가 없었다.
// 또한 합성수를 판단함에 있어 j 값이 i 값의 절반을 넘어가면 더이상 검증할 필요가 없으므로 i / 2 로 불필요한 반복 줄임