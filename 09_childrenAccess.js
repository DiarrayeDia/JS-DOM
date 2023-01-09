function main() {
    let ul = document.getElementById("menu");
    return ul.children[0].innerHTML;
}
console.log(main());
module.exports = main;