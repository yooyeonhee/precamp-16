1+1
// 2
1+"1"
// '11'
"안녕"+"반가워"
// '안녕반가워'
!true
// false
"123"===123
// false
"123"==123
// true

if(1+1===2){
    console.log("정답입니다.")
} else{
    console.log("틀렸습니다.")
}
// VM811:2 정답입니다.
// undefined
if(true){
    console.log("정답입니다.")
} else{
    console.log("틀렸습니다.")
}
// VM863:2 정답입니다.
// undefined
if(false){
    console.log("정답입니다.")
} else{
    console.log("틀렸습니다.")
}
// VM907:4 틀렸습니다.
// undefined
const password1 = "12345"
undefined
const password2 = "55"
undefined
if(password1===password2){
    alert("비밀번호가 일치합니다.")
}else{
    alert("비밀번호가 일치하지 않습니다.")
}

const profile ={
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined

if(profile.age>=20){
    console.log("성인입니다.")
}else if(8<=profile.age && profile.age<=19){
    console.log("학생입니다.")
}else{
    console.log("어린이입니다.")
}
// VM2130:4 학생입니다.

// 코드 최적화
if(profile.age>=20){
    console.log("성인입니다.")
}else if(8<=profile.age){
    console.log("학생입니다.")
}else if(profile.age>=0){
    console.log("어린이입니다.")
}else{
    console.log("잘못된 입력입니다.")
}