let w = document.getElementById("mob-menu")
let b = document.getElementById("body")

function openMobileMenu() {
    w.style.left = "0%"
    b.style.overflow = "hidden"
}

function closeMobileMenu() {
    w.style.left = "100%"
    b.style.overflow = "auto"
}