let xhr = new XMLHttpRequest();
let pollTitle = document.getElementById("poll__title")
let pollAnswers = document.getElementById("poll__answers")
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = "json"
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        pollTitle.innerText = xhr.response.data.title
        let arr = xhr.response.data.answers
        for (let i = 0; i < arr.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeEnd', `
        <button class="poll__answer">
        ${arr[i]}
      </button>`)
        };
    }
};

function message(e) {
    if (e.target.className === "poll__answer") {
        alert('«Спасибо, ваш голос засчитан!»')
    }
}

pollAnswers.addEventListener('click', message);