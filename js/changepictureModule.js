const ChangePicture = (activeClass, patentEl) => {
  const button = document.querySelectorAll(`${patentEl} button`);
  const big = document.querySelector(`${patentEl} bigsize img`);

  button.forEach((element) => {
    element.addEventListener("click", (event) => {
      const isSrc = event.target.getAttribute("src");
      const isAlt = event.target.getAttribute("alt");
      button.forEach((item) => {
        item.classList.remove(activeClass);
      });

      event.target.parentElement.classList.add(activeClass);

      big.setAttribute("src", isSrc);
      big.setAttribute("alt", isAlt);
    });
  });
};
ChangePicture("--active", ".pictures");
ChangePicture("current", ".product");
