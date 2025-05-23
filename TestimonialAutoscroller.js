document.addEventListener('DOMContentLoaded', function() {
const track = document.querySelector('.slideshow-track');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
           
let currentIndex = 0;
const testimonialWidth = 100 / 3; 
let autoScrollInterval;
           

function updateCarousel() {
   
testimonials.forEach(testimonial => {
    testimonial.classList.remove('center');
    testimonial.classList.remove('prev');
    testimonial.classList.remove('next');
});
               

testimonials[currentIndex].classList.add('center');
               
const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
const nextIndex = (currentIndex + 1) % testimonials.length;
               
testimonials[prevIndex].classList.add('prev');
testimonials[nextIndex].classList.add('next');
               
track.style.transform = `translateX(-${currentIndex * testimonialWidth}%)`;
}
           
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
}
           

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
            }
           
function startAutoScroll() {
    autoScrollInterval = setInterval(nextTestimonial, 3000);
}
           
nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoScroll();
});
           
prevBtn.addEventListener('click', () => {
    prevTestimonial();
    resetAutoScroll();
});
           
function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}
           
updateCarousel();
startAutoScroll();
           
track.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});
           
track.addEventListener('mouseleave', startAutoScroll);
});