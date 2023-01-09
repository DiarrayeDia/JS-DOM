
let elements = document.getElementsByTagName("button");
console.log(elements);
array = [...elements];
array.map((elements) => elements.style.backgroundColor = "red");
