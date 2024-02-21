// 문제 : 최대 수익 계산하기
// n기간 동안의 주식 가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산하기
// 주어진 기간 동안 주식 매매를 하여 얻는 이익을 계산한다

// 두 변수 초기화
// maxProfit = 0 (최대 수익, 기본 값 0 으로 시작)
// minBuyPrice = input[0] (가장 저렴한 구입 가격)

// const input = [100,200,50,30,150,250]
// input 배열에 반복문 실행
// a. 매회의 반복마다 조건문 걸기 (현재까지 가장 저렴했던 구입가와 현재시점의 가격을 비교)
// b. a를 통해 두가지의 결정
// - 현재시점의 가격이 minBuyprice 보다 클 때 => 수익 발생 maxProfit 업데이트
// - 현재시점의 가격이 minBuyPrice 보다 작을 때 => minBuyPrice 업데이트
// 반복문 종료 후 maxProfit 값 리턴

const priceFlow = [100, 200, 50, 30, 150, 10, 20];
// 시도 1
function solve(arr) {
    let maxProfit = 0;
    let minBuyPrice = arr[0];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > minBuyPrice) {
            maxProfit = arr[i] - minBuyPrice;
        }
        if (arr[i] < minBuyPrice) {
            minBuyPrice = arr[i]
        }

    }
    return maxProfit
}
console.log(solve(priceFlow))
// 그동안의 수익과 비교하는 과정이 없음으로 제일 마지막으로 낸 수익을 반환하게 됨으로 오답!

function solve2(arr) {
    let maxProfit = 0;
    let minBuyPrice = arr[0];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > minBuyPrice) {
            // Math.max(number,number,num...) max 메서드 인자들을 비교하여 제일 높은 값을 반환
            maxProfit = Math.max(maxProfit, arr[i] - minBuyPrice)
        }
        if (arr[i] < minBuyPrice) {
            minBuyPrice = arr[i]
        }

    }
    return maxProfit
}
console.log(solve2(priceFlow))
console.log(solve2([10, 20, 50, 100, 80, 250]))