// script.js
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');

    likeButton.addEventListener('click', () => {
        let count = parseInt(likeCount.innerText, 10);
        likeCount.innerText = count + 1;
    });
});
