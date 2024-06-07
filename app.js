let chatContainer = document.querySelector('.chat-container');
let sendButton = document.getElementById('send-button');
let messageInput = document.getElementById('message-input');


function addMessage() {

    var messageElement = document.createElement('p');
    messageElement.innerText = messageInput.value.trim();

    chatContainer.appendChild(messageElement);
    messageInput.value = "";
}


sendButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (messageInput.value.trim() != "") {
        addMessage();
    }
})







