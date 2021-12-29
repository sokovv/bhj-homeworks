let chatWidgetSide = document.getElementsByClassName('chat-widget__side-text')
let chatWidget = document.getElementsByClassName('chat-widget')
let input = document.getElementById('chat-widget__input')
let messages = document.querySelector('.chat-widget__messages');

open = () => chatWidget[0].classList.toggle('chat-widget_active');

chatWidgetSide[0].addEventListener('click', open)

function sayHi() {
    setTimeout(() => {
        messages.innerHTML += `
            Сообщение от робота
                <div class="message">
                    <div class="message__text">
                        Напишите уже
                    </div>
                </div>`
            ;
        messages.lastChild.scrollIntoView()
    }, 30000);

}

input.addEventListener('focus', sayHi);

input.addEventListener('keydown', e => {
    let arrMessage = ['Добрый день',
        'Приходите завтра',
        'У нас выходной',
        'Ушли на Новый год',
        'Я Алиса, бездушный робот',
        'Уходите'];
    let rand = Math.floor(Math.random() * arrMessage.length);
    let date = new Date
    if (e.keyCode === 13) {
        messages.innerHTML += `
        Сообщение от клиента
            <div class="message message_client">
                <div class="message__time">${date.toLocaleTimeString()}</div>
                <div class="message__text">
                    ${input.value}
                </div>
            </div>`
            ;
        messages.innerHTML += `
            Сообщение от робота
                <div class="message">
                    <div class="message__time">${date.toLocaleTimeString()}</div>
                    <div class="message__text">
                        ${arrMessage[rand]}
                    </div>
                </div>`
            ;
    }
    if (messages.lastChild.className === 'message') {
        messages.lastChild.scrollIntoView()
    } 
})
