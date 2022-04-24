//커서 이동 => 포커스가 이동한다.
const changeFocus1 = () => {
    const p1 = document.getElementById("number1").value
    if(p1.length === 3){
        document.getElementById("number2").focus()
    }

}
const changeFocus2 = () => {
    const p2 = document.getElementById("number2").value
    if(p2.length === 4){
        document.getElementById("number3").focus()
    }
}
//전화번호가 입력되면 전송버튼 활성화
const checkValidation = () => {
    const number1 = document.getElementById("number1").value
    const number2 = document.getElementById("number2").value
    const number3 = document.getElementById("number3").value
    
    if(number1 && number2 && number3){ //(email !== "" && pw1 !== "" && pw2!== "" ) => mdn falsy
        document.getElementById("buttonAble").disabled = false;
    
    }
    // 1개라도 비어있다면 버튼 비활성화 
    else{
        document.getElementById("buttonAble").disabled = true;
        
    }
}

//인증 타이머 + 버튼 활성화
let isStarted = false

const pressedBtn = () => {
    //isStarted가 false일 경우 (타이머가 작동 중이 아닐 경우) => 코드 실행
        //실행될 때 isStarted를 true로 재할당
        //타이머가 종료되면 isStarted를 false로 재할당
    if (isStarted === false){
        isStarted = true;
        //랜덤 인증번호 생성
        const token = String(Math.floor(Math.random()* 1000000)).padStart(6, "0")
        document.getElementById("token").innerText = token;
        //버튼 누르면 인증번호 색상 변경
        //document.getElementById("token").style.color = `#${token}`;

        //버튼 누르면 타이머 시작
        let time = 3;
        //setInterval을 종료시키기 위한 변수
        let timer = null;

        timer = setInterval(function(){
            if(time>=0){
                const min = String(Math.floor(time / 60)).padStart(2, "0")
                const sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = `${min}:${sec}`
                time = time - 1
            }    
            else{
                document.getElementById("okToken").disabled = true;
                document.getElementById("token").innerText = "000000"
                document.getElementById("timer").innerText = "03:00"

                isStarted = false;
                //setInterval 종료 코드
                //피라미터 값에 해당하는 setInterval함수를 삭제
                clearInterval(timer)
            }
        },1000)
    }
    //isStarted가 true일 경우 (타이머가 작동 중일 경우) => 코드실행X
    else{
        alert("타이머가 이미 동작중입니다.")
    }

    
}

const ok = () =>{
    alert("인증이 완료되었습니다.");
    document.getElementById("okToken").innerText = "인증완료";
}

const checkAllValidation = () => {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value
    const finishToken = document.getElementById("okToken").innerText
    const selectBox = document.getElementById("selectBox").value
    const checkBox = document.querySelector('input[name="gender"]').checked;
    
    if(email && name && pw1 && pw2 && finishToken==="인증완료" && selectBox && checkBox ){ 
        document.getElementById("join").disabled = false;
    
    }
    // 1개라도 비어있다면 버튼 비활성화 
    else{
        document.getElementById("join").disabled = true;
        console.log(checkBox)
    }
}

const hi = () => {
    alert("가입 완료되었습니다.")
}