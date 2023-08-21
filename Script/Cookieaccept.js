document.addEventListener("DOMContentLoaded", function() {
    const cookieMessage = document.getElementById("cookie-message");
    const acceptButton = document.getElementById("accept-cookies");

    // Vérifie si le cookie d'acceptation existe
    const isCookieAccepted = readCookie("cookie-accepted");

    if (!isCookieAccepted) {
        cookieMessage.style.display = "block"; // Affiche le message
    }

    // Gère le clic sur le bouton "Accepter"
    acceptButton.addEventListener("click", function() {
        createCookie("cookie-accepted", "true", 365, "None", true); // Crée le cookie d'acceptation pour un an avec SameSite=None et Secure
        cookieMessage.style.display = "none"; // Cache le message
    });
});
