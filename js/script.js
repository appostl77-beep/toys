// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if(this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('show');
        }
    });
});

// Category Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
    
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        productCards.forEach(card => {
            if(category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Product Order Modal
const orderBtns = document.querySelectorAll('.order-btn');
const modal = document.getElementById('orderModal');
const closeModal = document.querySelector('.close-modal');
const productNameInput = document.getElementById('productName');
    
orderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        productNameInput.value = productName;
        modal.style.display = 'flex';
    });
});
    
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
    
window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submissions
document.getElementById('productOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваш заказ оформлен! Мы свяжемся с вами для подтверждения.');
    modal.style.display = 'none';
    this.reset();
});
    
document.getElementById('customOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(165, 209, 240, 0.15)';
    } else {
        header.style.boxShadow = 'none';
    }
});