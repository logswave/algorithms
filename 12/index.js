// 문제 : Move Zeroes
// 배열에 0을 찾아서 배열의 끝으로 이동시켜야 한다.
// 단, 배열의 순서가 바뀌어선 안되며 배열을 복사하거나 추가로 구성하지 않고 input 받은 그대로 return(in-place)해야 한다.

// Input : [0,1,0,3,12]
// Output : [1,3,12,0,0]

// 아는데로 한번 풀어보자.
const nums = [0, 0, 0, 3, 12, 0, 0, 0, 0, 1, 10, 23, 2, 0, 0]

function solve(arr) {
    // filter 함수로 input 배열 내 모든 0 제거
    const result = arr.filter((num) => num !== 0);
    // input 과 result 의 길이 차이 비교
    const zeroCount = nums.length - result.length
    // 차이만큼의 길이를 가진 0 배열 생성
    const zeroArr = new Array(zeroCount).fill(0)
    // result 에 zeroArr 추가
    return result.concat(zeroArr)
}
// 정상적으로 출력은 되지만 이는 조건에 부합하지 않는다 (Not in-place)
// 이렇게 쉬운 문제를 낼 리 없지
// 본인이 만든 함수는 새로운 배열을 return 하는 filter 함수를 통해 얻어낸 result 라는 값을 핸들링하고 뱉어낸다.
// solve(nums)
// console.log('solve', nums)
// 고로 nums의 값을 직접적으로 바꾸지 않기 때문에 조건에 부합하지 않는다.

// 그렇다면 return 하지 않고 nums 를 직접적으로 바꾸는 함수를 구현해보자.
// 자바스크립트 배열 메서드를 활용하여 풀어볼 것이다.
function solve2(_arr) {
    // 찾아낸 0의 개수
    let count = 0
    for (let i = 0; i < _arr.length - count; i++) {
        if (_arr[i] === 0) {
            _arr.splice(i, 1);
            _arr.push(0);
            count++
        }
    }
}
// solve2(nums)
// console.log('solve2', nums)

// 이 후 자료를 참고하여 투 포인터를 활용할 수 있다는 사실을 알게 되었고
// javascript 메서드가 아닌 low level style 로 구현해보자.

function solve3(_arr) {
    let j = 0;
    // i j 는 0으로 초기화
    // input 의 길이만큼 실행되는 for loop 을 구성했다
    for (let i = 0; i < _arr.length; i++) {
        // 0 이 아닐 경우에는 j 와 i 의 값의 위치를 바꿔줄 것이다.
        if (_arr[i] !== 0) {
            const zero = _arr[j];
            _arr[j] = _arr[i];
            _arr[i] = zero
            j++
        }
    }
}
solve3(nums)
console.log('solve3', nums)

// 분명 내가 직접짠 코드인데 의심스러웠다.
// 0 일때도 뭔가 해줘야 하지 않을까란 생각이 계속 들었었다.
// 하지만 다시 파고들어 이해했다.

// 0 을 만나기 전까진 j 의 값이 i를 한 템포 앞서나간다.
// 0을 만나게 되면 j 는 더이상 나아가지 않고
// i 가 0이 아닌 값을 만나게 될때까지 그자리에 정지한다.
// 그리고 만나면 그때 자리를 바꿔주고 또 다시 나아간다.
// 역시 그 다음도 0일 경우 정지하게 될 것이다.

// 모범답안과 처음으로 정확히 일치했다. 뿌듯