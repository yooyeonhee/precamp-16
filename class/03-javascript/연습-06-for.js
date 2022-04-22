let students=['철수', '영희', '맹구', '짱구', '유리', '훈이']
// undefined
for (let i=0; i<students.length; i++){
    console.log(students[i]+"님 안녕하세요.")
}
// VM3358:2 철수님 안녕하세요.
// VM3358:2 영희님 안녕하세요.
// VM3358:2 맹구님 안녕하세요.
// VM3358:2 짱구님 안녕하세요.
// VM3358:2 유리님 안녕하세요.
// VM3358:2 훈이님 안녕하세요.
// undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined
for(let h = 0; h<persons.length; h++){
    if(persons[h].age>18){
        console.log(persons[h].name + "님은 성인입니다.")
    }else{
        console.log(persons[h].name + "님은 미성년자입니다.")
    }
}
// VM4059:5 철수님은 미성년자입니다.
// VM4059:3 영희님은 성인입니다.
// VM4059:5 도우너님은 미성년자입니다.
// VM4059:5 말포이님은 미성년자입니다.
// VM4059:5 도비님은 미성년자입니다.
// undefined

Math.random()

0.8995668590246162
Math.random()* 100000

// 25535.986812096813
Math.floor(Math.random()* 100000)

// 80320

String(Math.floor(Math.random()* 100000))
// '60634'

String(Math.floor(Math.random()* 100000)).padStart(6, "0")
// '029456'

let token = String(Math.floor(Math.random()* 100000)).padStart(6, "0")
// undefined
token
// '022342'
token
//'022342'