// 문제 : 애너그램(anagram) 판별하기
// 나열 순서가 다르지만 구성이 같은 두 단어를 '애너그램' 이라고 한다.

const str1 = 'listen';
const str2 = 'silent';

// 1. split(), sort(), join()
// split 함수의 인자로 "" 를 넣어줌으로 모든 문자를 쪼갠 뒤 sort 로 정렬, 이 후 join 으로 정렬된 문자 다시 합침
// 위 실행으로 두 단어가 같은 기준으로 정렬됨으로 애너그램 판별이 가능함.
function solve(a, b) {
    if (a.length !== b.length) return false

    return a.split("").sort().join() === b.split("").sort().join()
}
console.log(solve(str1, str2))

// 2. hash map
function solve2(a, b) {
    if (a.length !== b.length) return false
    const hashMap = {}
    for (const char of a) {
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    // {l:1, i:1, s:1, t:1, e:1, n:1} hash map(key value) 형태로 저장

    for (const char of b) {
        // 존재하지 않는 key or 해당 key 의 value 가 0이면 false return!
        if (!hashMap[char]) return false;
        // key 가 존재한다면 hashMap[char] 의 값을 -1 소거해주는 방식
        hashMap[char]--
    }
    // looping 중 key 가 없거나 0의 값을 참조하려는 순간 false!
    return true
}
console.log(solve2(str1, str2))