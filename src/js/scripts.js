document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding an event listener to a button
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});