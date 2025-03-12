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
