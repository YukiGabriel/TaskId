const buttons = document.querySelectorAll(".sidebar button");
const content = document.getElementById("content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const module = button.dataset.module;
    content.innerHTML = `<h2>${module}</h2>`;
  });
});
