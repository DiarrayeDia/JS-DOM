let buttons = document.querySelectorAll(".btn");
console.log(buttons);
array = [...buttons];
array.map((button) => {
    if (button.className.includes("danger")) {
        button.style.backgroundColor = "red";
    } else if (button.className.includes("warning")) {
        button.style.backgroundColor = "yellow";
    } else if (button.className.includes("secondary")) {
        button.style.backgroundColor = "grey";
    } else {
        button.style.backgroundColor = "blue";
    } 
})