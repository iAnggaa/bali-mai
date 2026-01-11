/* -------------------------------------------------------------------------- */
/*                                 Gallery Load More                          */
/* -------------------------------------------------------------------------- */

const galleryInit = () => {
    const loadMoreBtn = document.querySelector('#loadMoreBtn');
    const showLessBtn = document.querySelector('#showLessBtn');
    const hiddenItems = document.querySelectorAll('.gallery-hidden');

    if (loadMoreBtn && showLessBtn) {
        // Load More Action
        loadMoreBtn.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.remove('d-none');
                item.classList.add('fade-in');
            });
            loadMoreBtn.classList.add('d-none');
            showLessBtn.classList.remove('d-none');
        });

        // Show Less Action
        showLessBtn.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.remove('fade-in');
                item.classList.add('fade-out');
            });

            // Wait for animation to finish
            setTimeout(() => {
                hiddenItems.forEach(item => {
                    item.classList.add('d-none');
                    item.classList.remove('fade-out');
                });
                showLessBtn.classList.add('d-none');
                loadMoreBtn.classList.remove('d-none');
            }, 500);
        });
    }
};

export default galleryInit;
