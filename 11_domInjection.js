let element_p = document.getElementById("content");
let element_c = document.createElement("p");
element_c.innerHTML = "hello world";
element_p.append(element_c);
console.log(element_c);