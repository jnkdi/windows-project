import './index.html';
import './index.scss';
import { validate } from './modules/validate';
import './modules/burger'

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', validate);

// validate();