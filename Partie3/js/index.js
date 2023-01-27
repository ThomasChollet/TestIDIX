function afficherPanel(){
    // On va chercher tous les boutons
    var buttons = document.querySelectorAll('.tabs_link');

    // On boucle sur tous les boutons dans l'array
    buttons.forEach((button) => {
        // On ajoute à chacun un event click
        button.addEventListener("click", (event) => {
            // On va chercher l'ID du tab dans le href dans le DOM, et supprimer le # en trop
            const tabId = event.target.getAttribute('href').replace('#', '');

            // On va chercher le tab par son ID
            const tab = document.getElementById(tabId);
            
            // On va chercher le parent du tab, puis sélectionner tous ses panels enfants,
            const parent = tab.closest('.tabs_panels');
            parent.querySelectorAll('.tabs_panel').forEach((panel) => {

                // Puis on cache chacun des panels
                panel.classList.remove("active");
            });

            // On affiche le panel correspondant
            tab.classList.add("active");
        });
    });
}

afficherPanel();