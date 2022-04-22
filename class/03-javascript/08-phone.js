//커서 이동 => 포커스가 이동한다.
const changeFocus1 = () => {
    const p1 = document.getElementById("p1").value
    if(p1.length === 3){
        document.getElementById("p2").focus()
    }

}
const changeFocus2 = () => {
    const p2 = document.getElementById("p2").value
    if(p2.length === 4){
        document.getElementById("p3").focus()
    }
}