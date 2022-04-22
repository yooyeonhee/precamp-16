let classmate = ["김성훈", "유연희"]
// undefined
classmate
// (2) ['김성훈', '유연희']
classmate[0]
// '김성훈'
classmate[1]
// '유연희'
classmate[2]
// undefined
classmate.includes("홍길동")
// false
classmate.push("홍길동")
// 3
classmate.includes("홍길동")
// true
classmate[2]
// '홍길동'
classmate.pop()
// '홍길동'
classmate.length
// 2

let developer = ["인내","창의력","구글링","협업","실력"]
// undefined
developer[4]
// '실력'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['인내', '창의력', '구글링', '협업', '실력', '커리어점프', '성공', '할수있다']

