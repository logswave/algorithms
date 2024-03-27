// 문제 : 특정 문자 제거

// 문제 설명
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// 
// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// letter은 길이가 1인 영문자입니다.
// my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
// 대문자와 소문자를 구분합니다.
// 입출력 예
// my_string	letter	result
// "abcdef"	"f"	"abcde"
// "BCBdbe"	"B"	"Cdbe"
function solve(my_string, letter) {
    // 문자열을 배열로 변환
    let charArray = my_string.split("");

    // 문자열에서 해당 문자를 찾아 제거
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === letter) {
            charArray.splice(i, 1);
            i--; // splice()로 요소를 제거하면 배열의 인덱스가 변경되므로 i를 감소시켜야 합니다.
        }
    }

    // 제거된 문자열을 다시 문자열로 결합하여 반환
    return charArray.join("");
}

console.log(solve('abcdef', 'f'));
