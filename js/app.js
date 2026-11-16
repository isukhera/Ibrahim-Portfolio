
// =========================================
// IBRAHIM SUKHERA PORTFOLIO
// JavaScript
// =========================================


// =========================================
// 1. SELECT NAVIGATION ELEMENTS
// =========================================

const menuToggle = document.querySelector("#menu-toggle");

const navLinks = document.querySelector("#nav-links");

const navItems = document.querySelectorAll(".nav-link");


// =========================================
// 2. MOBILE MENU TOGGLE
// =========================================

menuToggle.addEventListener("click", () => {

    // Check whether the menu is opening or closing

    const isOpen = navLinks.classList.toggle("open");


    // Update accessibility attributes

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// =========================================
// 3. CLOSE MENU AFTER NAVIGATION
// =========================================

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        // Close the mobile menu

        navLinks.classList.remove("open");


        // Reset accessibility attributes

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =========================================
// 4. INITIALIZATION MESSAGE
// =========================================

console.log("Ibrahim Sukhera Portfolio initialized.");
Build responsive navigation and hero section