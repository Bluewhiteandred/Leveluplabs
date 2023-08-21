// Fonction pour mettre le Darkmode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const themeBtn = document.getElementById("theme-btn");
    if (body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
        createCookie("dark-mode-cookie", "true", 365, "None",true); // Crée un cookie avec l'attribut SameSite=None
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        eraseCookie("dark-mode-cookie"); // Supprime le cookie pour désactiver le mode sombre
    }
}

// Vérifier l'état du mode sombre lors du chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    const isDarkModeCookie = readCookie("dark-mode-cookie") === "true";
    if (isDarkModeCookie) {
        toggleDarkMode(); // Active le mode sombre si nécessaire
    }
});

// Écouteur pour le bouton de bascule du mode sombre
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", toggleDarkMode);
