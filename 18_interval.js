setInterval(() => {
    let clock = document.querySelector("#clock");
    let now = new Date;
    clock.innerHTML = now;
}, 1000)