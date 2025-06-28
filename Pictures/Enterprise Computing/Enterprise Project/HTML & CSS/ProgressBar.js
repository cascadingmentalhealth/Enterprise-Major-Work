const progressBar = document.getElementById('scrollProgressBar');

    window.addEventListener('scroll', () => {
        const lesson = document.querySelector('.lesson-content');
        const rect = lesson.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const totalHeight = lesson.scrollHeight - windowHeight;
        const scrolled = window.scrollY - lesson.offsetTop;

        const scrollPercent = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
        progressBar.style.width = `${scrollPercent}%`;
});