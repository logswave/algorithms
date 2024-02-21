// 문제 : 팰린드롬 / 회문 (palindrome) 판별하기
// 팰린드롬이란 앞으로 읽으나 뒤로 읽으나 같은 문자열을 말한다.
// 예) eye level
// 1. 추가 문자열 활용
// 문자열만큼 looping 해서 역순으로 indexing 하여 단어를 재조립 후 초기 값과 비교!
function solve(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
        console.log(reversed)
    }
    return reversed === str
}
console.log(solve('zdzdz'))
// 2. Two Pointer 활용
// 처음과 끝 양쪽에서 각각 포인터를 두고 단어 길이의 절반만큼 looping
function solve2(str) {
    const len = str.length
    const middle = Math.floor(len / 2);
    for (let i = 0; i <= middle; i++) {
        if (str.charAt(i) !== str.charAt(len - 1 + i)) {
            return false;
        }
        return true;
    }
}
console.log(solve2('zdzdz'))