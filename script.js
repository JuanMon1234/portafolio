const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

/* Smooth Scroll */
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const section = document.querySelector(targetId);

        section.scrollIntoView({
            behavior: 'smooth'
        });

        navbar.classList.remove('active');
    });
});

/* Sticky Header */
window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');

    if(window.scrollY > 50){
        header.style.background = "rgba(8,17,32,0.98)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    }else{
        header.style.background = "rgba(8,17,32,.95)";
        header.style.boxShadow = "none";
    }
});

/* Reveal Animation */
const revealElements = document.querySelectorAll(
    '.section, .skill-card, .project-card, .contact-card, .timeline-item, .cert-card, .about-card'
);

function revealOnScroll(){
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 120;

        if(elementTop < windowHeight - visible){
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();