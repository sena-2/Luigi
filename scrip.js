document.addEventListener('DOMContentLoaded', function () {

    const galleryItems = document.querySelectorAll('.gallery-item, .video-item');

    galleryItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const likesCount = item.querySelector('.likes-count');
        const dislikesCount = item.querySelector('.dislikes-count');

        const storedLikes = localStorage.getItem(`likes-${id}`) || 0;
        const storedDislikes = localStorage.getItem(`dislikes-${id}`) || 0;

        likesCount.textContent = `Likes: ${storedLikes}`;
        dislikesCount.textContent = `Dislikes: ${storedDislikes}`;
    });

    galleryItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const likeBtn = item.querySelector('.like-btn');
        const dislikeBtn = item.querySelector('.dislike-btn');
        const likesCount = item.querySelector('.likes-count');
        const dislikesCount = item.querySelector('.dislikes-count');

        likeBtn.addEventListener('click', () => {
            let currentLikes = parseInt(localStorage.getItem(`likes-${id}`)) || 0;
            currentLikes++;
            localStorage.setItem(`likes-${id}`, currentLikes);
            likesCount.textContent = `Likes: ${currentLikes}`;
        });

        dislikeBtn.addEventListener('click', () => {
            let currentDislikes = parseInt(localStorage.getItem(`dislikes-${id}`)) || 0;
            currentDislikes++;
            localStorage.setItem(`dislikes-${id}`, currentDislikes);
            dislikesCount.textContent = `Dislikes: ${currentDislikes}`;
        });
    });

    // Toggle menu
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

});
