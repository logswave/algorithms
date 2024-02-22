// 문제 : 올바른 괄호 판별하기 (Valid Parentheses)
// 괄호가 올바르게 paired 되었다는 것은 ( [ { 등의 괄호가
// 열렸다면 반드시 ) ] } 로 닫혀야 한다는 의미다.
// 올바른 괄호
// - ()()
// - ([{}])
// 올바르지 못한 괄호
// - ()(}
// - ([{])}
// 열린 괄호와 닫힘 괄호의 갯수가 동일해야하며 각 쌍의 괄호의 종류도 일치 해야한다.
// 이는 스택 구조이다.

// 내가 시도한 방법
// 첫번째 + i 와 마지막 - i 가 동일해야함이 문제의 핵심이라고 생각하고 투 포인터 방식으로 접근했다.
const input = '[[{(())}]]'
function mySolve(_input) {
    const len = _input.length / 2;
    // length 절반만큼만 looping
    for (let i = 0; i < len; i++) {
        if (_input[i] === '[' && _input[_input.length - i - 1] !== ']' || // 투 포인터의 짝이 안맞을 경우
            _input[i] === '(' && _input[_input.length - i - 1] !== ')' || // 투 포인터의 짝이 안맞을 경우
            _input[i] === '{' && _input[_input.length - i - 1] !== '}' || // 투 포인터의 짝이 안맞을 경우
            _input[i] !== '[' && _input[i] !== '(' && _input[i] !== '{' // 닫힘이 먼저 올 경우
        ) return false
    }
    return true
}
console.log(mySolve(input))
// 정상적으로 동작!!

// stack 구조를 활용한 방법
function solve(input) {
    const stack = []
    for (const char of input) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char) // 여는 괄호일 경우 스택에 저장
        } else {
            const lastChar = stack.pop(); // 닫는 괄호일 경우 스택 제일 마지막 항목을 꺼내서 비교
            if ((char === '{' && lastChar !== '}') || (char === '[' && lastChar !== ']') ||
                (char === '(' && lastChar !== ')')) return false
        }
    }
    return stack.length === 0 // input 길이 만큼 looping 을 끝내고 stack 이 비어있으면 true!
}
// 나는 투 포인터를 활용했지만 스택 구조를 활용하여 푸는 방법도 있었다.
// push() pop() 을 이용해서 마지막에 항목을 추가하고 마지막 항목을 다시 꺼내는 것이 신선하고 똑똑한 방법인 것 같다!