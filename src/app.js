// /* ------ Libraries ------ */
import datepicker from 'js-datepicker';
import 'js-datepicker/src/datepicker';
import 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';

// /**
//  * VENDOR WEBSITE COMMON SCRIPTS
//  */
import modal from './js/modal';
import header from './js/header';

window.VW = window.VW || {};
window.VW.modal = modal;
window.VW.header = header;

document.addEventListener('DOMContentLoaded', function () {
    window.VW.modal();
    window.VW.header();

    if (document.querySelector('[data-prop="datepicker"]')) {
        const picker = datepicker('[data-prop="datepicker"]');
    }

    lightGallery(document.querySelector('[data-prop="lightgallery"]'), {
        selector: 'a',
        download: false
    });
});