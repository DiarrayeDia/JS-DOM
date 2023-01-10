let parent = document.querySelector("div.content");

let click = document.querySelector("button#clickme");
click.addEventListener("click", () => {
    let child = document.createElement("p");
    child.id = "result";
    child.textContent = "clicked";
    parent.appendChild(child);

})