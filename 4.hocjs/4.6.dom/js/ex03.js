const chatbox = document.querySelector('.chatbox');
const chatboxHeading = chatbox.querySelector('h2');
const chatboxClose = chatbox.querySelector('span');
const chatboxBody = chatbox.querySelector('.chatbox-body');
const showChatbox = () => {
    chatboxBody.classList.add('show');
}
const closeChatbox = () => {
    chatboxBody.classList.remove('show');
}
chatboxHeading.addEventListener('click', showChatbox)
chatboxClose.addEventListener('click', closeChatbox)
document.addEventListener('click', (e) => {
    console.log(chatbox.contains(e.target));
    if (!chatbox.contains(e.target)) {
        closeChatbox();
    }
})
// chatbox.addEventListener('click', (e) => {
//     e.stopPropagation();
// })