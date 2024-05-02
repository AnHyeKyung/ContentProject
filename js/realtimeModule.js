const Realtime = (inputText, preview) => {
  const input = document.querySelector(inputText);
  const content = document.querySelector(preview);

  input.addEventListener("input", (event) => {
    const text = event.target.value;
    console.log(text);

    content.innerText = text;
  });
};
Realtime(".input", ".preview__content");
Realtime(".title", ".preview__title");
Realtime(".link", ".preview__link");
