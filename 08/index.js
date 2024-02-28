// 문제 : 두 객체 비교하기
// 실제로 회사에서 두객체를 비교하기 위해 유틸리티 함수를 만들어서 사용한 기억이 있다.
// 그때의 방법과 비교해보면서 풀어봐야겠다.

const obj1 = {
    a: "a",
    b: 1,
    C: ["a", "b", "c"],
    d: {
        e: null,
        f: -1
    }
}
const obj2 = {
    a: "a",
    b: 1,
    C: ["a", "b", "c"],
    d: {
        e: null,
        f: -1
    }
}

// 1. JSON.stringify
// 자바스크립트 내장 메서드인 JSON.stringify 는 해당 객체를 문자열로 변환해준다.
// +ps 내장메서드와 빌트인함수 두 단어 모두 의미는 비슷하지만 뉘앙스의 차이가 있다.
// 내장메서드는 말그대로 js 내에 내장되어있는 함수를 말하고 빌트인 함수는 '전역' 에서 사용됨을 강조한다. 
function solve(objA, objB) {
    let a = JSON.stringify(objA);
    let b = JSON.stringify(objB);
    // string 으로 변환만 할 경우 프로퍼티의 순서가 달라질 경우 올바른 판별이 불가능하다.
    const result = a.split("").sort().join("") === b.split("").sort().join("")
    // 각 문자를 분리하여 배열에 담은 후(split) 정렬하여(sort) 다시 붙힌다.(join)
    // 온전한 객체 형태가 아니지만 정확한 값을 비교할 수 있는 상태가 될 것이다.
    return result
}
console.log(solve(obj1, obj2))
// split sort join 으로 정렬하는 방법이 창의적인것 같다. 꽤나 응용할 곳이 많아 보인다.


function solve2(objA, objB) {
    // 두 객체 존재 여부, 타입 검증, 길이 검증
    const checkObjects = (objA && objB && typeof objA === 'object' && typeof objB === 'object')
    if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
        // reduce 함수 사용 (()=>, 초기 값)
        return Object.keys(objA).reduce((equal, key) => {
            return equal && solve2(objA[key], objB[key])
        }, true)
    } else {
        return objA === objB
    }
}
console.log(solve2(obj1, obj2))
// reduce 함수는 array 메서드 이다. 배열의 각 요소 마다 콜백 함수인 첫번째 인자를 실행하고 누적된 값을 가지고 있는다.
// 흔히 많이 사용되는 map()과의 차이점 
// reduce() 는 배열의 요소를 순회하며 보통 하나의 단일 값을 반환하고 map은 배열의 각 요소를 변형시켜 새로운 배열을 반환
// 또한 reduce 는 순회하기 전 초기값을 정의할 수 있다.
