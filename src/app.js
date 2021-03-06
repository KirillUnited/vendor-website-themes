// /* ------ Libraries ------ */
import datepicker from 'js-datepicker';
// /**
//  * VENDOR WEBSITE COMMON SCRIPTS
//  */
import modal from './js/modal';
import header from './js/header';

window.VW = window.VW || {};
window.VW.modal = modal;
window.VW.header = header;

window.VW.modal();
window.VW.header();

const picker = datepicker('[data-prop="datapicker"]');