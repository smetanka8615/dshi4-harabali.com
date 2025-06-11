document.addEventListener('DOMContentLoaded', function() {
    const info_line = document.querySelector('.info_line');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    info_line.addEventListener('click', function() {
        
        navLinks.classList.toggle('nav-active');
        
        info_line.classList.toggle('toggle');
        
        document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : 'auto';
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
});