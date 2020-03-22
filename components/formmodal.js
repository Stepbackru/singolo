const FormSendingModal = () => {
    ModalFormSending();
};

const ModalFormSending = () => {
    document.querySelector('.form').addEventListener('click', (e) => {
        if(e.target.classList.contains('form__submit')) {
            e.preventDefault();
            createModalForm();
            removeModalForm('modal', 'modal__confirm');
            removeModalForm('body', 'modal');
        }
    })
}

const createModalForm = () => {
    let subjectForm = document.querySelector('.form__input[name="subject"]').value;
    let formDescription = document.querySelector('.form__input[name="description"]').value;
    let modalBlock = document.createElement('article');
    document.body.appendChild(modalBlock);
    modalBlock.classList.add('modal');

    let modalContent = '';
    modalContent += `<div class="modal__wrapper">`;
    modalContent += `<h2 class="modal__caption">The letter was sent</h2>`;
    modalContent += `<h4 class="modal__caption-subject">Subject:</h4>`;
    modalContent += `<p class="modal__subject">${subjectForm ? subjectForm : 'No subject'}</p>`;
    modalContent += `<h4 class="modal__caption-decription">Description:</h4>`;
    modalContent += `<p class="modal__decription">${formDescription ? formDescription : 'No description'}</p>`;
    modalContent += `<button class="modal__confirm">Ok</button>`;
    modalContent += `</div>`;

    modalBlock.innerHTML = modalContent;
    return modalBlock;
}

const removeModalForm = (parentBlock, childBlock) => {
    document.querySelector(`.${parentBlock}`).addEventListener('click', (e) => {
        if(e.target.classList.contains(`${childBlock}`)) {
            console.log(e);
            let modalBlock = document.querySelector('.modal');
            let modalBlock2 = document.querySelector('.modal__wrapper');
            modalBlock2.style.animation = '.3s modalClose'
            setTimeout(() => {
                document.body.removeChild(modalBlock);
                document.querySelector('.form').reset();
            }, 300);
        }
    })
}

export default FormSendingModal;