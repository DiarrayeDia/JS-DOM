function main() {
    let element = document.getElementsByTagName("button");
    return element[0].innerHTML = "HELLO WORLD!";
}
console.log(main());