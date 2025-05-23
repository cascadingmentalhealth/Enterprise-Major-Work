document.addEventListener('DOMContentLoaded', function() {
    const transitionElement = document.querySelector('.color-transition');
    const overlayText = document.querySelector('.text-overlay');
    
    const startTransitionAt = 0.2; 
    const completeTransitionAt = 0.6; 
    
    function updateTextColor() {
        const rect = transitionElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const positionFromBottom = (viewportHeight - rect.top) / viewportHeight;
        
        if (positionFromBottom < startTransitionAt) {
            overlayText.style.width = '0%';
        } else if (positionFromBottom > completeTransitionAt) {
            overlayText.style.width = '100%';
        } else {
            const transitionRange = completeTransitionAt - startTransitionAt;
            const progress = (positionFromBottom - startTransitionAt) / transitionRange;
            overlayText.style.width = `${progress * 100}%`;
        }
    }
    
    window.addEventListener('scroll', updateTextColor);
    
    updateTextColor();
});