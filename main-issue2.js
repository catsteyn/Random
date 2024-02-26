document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Smooth scrolling for navbar links
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add 'active' class to the clicked link
            navbar.querySelectorAll('a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Smooth scrolling to the top for logo
    navbar.querySelector('img').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Remove 'active' class from all navbar links
        navbar.querySelectorAll('a').forEach(navLink => {
            navLink.classList.remove('active');
        });
    });

    // Add 'active' class to the navbar link corresponding to the section in view
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Iterate through each section and determine if it's in view
        document.querySelectorAll('section').forEach(section => {
            const top = section.offsetTop - navbar.offsetHeight;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                const targetId = '#' + section.id;
                const targetLink = navbar.querySelector(`a[href='${targetId}']`);

                // Remove 'active' class from all navbar links
                navbar.querySelectorAll('a').forEach(navLink => {
                    navLink.classList.remove('active');
                });

                // Add 'active' class to the corresponding navbar link
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    });

    // Form submission event listener with input validation
    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        // Validate name input
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return;
        }

        // Validate email input
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If inputs are valid, display the popup
        document.getElementById('popup').style.display = 'flex';
    });
});
