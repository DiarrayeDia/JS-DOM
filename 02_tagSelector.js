function main() {
    let element = document.getElementsByTagName("button");
    return element;
}
console.log(main());
console.log(main().innerHTML);
module.exports = main;