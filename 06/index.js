// 문제 : 이진 탐색 (Binary Search)
// - 정렬된 리스트에 사용되는 탐색 알고리즘
// - 리스트에서 탐색범위를 절반씩 좁혀가며 특정한 값을 찾을 때 사용
// 속도가 빠르고 효율적 O(log n)

function solve(arr, target) {
    let low = 0; // 배열의 가장 첫 부분
    let high = arr.length - 1 // 배열의 가장 끝 부분

    // 첫 부분과 끝 부분이 교차되기 전까지 looping 한다.
    while (low <= high) {
        let middle = Math.floor((low + high) / 2) // 배열의 중단부 
        if (target < arr[middle]) high = middle - 1 // 찾고자 하는 수가 중단부보다 낮을 경우 위를 소거하는 코드
        else if (target > arr[middle]) low = middle + 1 // 찾고자 하는 수가 중단부보다 높을 경우 아래를 소거하는 코드
        else return middle // 위도 아래도 아닐 시 중단부 == 찾고자 하는 수!
    }
    return -1
}

console.log(solve([10, 20, 30, 40, 55, 70], 55));
console.log(solve([10, 20, 30, 40, 55, 70], 45));

// 이진 탐색 쉽고 효율적인 것 같다 실제로 js 배열 탐색하는 메서드에서 많이 사용하는 알고리즘 일까?
// 자문자답 : js 배열 메서드에서는 이진 탐색을 사용하지 않고 모두 선형 탐색을 수행한다.
// 선형 탐색은 첫 부분부터 끝 부분까지 순차 탐색한다.
// 결과적으로 선형탐색보다 이진 탐색이 빠르게 요소를 찾아낸다.