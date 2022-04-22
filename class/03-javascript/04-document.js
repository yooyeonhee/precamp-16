function changGreeting(){
    document.getElementById("greeting").innerText = "반갑습니다."
}

function readValue(){
    //input 데이터 타입 상관없이 str로 저장됨..?
    let inputValue = document.getElementById("inputData").value
    document.getElementById("greeting").innerText = inputValue
    document.getElementById("inputData").value = ""

}