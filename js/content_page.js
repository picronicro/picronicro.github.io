let navBar = document.getElementById("navbar");
let container = document.getElementsByClassName("container")[0];

let btnHide = document.getElementsByClassName("btn_expand")[0];
btnHide.onclick = function () {
    let isExpanded = container.classList.contains("expand");

    let icon = btnHide.getElementsByTagName("img")[0];
    isExpanded ? icon.src = "../assets/icons/expand.png" : icon.src = "../assets/icons/shrink.png";
    isExpanded ? container.classList.remove("expand") : navBar.classList.add("hide_navbar");
    isExpanded ? setTimeout(() => navBar.classList.remove("hide_navbar"), 100)
        : container.classList.add("expand");
    isExpanded ? document.body.classList.remove("blur_bg") : document.body.classList.add("blur_bg");
}