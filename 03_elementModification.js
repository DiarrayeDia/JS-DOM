function main() {
    let element = document.getElementsByTagName("button");
    return element[0].innerHTML = "hello world";
}
console.log(main());