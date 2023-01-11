let modal = document.querySelector("#modal");
let button = document.querySelector("#toggle");

button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
})