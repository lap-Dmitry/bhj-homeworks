const reveal = document.querySelectorAll('.reveal');
reveal.forEach(element => {
    document.addEventListener('scroll',() => {
        const viewPortHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewPortHeight) {
            element.classList.toggle('reveal_active');
        }
    })
})