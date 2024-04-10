// 문제 : 다항식
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.// 제한사항
// 0 < polynomial에 있는 수 < 100
// polynomial에 변수는 'x'만 존재합니다.
// polynomial은 양의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 항과 연산기호 사이에는 항상 공백이 존재합니다.
// 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
// 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.// " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.// 0으로 시작하는 수는 없습니다.// 문자와 숫자 사이의 곱하기는 생략합니다.// polynomial에는 일차 항과 상수항만 존재합니다.// 계수 1은 생략합니다.// 결괏값에 상수항은 마지막에 둡니다.
// 0 < polynomial의 길이 < 50
// 입출력 예
// polynomial	result
// "3x + 7 + x"	"4x + 7"
// "x + x + x"	"3x"
// 입출력 예 설명
// 입출력 예 #1// "3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.
// 입출력 예 #2// "x + x + x"에서 동류항끼리 더하면 "3x"입니다.

function solve(polynomial) {
    let array = polynomial.split(" ")
    let integer = 0;
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("x")) {
            if (array[i].replace("x", "") == "") x++
            else x += parseInt(array[i].replace("x", ""))
        } else if (array[i] !== '+') integer += parseInt(array[i])
    }
    if (x && integer) return `${x !== 1 ? x : ''}x + ${integer}`
    else if (x && !integer) return `${x !== 1 ? x : ''}x`
    else if (!x && integer) return `${integer}`
    return ''
}
// console.log(solve("x + 1"))
// 쉬운듯했는데 x의 값이 1일 경우 1x 가 아닌 x 를 출력해야하고
// 정수와 x 의 값 존재 유무에 따라 + 가 있을 수도 없을 수도 있다.
// 반례 처리를 하다보니 코드가 지저분해진 느낌

// 다른 풀이를 참고하니 split 으로 공백을 할 필요가 없지
// 무조건 덧셈이기 때문에 + 로 나눴으면 됐다.
function solve2(polynomial) {
    let array = polynomial.split(" + ")
    let integer = 0;
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("x")) {
            if (array[i].replace("x", "") == "") x++
            else x += parseInt(array[i].replace("x", ""))
        } else integer += parseInt(array[i])
    }
    if (x && integer) return `${x !== 1 ? x : ''}x + ${integer}`
    else if (x && !integer) return `${x !== 1 ? x : ''}x`
    else if (!x && integer) return `${integer}`
    return ''
}
//
// console.log(solve2('3x + 2x + 7'))