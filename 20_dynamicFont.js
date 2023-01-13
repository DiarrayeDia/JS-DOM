let inputEvent = document.querySelector("#fontsize");

inputEvent.addEventListener("input", (event) => {
    event.preventDefault() 

    let new_font = document.getElementById("fontsize").value;
    let myClass = document.querySelectorAll(".controlled_fontsize");

    myClass = [...myClass];
    myClass.forEach(i => i.style.fontSize = new_font + "px");
});