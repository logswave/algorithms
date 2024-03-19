// 문제 : 숨어있는 숫자의 덧셈
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.

// 입출력 예
// my_string	result
// "aAb1B2cC34oOp"	37
// "1a2b3c4d123Z"	133

// 입출력 예 #1
// "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 1 + 2 + 34 = 37 을 return합니다.
// 입출력 예 #2
// "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.

function solve(str) {
    let result = 0;
    let num = []
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) num.push(str[i])
        else if (num[0]) {
            result += parseInt(num.join(""))
            num = []
        }
    }
    return result
}
// console.log(solve('aAb01B2cC34oOp'))

// 맞는 듯 했으나 제한사항의 '000123' 과 같은 수는 없는 수로 인식해야 하기때문에 조건을 만족하지 않는다.
// 첫 글자가 0 이 아니여야한다.
// if (parseInt(str[i])) num.push(str[i]) 해당 조건문에 0도 추가를 시켜야한다.
// parseInt(0)은 if에서는 falsy 한 값.

function solve2(str) {
    let result = 0;
    let num = []
    for (let i = 0; i < str.length; i++) {
        console.log(parseInt(str[i]) === 0)
        if (parseInt(str[i]) || parseInt(str[i]) === 0) {
            num.push(str[i])
            console.log(num)
        }
        else if (parseInt(num[0])) {
            console.log(parseInt(num.join("")))
            result += parseInt(num.join(""))
            num = []
        }
        else {
            num = []
        }
    }
    return result
}

// '123' 과 같이 오로지 숫자인 경우 0의 값을 뱉는다. 숫자가 아닌경우에만 값을 더해주고 오로지 숫자일 때는 아무런 행동도 하지않는다.

function solve3(str) {
    let result = 0;
    let num = []
    for (let i = 0; i < str.length; i++) {
        console.log(parseInt(str[i]))
        if (parseInt(str[i]) >= 0) num.push(str[i])
        else if (num[0]) {
            console.log(num)
            if (num[0] != 0) result += parseInt(num.join(""))
            num = []
        }
    }
    result += parseInt(num.join(""))
    return parseInt(result) || 0
}
// console.log(solve3("a01aZ1d01a101010101"))

// 테스트 케이스 10개 중 3개의 실패 케이스가 존재한다.

// 새롭게 다시 시작해보자 다른 접근으로.
function solve4(str) {
    let result = 0;
    let i = str.split("").reduce((acc, cur) => {
        if (parseInt(cur) >= 0) {
            return acc += cur
        }
        else {
            if (acc && acc[0] !== '0') {
                result += parseInt(acc)
            }
            return ''
        }
    }, '')
    if (parseInt(i) >= 0) result += parseInt(i)
    return result || 0
}
// reduce를 이용해서 해결했다.
// 초기값 빈문자열로 시작해 숫자일 경우에 하나씩 추가한다.
// 숫자가 아닐 경우 누적된 값(문자열로 쌓인값)의 0번째 자리가 0 이 아니면 result 에 값을 누적시킨다.
// 그리고 str 가 숫자로 끝날 경우 누적값(acc)이 ''로 초기화 되지 않고 변수 i에 반환되기 때문에 result 에 저장해주는 과정을 거친다.

// 추가적으로 함수에 불필요한 조건 및 return 을 적절하게 사용하여 나름 효율적인 코드로 개선해보았다.

function solve5(str) {
    let result = 0;
    let arr = str.split("")

    const i = arr.reduce((acc, cur) => {
        if (parseInt(cur) >= 0) return acc += cur
        else if (parseInt(acc[0]) > 0) result += parseInt(acc)
        return ''
    }, '')

    if (parseInt(i[0]) > 0) result += parseInt(i)
    return result || 0
}
console.log(solve5("aAb1B2cC34oOp0123a"))

// 프로그래머스에 해당 문제에 대한 케이스 중 반례가 존재했다.
// "aAb1B2cC34oOp0123"
// 위 처럼 문자열의 마지막이 문자가 아닌 0으로 시작하는 숫자에 대한 케이스가 존재하지 않았다.
// 질문하기란에 글을 기재하긴 했으나.. 누가 보겠냐만 이번 문제는 이렇게 마무리했다.
// ps : 조건을 제대로 안읽어봤다 0으로 선행하는 숫자는 없다!
function solve6(str) {
    let result = 0;

    const i = str.split("").reduce((acc, cur) => {
        if (parseInt(cur) >= 0) return acc += cur
        else if (acc > 0) result += parseInt(acc)
        return ''
    }, '')
    if (i > 0) result += parseInt(i)
    return result || 0
}