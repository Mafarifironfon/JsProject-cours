import app from './app.js';
import HomeController from "../controllers/HomeController.js";
import AboutController from "../controllers/AboutController.js";
import SearchController from "../controllers/SearchController.js";
import LoginController from "../controllers/LoginController.js";
import config from './config.js';

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
        let router = new Router({
            mode: 'hash',
            page404: function (path) {
                console.log('"/' + path + '" Page not found');
            }
        });
         
        router.add('', function () {
            app.mvc.dispatchUrl(new HomeController())
        });
    
        router.add('search', function () {
            app.mvc.dispatchUrl(new SearchController())
        });
    
        router.add('about', function () {
            app.mvc.dispatchUrl(new AboutController())
        });
    
        router.add('login', function () {
            app.mvc.dispatchUrl(new LoginController())
        });    

        router.addUriListener();
        router.navigateTo("");
}


// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();

    firebase.initializeApp(config.firebase);
});