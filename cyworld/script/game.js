//psudo code
//1. 단어 입력 버튼 누름
//2. input 값을 읽는다
//3. 제시어의 끝 글자와 입력값의 첫 글자 비교
//4. 일치한다면 결과에 "정답입니다!"" 표시 후 제시어를 입력값으로 변경
//5. 다르다면 결과에 "땡!" 표시 후 제시어 변경 X

function startWord(){
    const word = document.getElementById("word").innerText
    const lastWord = word[word.length-1]
    const myWord = document.getElementById("inputText").value
    const firstWord = myWord[0]

    if(lastWord===firstWord){
        document.getElementById("gameResult").innerText = "정답입니다!"
        document.getElementById("word").innerText = myWord
        //입력란을 비워주는 기능
        document.getElementById("inputText").value = ""
    }
    else{
        document.getElementById("gameResult").innerText = "땡!"
        document.getElementById("inputText").value = ""
    }
}




lottoNum = () => {
    let num = Math.floor((Math.random() * (45 - 1)) + 1)
    return num 
}
check = () => {
    numArr = []
    while(1){
        const set = Array.from(new Set(numArr))
        if(set.length===6){
            return set
        }
        else{
            numArr.push(lottoNum())
        }
        
    }
    

}

putLottoNum = () => {
        let result = check()
        for(let i=0;i<6;i++){
            document.getElementById(`num${i+1}`).innerText = result[i]
        }
}