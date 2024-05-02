//게시물 갯수를 처리하는 함수
const postNumber = (tableName, countElement, isDivide = false) => {
  const Tr = document.querySelectorAll(`${tableName} tbody tr`);
  const count = document.querySelector(count);
  let trLength;
  if (isDivide) {
    trLength = tr.length / 2; //tr갯수/2
    //console.log("나누기 하겠습니다");
  } else {
    trLength = tr.length; //tr갯수
    //console.log("나누기 하지 않겠습니다.");
  }
  // console.log(trLength);
  count.innerText = trLength; //총게시물수 반영
};

//FAQ게시판 기능 함수
const Faq = () => {
  const title = document.querySelectorAll(".faq-board a"); //링크
  //const tr = document.querySelectorAll("faq.-board tbody tr");

  postNumber(".faq-board", ".count", true);

  title.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const isAnswer = event.target.parentElement.parentElement.nextElementSibling;
      console.log(isAnswer);
      tr.forEach((item) => {
        item.classList.remove("--active");
      });
      isAnswer.classList.add("--active");
    });
  });
};
const Faqboard = () => {
  const FreeboardTr = document.querySelectorAll(".free-board tbody tr");
  const count = document.querySelector(".count2 b");

  //postNumber(tr선택자, 카운트된텍스트 삽입할 선택자)
  postNumber(freeboardTr, count, false);
};

Faq();
//자유게시판기능
const Freeboard = () => {
  //postNumber(tr선택자, 카운트된텍스트 삽입할 선택자)
  postNumber("free-board", "count2");
};

Faq();
Freeboard();
