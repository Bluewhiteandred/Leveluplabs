const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const article = button.closest('.news-article');
        const additionalText = article.querySelector('.additional-text');
        
        additionalText.classList.toggle('show-text');
        
        if (additionalText.classList.contains('show-text')) {
            button.textContent = 'Read less';
        } else {
            button.textContent = 'Read more';
        }
    });
});