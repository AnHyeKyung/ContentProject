// 1. 선택자 정의
const title = document.querySelectorAll(".faq-board a");
const tr = document.querySelectorAll(".faq-board tbody tr");
const count = document.querySelector(".count b");

// 6. 질문갯수 변수 저장
const trLength = tr.length / 2;
// 7. 질문갯수 텍스트 삽입
count.innerText = trLength;

// 2. 제목 클릭 이벤트 생성
title.forEach((element) => {
  element.addEventListener("click", (event) => {
    // 3. 질문에 해당되는 답변 찾기
    event.preventDefault();
    const isAnswer = event.target.parentElement.parentElement.nextElementSibling;
    console.log(isAnswer);
    // 5. 질문에 해당되는 답변을 제외한 나머지 닫기
    tr.forEach((item) => {
      item.classList.remove("--active");
    });
    // 4. 답변 열기
    isAnswer.classList.add("--active");
  });
});
