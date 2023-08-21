// Script pour le bouton de like
document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    
    likeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (!this.classList.contains("liked")) {
                this.classList.add("liked");
                this.innerHTML = "❤️ <span class='like-text'>Like</span>";
            } else {
                this.classList.remove("liked");
                this.innerHTML = "🤍 <span class='like-text'>Dislike</span>";
            }
        });
    });
});