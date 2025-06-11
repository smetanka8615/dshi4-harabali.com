 document.addEventListener('DOMContentLoaded', function() {
    const info = document.querySelector('.info');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', function() {
        
        navLinks.classList.toggle('nav-active');
        
        
        info.classList.toggle('toggle');
        
    
        document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : 'auto';
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('nav-active');
            info.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });
});