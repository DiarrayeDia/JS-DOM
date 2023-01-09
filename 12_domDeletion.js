let tags = document.getElementsByTagName("p");
let array = [...tags];
array.forEach((tags) => tags.remove());
console.log(tags); // du coup renvoie une html collection vide