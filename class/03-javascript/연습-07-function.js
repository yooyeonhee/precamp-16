function hello(name){
    return name
}
// undefined
hello("유연희")
// '유연희'
let students=['철수', '영희', '맹구', '짱구', '유리', '훈이']
// undefined
function greetingFriend(arr){
    for(let i=0; i<arr.length; i++){
        console.log(`${arr[i]}님 반갑습니다.`)
    }
}
// undefined
greetingFriend(students)
// VM1265:3 철수님 반갑습니다.
// VM1265:3 영희님 반갑습니다.
// VM1265:3 맹구님 반갑습니다.
// VM1265:3 짱구님 반갑습니다.
// VM1265:3 유리님 반갑습니다.
// VM1265:3 훈이님 반갑습니다.


//함수선언식 / 함수 표현시 / 화살표 함수 
// 화살표 함수를 실무에서 가장 많이 사용
