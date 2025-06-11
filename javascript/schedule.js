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
            info_line.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });
    
    const directionBtns = document.querySelectorAll('.direction-btn');
    const directionSchedules = document.querySelectorAll('.direction-schedule');
    
    directionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            directionBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const direction = this.getAttribute('data-direction');
            
            directionSchedules.forEach(schedule => {
                if (direction === 'all' || schedule.getAttribute('data-direction') === direction) {
                    schedule.style.display = 'block';
                } else {
                    schedule.style.display = 'none';
                }
            });
        });
    });
});