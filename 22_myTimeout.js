let body = document.querySelector("body");
let button = document.querySelector("#button");

// function addP() {
//     button.addEventListener("click", ()=> {
//         let p = document.createElement("p");
//         p.textContent = "add-me";
//         body.appendChild(p);
//     });
// }
// setTimeout(addP, 2000);

button.addEventListener("click", ()=> {
    setTimeout(() => {
        let p = document.createElement("p");
        p.textContent = "add-me";
        body.appendChild(p);
    }, 2000);
});