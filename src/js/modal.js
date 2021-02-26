let defaultConfig = {
    linkAttributeName: 'data-toggle="modal"',
    closeOnOverlay: true,
    closeOnEsc: false,
    closeOnButton: true,
    beforeOpen: () => { },
    afterClose: () => { },
}

function init(props) {
    const config = Object.assign({}, defaultConfig, props);
    const $toggleModal = document.querySelectorAll('[data-toggle="modal"]');

    $toggleModal.forEach(element => {
        const MODAL_ID = element.getAttribute('data-target');
        const $modal = document.querySelector(MODAL_ID);

        element.addEventListener('click', function (e) {
            e.preventDefault();

            this.setAttribute('aria-expanded', true);
            $modal.hidden = false;
        }, false);

        $modal.addEventListener('click', function (e) {
            if (e.target === this || e.target.closest('[data-close]')) {
                e.preventDefault();

                element.setAttribute('aria-expanded', false);
                $modal.hidden = true;
            }
        }, false);
    });
    // bindEvents();
}

function bindEvents() {
    document.addEventListener('click', function (e) {
        const $toggleModal = e.target.closest('[data-toggle="modal"]');
        const $modal = e.target.closest('[data-modal]');
        if ($toggleModal) {
            e.preventDefault();
            const MODAL_ID = $toggleModal.getAttribute('data-target');
            const $target = document.querySelector(MODAL_ID);

            $toggleModal.setAttribute('aria-expanded', true);
            $target.hidden = false;
        }
    }, false);
}

function modal(props) {
    if (props === 'show') {
        this.setAttribute('aria-expanded', true);
        $modal.hidden = false;
    }
    if (props === 'hide') {
        $toggleModal.setAttribute('aria-expanded', false);
        $modal.hidden = true;
    }
}

export default init;