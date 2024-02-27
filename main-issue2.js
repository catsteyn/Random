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
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    // Check if email is empty
    if (!emailValue) {
        alert('Please enter your email address.');
        return;
    }

    // Check if email is valid
    if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display the popup if email is valid
    document.getElementById('popup').style.display = 'flex';
});

// Function to validate email address
function isValidEmail(email) {
    // Regular expression for validating email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
