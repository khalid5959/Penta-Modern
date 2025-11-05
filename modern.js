const showBtn = document.getElementById('show-message-btn');
const messageContainer = document.getElementById('message-container');

showBtn.addEventListener('click', () => {
    messageContainer.classList.toggle('show');
    // Optional: scroll to message container
    if (messageContainer.classList.contains('show')) {
        messageContainer.scrollIntoView({ behavior: 'smooth' });
    }
});