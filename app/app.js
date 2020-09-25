let app = {
    // ----------------------------------------------------------------------------------------------------------------
    // MANIPULATION DU DOM DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    dom: {
    },


    // ----------------------------------------------------------------------------------------------------------------
    // ARCHITECTURE MVC DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    mvc: {         
        dispatchUrl: controllerName => {
      // verifier si le contrôleur passé en paramètre est fonctionnel
      // (est-ce que la propriété url existe, la méthode executeHttpRequest existe) 
      if(!controllerName.hasOwnProperty("url") || !controllerName.executeHttpRequest){
        // si ce n'est pas le cas : warning en console
        console.log(`Attention: controller ${controllerName} invalide`);
        return;
      }
      // sinon
      // aller récupérer le code HTML (appeler la fonction fetch(url) qui renvoie une promesse)
      fetch(controllerName.url)
      .then((response) => response.text())
      .then((htmlString) => {
        // copier ce morceau de HTML dans la balise <main> du layout
        document.querySelector("main").innerHTML = htmlString;
        // invoquer la méthode executeHttpRequest du contrôleur (code JS qui s'exécutera une fois la vue partielle affichée)
        controllerName.executeHttpRequest();
      })

        }
    }
};


// L'application est exportée afin d'être accessible par d'autres modules.
export default app;