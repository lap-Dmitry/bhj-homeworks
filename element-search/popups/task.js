const modalMain = document.getElementById('modal_main');
const modalsClose = document.getElementsByClassName('modal__close');
modalMain.classList.add('modal_active');

console.log(modalsClose);

Array.from(modalsClose).forEach((modalCloseButton) => {
    modalCloseButton.onclick = () => {
        modalCloseButton.closest('.modal').classList.remove('modal_active');
    }
});

const succesButton = document.getElementsByClassName('show-success')[0];
const modalSuccess = document.getElementById('modal_success');

succesButton.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}