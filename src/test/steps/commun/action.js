const {Before, After, Given, When, Then, AfterAll} = require('@cucumber/cucumber');
const CliquerSur = require('../../support/commun/action/cliquerSur');
const CliquerSurIframe = require('../../support/commun/action/cliquerSurIframe');
const SaisirTexte = require('../../support/commun/action/saisirTexte');
const SaisirTexteIframe = require('../../support/commun/action/saisirTexteIframe');
const CliquerSurSelecteur = require('../../support/commun/action/cliquerSurSelecteur');
const CliquerSurSelecteurIframe = require('../../support/commun/action/cliquerSurSelecteurIframe');
const SelectionnerCurseur = require('../../support/commun/action/selectionnerCurseur');
const TaperTouche = require('../../support/commun/action/taperTouche');
const Cocher = require('../../support/commun/action/cocher');


//const AccederSite = require('../../support/commun/navigation/accederSite');

//let page;
//let iframe;

/*Before({timeout: 25000}, async function () {
    let url = "https://www.audi.fr/"
   ge sert pour le page.screenshot dans after
    page = await AccederSite(url) //pa
    let cookies = "Page - Cookies - Page d'accueil"
    await CliquerSur(page, cookies)  
})

After(async function (scenario) {
    //screenshot si erreur
    if (scenario.result.status === 'FAILED') {
    const screenshotPath = `./reporting/screenshots/${scenario.pickle.name}.png`
    const img = await page.screenshot({ path: screenshotPath });
    await this.attach(img, 'image/png');
    }
    //fermeture navigateur et page
    await page.close();
    await browser.close()   
});*/



Given(/^Je clique sur "(.*)"$/, {timeout: 25000}, async (locateur, ) =>  {
    await CliquerSur(page, locateur)
});

Given(/^Je clique sur "(.*)" dans l'iframe$/, {timeout: 25000}, async (locateur) =>  {
    await CliquerSurIframe(iframe, locateur);
});

Given(/^Je clique sur le choix "(.*)" du selecteur "(.*)"$/, {timeout: 25000}, async (choixSelecteur, locateurSelecteur) =>  {
    await CliquerSurSelecteur(page, choixSelecteur, locateurSelecteur);
});

Given(/^Je clique sur le choix "(.*)" du selecteur "(.*)" dans l'iframe$/, {timeout: 25000}, async (choixSelecteur, locateurSelecteur) =>  {
    await CliquerSurSelecteurIframe(iframe, choixSelecteur, locateurSelecteur);
});

Given(/^Je saisis "(.*)" dans le champ "(.*)"$/, {timeout: 25000}, async (texteASaisir,locateur) =>  {
    await SaisirTexte(page, texteASaisir, locateur)
});

Given(/^Je saisis "(.*)" dans le champ "(.*)" dans l'iframe$/, {timeout: 25000}, async (texteASaisir,locateur) =>  {
    await SaisirTexteIframe(iframe, texteASaisir,locateur);
});

Given(/^Je tape sur la touche du clavier "([^"]*)?"$/, {timeout: 30000}, async (toucheClavier) =>  {
    await TaperTouche(page, toucheClavier)
});

Given( /^Je selectionne "(.*)" dans le curseur "(.*)"$/, {timeout: 25000}, async (nombre, locateur) =>  {  
    await SelectionnerCurseur(page, nombre, locateur);
});

Given( /^Je selectionne "(.*)" dans le curseur "(.*)" dans l'iframe$/, {timeout: 25000}, async (nombre, locateur) =>  {  
    await SelectionnerCurseur(iframe, nombre, locateur);
});

Given(/^Je coche la case "(.*)"$/,async (locateur) =>  {
    await Cocher(page, locateur)
});

Given(/^Je coche la case "(.*)" dans l'iframe$/,async (locateur) =>  {
    await Cocher(iframe, locateur)
});