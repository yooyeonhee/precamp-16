function selectAll(checkAll)  {
     const checkboxes = document.getElementsByName('music');

    // forEach 반복문
    // 목록을 forEach 반복문을 사용하여 순회하면서
    // 각 체크박스의 checked 값을 'Select All' element의 check 값(selectAll.checked)과 동일하게 변경
    // 이렇게 하면, 'Select All' 체크박스가 선택되면, 나머지 체크박스도 모두 선택
     checkboxes.forEach((checkbox)=>{
         checkbox.checked=checkAll.checked;
   })
}