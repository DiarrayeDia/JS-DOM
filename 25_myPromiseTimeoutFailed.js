const sleepError = (milliseconds) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (milliseconds > 1999) {
            reject("throw")
        } else {
            resolve(setTimeout(resolve, milliseconds))
        }
    }, milliseconds))
};

let body = document.querySelector("body");
let button = document.querySelector("#button");

button.addEventListener("click", async ()=> {
    await sleepError(2000);
    let p = document.createElement("p");
    p.textContent = "add-me";
    body.appendChild(p);
});

module.exports = sleepError;