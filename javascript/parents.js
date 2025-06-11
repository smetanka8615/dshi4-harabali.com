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
    
    const paymentModal = document.getElementById('paymentModal');
    const openPaymentModal = document.getElementById('openPaymentModal');
    const closeModal = document.getElementById('closeModal');
    const paymentForm = document.getElementById('paymentForm');
    
    openPaymentModal.addEventListener('click', function() {
        paymentModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === paymentModal) {
            paymentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Оплата прошла успешно! Спасибо.');
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        paymentForm.reset();
    });
    
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let matches = value.match(/\d{4,16}/g);
        let match = matches && matches[0] || '';
        let parts = [];
        
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        
        if (parts.length) {
            e.target.value = parts.join(' ');
        } else {
            e.target.value = value;
        }
    });

    const cardExpiry = document.getElementById('cardExpiry');
    cardExpiry.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
});