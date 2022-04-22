setTimeout(function() {
    console.log("3초가 지났습니다")
},3000)

// VM368:2 3초가 지났습니다
setInterval(function() {
    console.log("1초")},1000)

// 42VM582:2 1초

let time = 10
setInterval(function(){
    if(time>=0){
        console.log(time)
        time = time - 1
    }
},1000)
// VM384:3 10
// VM384:3 9
// VM384:3 8
// VM384:3 7
// VM384:3 6
// VM384:3 5
// VM384:3 4
// VM384:3 3
// VM384:3 2
// VM384:3 1
// VM384:3 0

let timer = 180

setInterval(function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2, "0")
        const sec = String(time%60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time-1
    }
},1000)

// 03:00
// VM1227:5 02:59
// VM1227:5 02:58