const activities = [
    "Vai a fare arrampicata in un parco vicino",
    "Prova un nuovo ristorante",
    "Visita un museo o una galleria d'arte",
    "Fai un picnic in campagna",
    "Vai ad un concerto o evento locale",
    "Prova uno sport da esterna come il kayaking o la scalata",
    "Fai una maratona film",
    "Esplora una città vicina",
    "Partecipa ad una cooking class o a una degustazione",
    "Cucina un piatto nuovo",
    "Leggi un libro",
    "Inizia un nuovo anime",
    "Sviluppa un progetto nuovo",

];

document.getElementById('suggestBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomIndex];
    const activityDisplay = document.getElementById('activityDisplay');
    
    activityDisplay.textContent = randomActivity;
    activityDisplay.classList.remove('hidden');
});
