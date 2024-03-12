var list1 = document.querySelector(".list1");
var list2 = document.querySelector(".list2");
const button_l1 = document.querySelector(".l1");
const button_l2 = document.querySelector(".l2");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const links = document.querySelectorAll("a");
const navbar = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
const navbar_side = document.querySelector('.Overview');
const sideclick = document.querySelector('.sidebar-navbar');
const closeicon = document.querySelector('.bi-justify');

button_l1.addEventListener("click", (e) => {
    list1.classList.toggle("show")
    list2.classList.remove("show")
    icon1.classList.toggle("rotate");
})
button_l2.addEventListener("click", (e) => {
    list2.classList.toggle("show")
    list1.classList.remove("show")
    icon2.classList.toggle("rotate");
})

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
        sidebar.classList.add("sidebar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
        sidebar.classList.add("sidebar-fixed");
    }
});

navbar_side.addEventListener("click", function () {
    console.log(closeicon)
    if (sideclick.classList.contains("show-sidebar")) {
        sideclick.classList.remove("show-sidebar");
        closeicon.classList = "bi bi-justify";
    }
    else {
        
        sideclick.classList.add("show-sidebar");
        closeicon.classList = "bi bi-x";
    }
});
