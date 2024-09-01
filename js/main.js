let navBar = document.getElementById("navbar");
let gridDiv = document.getElementsByClassName("grid")[0];

let btnHide = document.getElementsByClassName("btn_expand")[0];
btnHide.onclick = function () {
    let isExpanded = gridDiv.classList.contains("grid_expand");

    let icon = btnHide.getElementsByTagName("img")[0];
    isExpanded ? icon.src = "assets/icons/expand.png" : icon.src = "assets/icons/shrink.png";
    isExpanded ? gridDiv.classList.remove("grid_expand") : navBar.classList.add("hide_navbar");
    isExpanded ? setTimeout(() => navBar.classList.remove("hide_navbar"), 100)
        : setTimeout(() => gridDiv.classList.add("grid_expand"), 100);
}