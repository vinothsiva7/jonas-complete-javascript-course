'use strict';

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);
document.addEventListener('keydown',function (event) {
    if (event.key === 'x' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})