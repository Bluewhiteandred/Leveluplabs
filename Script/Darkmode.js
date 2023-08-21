
// Fonction pour mettre le Darkmode
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle("dark-mode");
            const themeBtn = document.getElementById("theme-btn");
            if (body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️ Light Mode";
            } else {
                themeBtn.textContent = "🌙 Dark Mode";
            }
        }

        const themeBtn = document.getElementById("theme-btn");
        themeBtn.addEventListener("click", toggleDarkMode);