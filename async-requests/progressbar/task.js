let progress = document.getElementById('progress');
let form = document.getElementById('form');
progress.value = 0;

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total
    }
    xhr.send(formData);
    e.preventDefault();
});