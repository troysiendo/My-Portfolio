window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.profile-section');
    const scrollPosition = window.pageYOffset;
    parallax.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
