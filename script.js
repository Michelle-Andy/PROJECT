document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Find the content div immediately following the clicked header
            const content = header.nextElementSibling;
            
            // Toggle the visibility of the content
            if (content.style.display === "block") {
                content.style.display = "none";
                header.classList.remove('active'); // Optional: for styling the active header
            } else {
                // Optional: Close all other open accordions before opening the new one
                closeAllAccordions();
                
                content.style.display = "block";
                header.classList.add('active');
            }
        });
    });

    function closeAllAccordions() {
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = "none";
        });
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.classList.remove('active');
        });
    }

    // 2. Add-to-Cart Functionality (Mock/Placeholder)
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    const quantityInput = document.getElementById('qty');
    const cartCountElement = document.querySelector('.cart-icon a'); // Assuming the cart link needs updating

    if (addToCartButton) {
        addToCartButton.addEventListener('click', (e) => {
            // Prevent default form submission if the button were inside a form
            e.preventDefault(); 
            
            const quantity = parseInt(quantityInput.value, 10);
            const productName = "Glow Serum";
            
            if (quantity > 0) {
                // --- Mock Cart Update Logic ---
                // In a real application, you would send this data to a server
                
                let currentCartCount = parseInt(sessionStorage.getItem('cartCount') || '0', 10);
                
                // Update the total count in session storage
                currentCartCount += quantity;
                sessionStorage.setItem('cartCount', currentCartCount);

                // Update the visible cart icon text
                if (cartCountElement) {
                    // Update the text to "Cart (X)"
                    cartCountElement.textContent = `Cart (${currentCartCount})`;
                }

                // Give the user feedback
                alert(`${quantity} x ${productName} added to cart! Total items: ${currentCartCount}`);
                
            } else {
                alert('Please enter a valid quantity.');
            }
        });
    }

    // 3. Initialize Cart Count on Page Load
    function initializeCartCount() {
        const currentCount = parseInt(sessionStorage.getItem('cartCount') || '0', 10);
        if (cartCountElement) {
            cartCountElement.textContent = `Cart (${currentCount})`;
        }
    }
    
    initializeCartCount();
    
    // 4. Image Gallery Functionality (Switching the main image)
    const mainImage = document.querySelector('.product-image-gallery .main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-row .thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Set the main image source to the clicked thumbnail's source
            mainImage.src = thumbnail.src;
            
            // Optional: Visually indicate which thumbnail is active (e.g., remove/add a class)
            thumbnails.forEach(t => t.classList.remove('active-thumb'));
            thumbnail.classList.add('active-thumb');
        });
    });

});