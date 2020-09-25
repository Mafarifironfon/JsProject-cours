class LoginController {
    constructor() {
      // Chemin vers la view HTML reliée à ce controlleur
      this.url = "views/login.html";
    }
  
    /*
     * Code exécuté après l'injection de la vue dans le DOM :
     * il est donc possible installer des gestionnaires d'évènements sur la vue qui vient de se charger, etc.
     */
    executeHttpRequest() {
      // Pas de code particulier à exécuter.
      console.log("Hey! Bienvenue sur la page 'login'!");
  
      // TODO interagir avec firebase
  
      document.querySelector("#githubLogin").addEventListener("click", () => {
        var provider = new firebase.auth.GithubAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            // The signed-in user info.

            const user = result.user;
            document.querySelector("#userState").innerHTML = `
            <a class="nav-link" href="/#/login">${user.email}
            <img class="img-thumbnail" src="${user.photoURL}" alt="${user.email}">
            </a>
            `;
            console.log(user);
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
      });
    }
  }
  
  // La classe est exportée afin d'être accessible par d'autres modules.
  export default LoginController;