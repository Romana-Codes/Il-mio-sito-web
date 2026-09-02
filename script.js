document.addEventListener('DOMContentLoaded', () => {

    // --- 1. EFFETTO TYPEWRITER ---
    const words = ["Algoritmi & Logica Pura.", "Sviluppo Web Moderno.", "Architettura Dati."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const targetElement = document.getElementById('typewriter-text');

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            targetElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            targetElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500; // Pausa a parola completata
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400; // Pausa prima della nuova parola
        }

        setTimeout(typeEffect, speed);
    }

    if (targetElement) typeEffect();


    // --- 2. FILTRO DEI PROGETTI ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Gestione stato attivo del bottone
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    const emailLink = document.querySelector('.footer-email');
    if (emailLink) {
        emailLink.addEventListener('click', () => {
            const email = "maragno.francescaromana@gmail.com";

            // Copia l'email pulita negli appunti
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailLink.textContent;
                emailLink.textContent = "✓ Email copiata!";
                emailLink.style.color = "#3fb950";

                setTimeout(() => {
                    emailLink.textContent = originalText;
                    emailLink.style.color = "";
                }, 2000);
            });
        });
    }

});