function Desplegar() {

    var menu = document.getElementsByClassName("links") // Variable to get the menu from the HTML (called links)
    var button = document.getElementsByClassName("menu-button") // Variable to get the button from the HTML (called menu-button)
    
    // If the menu is active, show the X; otherwise, show the triple bar symbol
    if (menu[0].classList.contains("active")) {
        button[0].innerText = "≡";
    }
    else {
        button[0].innerText = "X";
    }
    
    // The toggle method adds or removes the "active" class depending on its current state in the element
    menu[0].classList.toggle("active")
}
