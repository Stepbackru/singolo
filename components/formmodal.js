const FormSendingModal = () => {
    ModalFormSending();
};

const ModalFormSending = () => {
    document.querySelector('.form').addEventListener('click', (e) => {
        let nameForm = document.querySelector('.form__input[name="name"]');
        let emailForm = document.querySelector('.form__input[name="email"]');
        let subjectForm = document.querySelector('.form__input[name="subject"]');
        let formDescription = document.querySelector('.form__input[name="description"]');
        let clickedItem = e.target;
        if(clickedItem.classList.contains('form__submit') && nameForm.validity.valid && emailForm.validity.valid) {
            e.preventDefault();
            createModalForm(subjectForm, formDescription, clickedItem);
            removeModalForm('modal', 'modal__confirm', clickedItem);
            removeModalForm('body', 'modal', clickedItem);
        }
    })
}

const createModalForm = (subjectForm, formDescription, clickedItem) => {
    let modalBlock = document.createElement('article');
    document.body.appendChild(modalBlock);
    modalBlock.classList.add('modal');
    let clearSubjectForm = subjectForm.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/script/g, "sсript").replace(/>/g, "&gt;");
    let clearformDescription = formDescription.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/script/g, "sсript").replace(/>/g, "&gt;");
    let regEx = /(<([a-z]+)>.*<\/\2>)+/g;
    let modalContent = '';
    modalContent += `<div class="modal__wrapper">`;
    modalContent += `<h2 class="modal__caption">The letter was sent</h2>`;
    modalContent += `<h4 class="modal__caption-subject">Subject:</h4>`;
    modalContent += `<p class="modal__subject">${clearSubjectForm ? clearSubjectForm : 'No subject'}</p>`;
    modalContent += `<h4 class="modal__caption-decription">Description:</h4>`;
    modalContent += `<p class="modal__decription">${clearformDescription ? clearformDescription : 'No description'}</p>`;
    if(regEx.test(subjectForm.value) || regEx.test(formDescription.value)){
        modalContent += `<p class="attention"><b>Attention!</b></p>`;
        modalContent += `<p class="attention attention-msg">Stop messing around! Big brother sees you trying to use hacking scripts.</p>`;
    }
    modalContent += `<button class="modal__confirm">Ok</button>`;
    modalContent += `</div>`;

    modalBlock.innerHTML = modalContent;
    clickedItem.disabled = true;
    return modalBlock;
}

const removeModalForm = (parentBlock, childBlock, clickedItem) => {
    document.querySelector(`.${parentBlock}`).addEventListener('click', (e) => {
        if(e.target.classList.contains(`${childBlock}`)) {
            let modalBlock = document.querySelector('.modal');
            let modalBlock2 = document.querySelector('.modal__wrapper');
            modalBlock2.style.animation = '.3s modalClose'
            setTimeout(() => {
                document.body.removeChild(modalBlock);
                document.querySelector('.form').reset();
                clickedItem.disabled = false;
            }, 300);
        }
    })
}

export default FormSendingModal;