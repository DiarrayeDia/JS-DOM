const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  };

let body = document.querySelector("body");
let button = document.querySelector("#button");

button.addEventListener("click", async ()=> {
    await sleep(2000);
    let p = document.createElement("p");
    p.textContent = "add-me";
    body.appendChild(p);
});