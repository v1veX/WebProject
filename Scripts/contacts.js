let wrapper = document.getElementById("contacts-wrapper")

function openContacts() {
    wrapper.style.top = "0vh"
}

function closeContacts() {
    wrapper.style.top = "100vh"
}

window.onclick = function(event) {
    if (event.target == wrapper) {
        closeContacts()
    }
}