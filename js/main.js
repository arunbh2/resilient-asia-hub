// main.js - JavaScript functionality for ResilientAsia Hub

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('mobile-active') && 
            !event.target.closest('nav') && 
            !event.target.closest('.mobile-menu-toggle')) {
            nav.classList.remove('mobile-active');
        }
    });
    
    // Make sure links in the forum lead somewhere (placeholder functionality)
    const forumLinks = document.querySelectorAll('.forum-tabs a, .pagination a');
    forumLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove active class from all tabs
            document.querySelectorAll('.forum-tabs a').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked tab if it's a tab
            if (this.closest('.forum-tabs')) {
                this.classList.add('active');
            }
        });
    });
});
// Knowledge page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme tabs functionality
    const themeTabs = document.querySelectorAll('.theme-tab');
    
    if (themeTabs.length > 0) {
        themeTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                themeTabs.forEach(t => t.classList.remove('active', 'blue-tab', 'green-tab', 'pink-tab', 'red-tab', 'yellow-tab'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Determine which color to apply based on the theme
                const text = this.textContent.trim().toLowerCase();
                
                if (text.includes('early warning')) {
                    this.classList.add('blue-tab');
                    document.querySelectorAll('.page-number.active').forEach(p => {
                        p.style.backgroundColor = 'var(--pa-blue)';
                    });
                } else if (text.includes('nature')) {
                    this.classList.add('green-tab');
                    document.querySelectorAll('.page-number.active').forEach(p => {
                        p.style.backgroundColor = 'var(--pa-green)';
                    });
                } else if (text.includes('risk financing')) {
                    this.classList.add('pink-tab');
                    document.querySelectorAll('.page-number.active').forEach(p => {
                        p.style.backgroundColor = 'var(--pa-pink)';
                    });
                } else if (text.includes('climate risk')) {
                    this.classList.add('red-tab');
                    document.querySelectorAll('.page-number.active').forEach(p => {
                        p.style.backgroundColor = 'var(--pa-red)';
                    });
                } else if (text.includes('infrastructure') || text.includes('urban') || text.includes('waste')) {
                    this.classList.add('yellow-tab');
                    document.querySelectorAll('.page-number.active').forEach(p => {
                        p.style.backgroundColor = 'var(--pa-yellow)';
                    });
                }
                
                // Note: In a real implementation, this would likely fetch new content 
                // based on the selected theme from a backend or API
                console.log(`Selected theme: ${this.textContent.trim()}`);
            });
        });
    }
    
    // Filter functionality
    const filterButton = document.querySelector('.filter-button');
    
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            const selectedTopic = document.querySelector('.filter-dropdown:nth-child(1) select').value;
            const selectedType = document.querySelector('.filter-dropdown:nth-child(2) select').value;
            const selectedRegion = document.querySelector('.filter-dropdown:nth-child(3) select').value;
            
            // In a real application, this would trigger an API call or page refresh with filters
            console.log(`Applied filters - Topic: ${selectedTopic}, Type: ${selectedType}, Region: ${selectedRegion}`);
            
            // Show a temporary message to indicate filters were applied
            const container = document.querySelector('.container');
            const notification = document.createElement('div');
            notification.className = 'filter-notification';
            notification.textContent = 'Filters applied! In a complete implementation, this would update the resources shown.';
            notification.style.position = 'fixed';
            notification.style.top = '100px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.backgroundColor = 'var(--pa-yellow)';
            notification.style.color = '#000';
            notification.style.padding = '1rem 2rem';
            notification.style.borderRadius = '4px';
            notification.style.zIndex = '1000';
            notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            
            container.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // In a real application, this would send the email to a server
                console.log(`Newsletter subscription for: ${email}`);
                
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thank you for subscribing to our newsletter!';
                successMessage.style.color = '#000';
                successMessage.style.fontWeight = 'bold';
                successMessage.style.marginTop = '1rem';
                
                this.appendChild(successMessage);
                emailInput.value = '';
                
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
});
