// Change menu style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// Change menu item style on hover
const menuItems = document.querySelectorAll('#navbar ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#ff6347'; // Change color on hover
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = '#fff'; // Reset color on mouse leave
    });
});
