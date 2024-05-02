//1. 선택자정의
const input = document.querySelector(".board-write input");
const text = document.querySelector(".limited");
const error = document.querySelector(".error");

//2. 글자수 한계 정의
const max = 20;
//input.setAttribute(속성명, 속성값);
input.setAttribute("maxlength", max);
//text.innerText = `0 / ${max}`;
text.input = `0 / ${max}`;

//3. 실시간 글자 수 확인
input.addEventListener("input", (event) => {
  const value = event.target.value.length;
  //console.log(value);
  //4. 실시간 글자 수 삽입
  text.innerText = `${value} / ${max}`;

  //5. 글자 수 초과되면 경고 메세지
  if (value > max) {
    console.log("높습니다.");
    error.innerText = "글자수가 초과되었습니다.";
  } else {
    error.innerText = "";
  }
});
