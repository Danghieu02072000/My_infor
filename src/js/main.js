const ACCORDION_BTN = document.querySelectorAll(".accordion-header");
const ACCORDION_CONTENT = document.querySelectorAll(".accordion-body");

ACCORDION_BTN.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ACCORDION_CONTENT.forEach((content) => {
      if (
        e.target.nextElementSibling !== content &&
        content.classList.contains("active")
      ) {
        content.classList.remove("active");
        ACCORDION_BTN.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    ACCORDION_BTN.forEach((btn) => btn.classList.remove("active"));
    ACCORDION_CONTENT.forEach((content) => content.classList.remove("active"));
  }
};