let square = document.querySelector("#square");
let x = 0;
let y = 0;

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            square.style.left = x -= 10 +"px";
            break;
        case "ArrowUp":
            square.style.top = y-= 10 + "px";
            break;
        case "ArrowRight":
            square.style.right = x += 10 + "px";
            break;
        case "ArrowDown":
            square.style.down = y += 10 + "px";
            break;
    }

})