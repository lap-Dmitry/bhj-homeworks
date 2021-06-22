const chats = document.getElementsByClassName('chat-widget')[0];

chats.addEventListener('click', (e) => {
    chats.classList.add('chat-widget_active');
});

const messages = document.querySelector('.chat-widget__messages');
const chatsWidgetInput = document.getElementById('chat-widget__input');

const answers = [
    'Вы не купили ни одного товара для того, чтобы с нами так разговариваривать',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению все операторы заняты. Не пишите нам больше',
    'Добрыйц день! До свидания!',
    'Мы ничего вам продавать не будем'
]

chatsWidgetInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatsWidgetInput.value) {
        const currentTime = new Date();
        const timeString = currentTime.getHours() + ':' + currentTime.getMinutes();

        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${timeString}</div>
        <div class="message__text">${chatsWidgetInput.value}
        </div>
        </div>`;

        chatsWidgetInput.value = '';

        const randomIndex = Math.round(Math.random()*(answers.length - 1));
        const answer = answers[randomIndex];

        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${timeString}</div>
        <div class="message__text">${answer}</div>
        </div>`;

        messages.scrollIntoView(false);
    }
});