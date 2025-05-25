document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    };
    
    const handleScroll = () => {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('appear');
            }
        });
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
});