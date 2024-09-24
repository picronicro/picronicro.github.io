const dropdowns = document.getElementsByClassName("dropdown");
const dialogAbout = document.getElementById("dialog_about");

let showDropdown = e => {
    const dropdown = e.target.parentElement;
    console.log(dropdown)
    let context = dropdown.getElementsByClassName("context")[0];
    context.classList.add("show");

}

for (let d of dropdowns) {
    d.getElementsByTagName("button")[0].onclick = showDropdown;
}

document.body.addEventListener("click", e => {
    for (let d of dropdowns) {
        if (!d.contains(e.target)) {
            d.getElementsByClassName("context")[0].classList.remove("show");
        }
    }
})

// navbar tiny buttons
document.getElementById("nav_home").onclick = () => {
    window.location.href = "/index.html";
}

const btnAbout = document.getElementById("opt_about")
btnAbout.onclick = () => {
    dialogAbout.showModal();
    dialogAbout.getElementsByTagName("button")[0].onclick = () => {
        dialogAbout.close();
    }
}
