const Tab = (tabNav, tabCon) => {
  const tabButton = document.querySelectorAll(`${tabNav} li`);
  const tabContent = document.querySelectorAll(`${tabCon} > div`);
  const active = "--active";

  tabButton.forEach((element, index) => {
    element.addEventListener("click", (event, index) => {
      const isButton = event.target.parentElement;

      tabButton.forEach((el) => {
        el.classList.remove(active);
      });

      isButton.classList.add(active);

      tabContent.forEach((el, idx) => {
        el.classList.remove(active);
        if (index === idx) {
          el.classList.add(active);
        }
      });
    });
  });
};
Tab(".tab-handle", "tab-content-handle");
Tab(".tab-handle2", "tab-content-handle2");
