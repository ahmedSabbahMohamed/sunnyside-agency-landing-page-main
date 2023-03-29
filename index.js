let menu = document.getElementById("menu"),
showMenu = document.querySelector(".show"),
goDown = document.querySelector(".hero img");

menu.addEventListener("click", e => {
    e.preventDefault();
    showMenu.classList.toggle("show");
});

console.log(document.body.clientWidth);

goDown.addEventListener("click", _ => {
    if(document.body.clientWidth >= 900) {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            top: 700,
            behavior: "smooth",
        })
    }
});