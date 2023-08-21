document.addEventListener("DOMContentLoaded", function() {
    var cookieMessage = document.getElementById("cookie-message");
    var acceptCookiesButton = document.getElementById("accept-cookies");
    
    if (cookieMessage && acceptCookiesButton) {
        if (!readCookie("cookiesAccepted")) {
            cookieMessage.style.display = "block"; // Affiche le message
        }
        
        acceptCookiesButton.addEventListener("click", function() {
            createCookie("cookiesAccepted", "true", 365,"None"); // Crée un cookie valable pendant 1 an
            cookieMessage.style.display = "none"; // Cache le message après l'acceptation
        });
    }
});
