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
        document.getElementById("token").style.color = `#${token}`;

        //버튼 누르면 타이머 시작
        let time = 180;
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