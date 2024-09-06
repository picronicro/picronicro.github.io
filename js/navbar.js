let dropdowns = document.getElementsByClassName("dropdown");

let showDropdown = e => {
    const dropdown = e.target.parentElement;
    let context = dropdown.getElementsByClassName("context")[0]
    context.classList.add("show");
}

for (let d of dropdowns) {
    d.getElementsByTagName("button")[0].onclick = showDropdown;
}

document.body.addEventListener("click", e => {
    for (let d of dropdowns) {
        if (d.contains(e.target)) {
            console.log("inside")
        } else {
            d.getElementsByClassName("context")[0].classList.remove("show")
        }
    }
})