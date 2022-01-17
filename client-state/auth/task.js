let form = document.getElementById('signin__form');
let welcome = document.getElementById("welcome")
let user = document.getElementById('user_id')
let signin = document.getElementById('signin')

if (localStorage.getItem('id')) {
    signin.classList.remove('signin_active')
    welcome.classList.add('welcome_active')
    user.innerText = localStorage.getItem('id')
}

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = "json"
    xhr.send(formData);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Ошибка: ' + xhr.status);
            return;
        }
        if (xhr.response.success) {
            localStorage.setItem('id', xhr.response.user_id);
            welcome.classList.add('welcome_active')
            user.innerText = localStorage.getItem('id')
            signin.classList.remove('signin_active')
        } else {
            alert('«Неверный логин/пароль»')
        }
    }
    e.preventDefault();
});

