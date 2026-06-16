(function() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    const form = document.getElementById('demoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'sent! ✨ <i class="fas fa-check-circle"></i>';
            btn.style.background = "rgba(0,0,0,0.3)";
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = "rgba(0, 0, 0, 0.2)";
            }, 2100);
            form.reset();
            alert("Thank you! I'll get back to you soon. — Pavel");
        });
    }
})();