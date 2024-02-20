// 문제 : array 내 중복 아이템을 삭제하기

const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 1. Set()
// Set 객체는 중복을 허용하지 않음.
// Set 객체를 스프레드 연산자를 활용하여 array로 변환함
// const solve = [...new Set(nums)];
// console.log(solve);


// 2. indexOf()
// indexOf array 함수 활용
// indexOf 함수는 인자의 값이 배열에 몇번째에 있는 지 찾는다
// 최초의 값만 찾고 이후 값은 찾지 않는다.
// const solve = nums.filter((item, idx) => idx === nums.indexOf(item))
// console.log(solve)
// filter 함수를 통해 순회하면서 해당하는 idx 의 item 값이 indexOf : 최초의 값인지 아닌지 판단해서 return 하도록

// 3. caching / frequency map
// loop 을 통해 미리 지정된 caching object에 존재 여부를 확인한다.
// function solve(arr) {
//     const uniqueElements = {};
//     const result = [];
//     for (let element of arr) {
//         if (!uniqueElements[element]) {
//             result.push(element)
//         }
//         uniqueElements[element] = element
//     }
//     console.log(uniqueElements)
//     return result;
// }
// console.log(solve(nums))
// for 구문을 통해 nums 를 순회하며 uniqueElements 객체에 해당 key의 값이 존재하지 않으면 result 배열에 추가
// 매번 uniqueElements 객체의 key value에 item 저장
