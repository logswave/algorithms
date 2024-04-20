// 문제 : 옹알이
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
// 
// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// babbling	result
// ["aya", "yee", "u", "maa", "wyeoo"]	1
// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

function solve(babbling) {
    let list = ["aya", "ye", "woo", "ma"]
    let count = 0;
    for (let i = 0; i < babbling.length; i++) {
        let item = babbling[i]
        for (let j = 0; j < list.length; j++) {
            var regex = new RegExp(list[j], 'g');
            item = item.replace(regex, "-")
        }
        console.log(item)
        if (item.replace(/-/g, "") === '') {
            count++
        }
    }
    return count
}
// 리스트에 있는 단어를 소거 시킨 후에 남아있는 조합이 어떨결에 발음할 수 있는 단어가 되는 문제가 있었다
// 예를들면 wyeoo
// 그래서 - 로 치환해서 새로운 단어 조합을 만들 수 없게 했다.
console.log(solve(["aya", "yee", "u", "maa", "wyeoo"]))
// console.log(solve(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))
// 다른 사람의 풀이를 찾아 보니 정규식으로만 풀어냈다.

function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;
    })

    return answer;
}

// 역시 정규식에 충실할 필요가 있다고 다시금 느낀다.