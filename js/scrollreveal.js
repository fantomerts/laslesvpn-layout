elementsReveal();

function elementsReveal() {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.main__title', { 
        origin: 'left', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.main__text', { 
        origin: 'left', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.main__picture', { 
        origin: 'right', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.features__picture', { 
        origin: 'left', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.features__info', { 
        origin: 'right', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.pricing__plan', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.pricing__features', { 
        origin: 'top', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.geographic__map', { 
        origin: 'top', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.geographic__partners', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.testimonials__blocks', { 
        origin: 'right', 
        duration: 1000,
        distance : '150px',
        easing: 'ease'
    });
    sr.reveal('.testimonials__subscription', { 
        origin: 'left', 
        duration: 1000,
        distance : '150px',
        easing: 'ease'
    });
}