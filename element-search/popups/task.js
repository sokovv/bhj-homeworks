let modulMain = document.getElementById('modal_main')
let modulSuccess = document.getElementById('modal_success')
let modulClose = document.getElementsByClassName('modal__close')
let showSuccess = document.getElementsByClassName('show-success')

//modulMain.classList.add('modal_active');
modulMain.className = "modal modal_active"

function Success() {
    modulMain.classList.remove('modal_active');
    modulSuccess.classList.add('modal_active');
}

function CloseMain() {
    modulMain.classList.remove('modal_active');
    modulSuccess.classList.remove('modal_active');
}

modulClose[0].onclick = CloseMain;
showSuccess[0].onclick = Success;
modulClose[2].onclick = CloseMain;


