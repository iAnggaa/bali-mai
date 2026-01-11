// destination-filter.js

const initDestinationFilter = () => {
    const fileterButtons = document.querySelectorAll(
        '#destination button[data-filter]'
    );
    const destinationCards = document.querySelectorAll(
        '#destination .row .col-md-3'
    );

    if (fileterButtons.length) {
        fileterButtons.forEach(button => {
            button.addEventListener('click', event => {
                const filterValue = event.target.getAttribute('data-filter');

                // Update active class
                fileterButtons.forEach(btn => btn.classList.remove('active', 'btn-secondary'));
                fileterButtons.forEach(btn => btn.classList.add('btn-outline-secondary'));

                event.target.classList.add('active', 'btn-secondary');
                event.target.classList.remove('btn-outline-secondary');

                // Filter cards with animation
                destinationCards.forEach(card => {
                    card.classList.add('animate-out');
                });

                setTimeout(() => {
                    destinationCards.forEach(card => {
                        if (filterValue === '*' || card.classList.contains(filterValue)) {
                            card.classList.remove('d-none');
                        } else {
                            card.classList.add('d-none');
                        }
                    });

                    // Trigger reflow and animate in
                    requestAnimationFrame(() => {
                        destinationCards.forEach(card => {
                            if (!card.classList.contains('d-none')) {
                                card.classList.remove('animate-out');
                            }
                        });
                    });
                }, 400); // Match transition duration
            });
        });

        // Trigger initial filter (Full Day Trip)
        const initialBtn = document.querySelector('#destination button[data-filter="full-day"]');
        if (initialBtn) {
            initialBtn.click();
        }
    }
};

export default initDestinationFilter;
