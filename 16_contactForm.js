let nom = document.getElementsByName("name")[0].value;
let age = document.getElementsByName("age")[0].value;
let birthdate = document.getElementsByName("birthdate")[0].value;
let body = document.querySelector("body");

const p = document.createElement("p");
p.id="result";
p.textContent = "name: " + nom + ", age: " + age + ", birthdate: " + birthdate;
body.appendChild(p);