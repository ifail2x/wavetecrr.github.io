window.onload = function() {
    document.body.style.opacity = "1";

    var navbarToggle = document.querySelector('.navbar-toggle');
    var navItems = document.querySelector('.nav-items');

    navbarToggle.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
};
