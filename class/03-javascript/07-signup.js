const checkValidation = () => {
    console.log("함수 작동됨")
    // 이메일의 값을 가져와 변수에 할당
    const email = document.getElementById("email").value
    // 비밀번호의 값을 가져와 변수에 할당
    const pw1 = document.getElementById("pw1").value
    // 비밀번호 확인의 값을 가져와 변수에 할당
    const pw2 = document.getElementById("pw2").value

    // 3개의 변수에 담긴 값이 모두 비어있지 않으면 버튼 활성화
    if(email && pw1 && pw2){ //(email !== "" && pw1 !== "" && pw2!== "" ) => mdn falsy
        document.getElementById("btn").disabled = false;
        //setAttribute(속성,값)
        document.getElementById("btn").setAttribute("style","border: 3px solid blue")
    }
    // 1개라도 비어있다면 버튼 비활성화 
    else{
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").setAttribute("style","background-color: none")
    }
}