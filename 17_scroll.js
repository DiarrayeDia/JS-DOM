document.addEventListener("scroll", () => {
    let body = document.querySelector("body");
    let now = new Date;
    let p = document.createElement("p");
    p.innerHTML = now.toUTCString();
    body.appendChild(p);
});