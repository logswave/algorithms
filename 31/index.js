// 문제 : 문자열 밀기
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
// 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때
// A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
// 
// 제한사항
// 0 < A의 길이 = B의 길이 < 100
// A, B는 알파벳 소문자로 이루어져 있습니다.
// 입출력 예
// A	B	result
// "hello"	"ohell"	1
// "apple"	"elppa"	-1
// "atat"	"tata"	1
// "abc"	"abc"	0
function solve(A, B) {
    let array = A.split("")
    let result = -1
    if (A == B) return 0
    for (let i = 1; i < array.length; i++) {
        array.unshift(array.pop())
        A = array.join("")
        if (A === B) return i
    }
    return result
}
console.log(solve('hello', 'ohell'))

// 자바스크립트 배열 메서드 unshift pop 을 활용해서 떼어내고 붙히기를 수행했다.
// 그리고 다른 풀이를 보고 현타가 왔다.
let solution = (a, b) => (b + b).indexOf(a)
// b 두개를 이어붙히고 최초로 나오는 a 의 자리수를 찾는 코드.. 영리하다.
// 이렇게 하면 for loop 으로 반복문마다 배열 뒷자리르 떼고 앞에 붙히는 과정을 할 필요가 없다.