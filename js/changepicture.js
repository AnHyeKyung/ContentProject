//설계
//1. 선택자 정의
const button = document.querySelectorAll(".pictures button");
const big = document.querySelector(".pictures .bigsize img");

//2. 버튼에 이벤트 생성
button.forEach((element) => {
  element.addEventListener("click", (event) => {
    //3. 클릭한 버튼의 img태그의 src값을 기억
    const isSrc = event.target.getAttribute("src");
    //console.log(isSrc);

    const isAlt = event.target.getAttribute("alt");
    //console.log(isAlt);
    button.forEach((item) => {
      item.classList.remove("--active");
    });

    event.target.parentElement.classList.add("--active");

    //4. 큰이미지에 기억한 src값을 삽입
    big.setAttribute("src", isSrc);
    big.setAttribute("alt", isAlt);
  });
});
