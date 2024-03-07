const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageChange() {
    sectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            const id = this.dataset.id;
            if (id) {
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            }
        });
    });
}

PageChange();
