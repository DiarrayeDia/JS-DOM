let parent = document.querySelector("div.content");

let hover = document.querySelector("p#hoverme");

add_element = () => {
    let new_p = document.createElement("p");
    new_p.id = "result";
    new_p.textContent = "hovered";
    parent.appendChild(new_p);

} 
hover.addEventListener("mouseover", add_element);