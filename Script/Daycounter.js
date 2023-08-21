function updateDaysCounters() {
    var currentDate = new Date();

    var daysCounters = document.getElementsByClassName("days-counter");
    for (var i = 0; i < daysCounters.length; i++) {
        var counter = daysCounters[i];
        var chapterDate = new Date(counter.getAttribute("data-date"));
        var timeDifference = currentDate - chapterDate;
        var daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        counter.textContent = daysElapsed;
    }
}

// Mettre à jour les compteurs au chargement de la page
updateDaysCounters();