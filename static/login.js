// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Start Diagnosis" button
    const startDiagnosisBtn = document.getElementById('startDiagnosisBtn');
    
    // Add click event listener to the button
    if (startDiagnosisBtn) {
        startDiagnosisBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default action
            // Redirect to index route
            window.location.href = '/index';
        });
    }
    
    // Testimonial Slider functionality
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = dots ? dots.length : 0;
    
    // Function to update active dot
    function updateDots(index) {
        if (!dots || dots.length === 0) return;
        
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    // Event listeners for dots
    if (dots && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateDots(currentSlide);
            });
        });
    }
    
    // Event listeners for prev/next buttons
    if (prevBtn && nextBtn && totalSlides > 0) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateDots(currentSlide);
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateDots(currentSlide);
        });
        
        // Auto slide (optional)
        if (totalSlides > 1) {
            setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateDots(currentSlide);
            }, 5000);
        }
    }
});