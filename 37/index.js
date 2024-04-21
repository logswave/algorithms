// 문제 : 치킨 쿠폰
//프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
//
//제한사항
//chicken은 정수입니다.
//0 ≤ chicken ≤ 1,000,000
//입출력 예
//chicken	result
//100	11
//1,081	120

function solve(chicken) {
    let coupon = chicken
    let service = 0
    while (coupon >= 10) {
        service += parseInt(coupon / 10) // 108 118
        coupon = parseInt(coupon % 10 + coupon / 10) // 19
    }
    return parseInt(chicken * 0.11111)
}

console.log(solve(1081))
// 다른 풀이를 참고했다.
// 짧은코드로 풀어낸 사람들은 주문한 치킨 수 / 서비스 = 11.1111111% 라는 점을 활용해서 풀었다.
// 이런 식으로 말이지

const solve2 = (chicken) => parseInt(chicken * 0.1111111111)
