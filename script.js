[script.js](https://github.com/user-attachments/files/28721430/script.js)
const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = form.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "견적 문의 준비 완료";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2200);
});
