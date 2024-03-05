// 문제 : 가장 긴 접두사 찾기(Longest Common Prefix)
// 주어진 배열 내 문자들의 공통되는 문자열을 찾는다.
// 예시
// let arr = ['flower','flight','flow']
// 세 문자의 공통 접두사 'fl'
// 추가로 이후 문자를 비교하여 더 긴 접두사가 있을 경우 해당 접두사로 교체해야 할 것이다. (땡 그러면 접두사가 아니지))


// 직접 풀어보자.
let arr = ['flower', 'flight', 'flow']

function solve(_arr) {
    let result = '';
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (!arr[j][i]) {
                return result
            }
            else if (j == 0) result += arr[j][i]
            else if (result[i] !== arr[j][i]) {
                return result.slice(0, -1);
            }
        }
    }
    return result
}
console.log('prefix :', solve(arr))
// 내가 짠 코드는 위와 같다 
// 각 배열의 항목만큼 & 배열의 첫번째 항목의 길이만큼 이중 for loop
// 첫번째 항목이면 첫번째 문자를 집어넣고 이후 그 문자와 비교하여 제거 할지 유지할지 결정하는 코드


// 더 좋은 코드 예제를 보며 본인의 코드와 비교해보겠다.
function solve2(_arr) {
    let result = '';
    // base condition 지정해주는 것이 베스트인 것 같다.
    // 본인은 for 문 내에서 빈 문자 예외 처리했고 굳이 for loop에서 처리할 필요가 없었다.
    if (_arr == null || _arr.length === 0) return result

    for (let i = 0; i < _arr[0].length; i++) {
        // 비교의 대상이 될 첫번쨰 항목의 단어는 새로운 변수에 할당해줌.
        const char = _arr[0][1];
        // 첫번째 항목의 단어는 비교의 대상이므로 if if if 처리하기 보다 예외적 동작에 대해 분리시키는게 더 좋은 것 같다.
        for (let j = 1; j < _arr.length; j++) {
            if (_arr[j][i] !== char) {
                // 그렇다 return 은 반환. 말그대로 for loop 이고 뭐고 그 자리에서 중단된다.
                return prefix
            }
        }
        // 그렇기 때문에 for loop 내 return 을 피해 잘 빠져나왔다면 그는 prefix 가 될 자격이 있다.
        prefix += char;
    }
    return prefix
}

// 분명 그 함수가 하고자 하는 기능에 대해 좀 더 직관적으로 생각할 필요가 있다.
// 본인은 왜 항상 문제를 꼬아서 생각하려 하는가? 아니, 그저 지식의 부족일 수도 있다.