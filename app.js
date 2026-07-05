document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('legal-modal');
    const openModalBtn = document.getElementById('open-legal-nav');
    const openModalFooter = document.getElementById('open-legal-footer');
    const closeBtn = document.getElementById('close-modal');
    const acceptBtn = document.getElementById('accept-legal');

    // Open modal
    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    openModalBtn.addEventListener('click', openModal);
    openModalFooter.addEventListener('click', openModal);

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    closeBtn.addEventListener('click', closeModal);
    acceptBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
