// 문제 : 분수의 덧셈

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1/2 + 3/4 = [5, 4]
// 9/2 + 1/3 = [29, 6]

function solve(num1, den1, num2, den2) {
    if (den1 % den2 === 0) return [num2 * (den1 / den2) + num1, den1]
    else if (den2 % den1 === 0) return [num1 * (den2 / den1) + num2, den2]
    else return [num1 * den2 + num2 * den1, den1 * den2]
}
// console.log(solve(1, 5, 4, 5))

// 위 입출력 예시는 통과하나 반례가 존재하는 듯 하다.
// console.log(solve(1, 5, 4, 5))
// [5, 5]
// 이 후 기약분수로 만들어주는 과정이 필요하다.
// 기약분수는 최대공약수를 구함으로써 풀 수 있었다.

function solve2(num1, den1, num2, den2) {
    let result = []
    if (den1 % den2 === 0) result = [num2 * (den1 / den2) + num1, den1]
    else if (den2 % den1 === 0) result = [num1 * (den2 / den1) + num2, den2]
    else result = [num1 * den2 + num2 * den1, den1 * den2]

    if (result[0] % result[1] === 0) result = [result[0] / result[1], 1]
    else if (result[1] % result[0] === 0) result = [1, result[1] / result[0]]
    const min = result[0] > result[1] ? result[1] : result[0]

    for (let i = 0; i < min; i++) {
        if (result[0] % i === 0 && result[1] % i === 0) result = [result[0] / i, result[1] / i]
    }
    return result
}
// console.log(solve2(1, 35, 1, 55))