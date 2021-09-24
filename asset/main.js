/*----- Navbar Hamburger -----
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav-sidebar");
const menuItem = document.querySelectorAll(".nav_link");

// main toggle
menuBtn.addEventListener("click", () => {
    toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("show-menu")){
            toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle("show-menu");
    menuItems.classList.toggle("show-menu");
}*/

/*----- LINK ACTIVE -----*/
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));
