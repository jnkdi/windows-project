import './index.html';
import './index.scss';
import { validate } from './modules/validate';

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', validate);

// validate();