const GetLocateur  = require('../../mapping/fonctions/locateurs');
const AttendreSecondes  = require('../navigation/attendreSecondes');

/**
 * Cliquer sur un bouton dans un iframe
 * @param  {String} locateur - locateur de l'element dans lequel cliquer
 * @param  {String} page - locateur de la page dans lequel cliquer
 */

module.exports = async function cliquerSur(page, locateur) {
    console.log("fonction cliquerSur");
  
    try {
        const aliasLocateur = locateur;
        locateur          = GetLocateur(aliasLocateur);
        const element       = await page.locator(locateur);
        console.log(element);

        let i =0;
        let elementVisible = false;
        while(elementVisible == false && i<7) {
            console.log("ok");
            await page.waitForTimeout(1000);
            elementVisible = await element.isVisible();
            if(elementVisible == true) {
                break;
            }
            i++;
        }
    
        if(elementVisible == true) {  
            await element.click();
        } else {
            throw Error("\n      Echec dans le click sur l'element, '" + aliasLocateur + "' n'est pas affiche \n");
        }
    
    } catch(error) {
        throw Error(error);
    }
}


















//const { test, expect } = require('@playwright/test');
//const GetLocateur  = require('../../mapping/fonctions/locateurs');
//import getLocateur from '../../mapping/fonctions/locateurs'
//import scrollerElement from '../navigation/scrollerElement';

//const attendreSecondes = require('../navigation/attendreSecondes');
//import attendreSecondes from '../navigation/attendreSecondes';
//import actualiserPage from '../navigation/actualiserPage';


/*class CliquerSur{
    constructor(page){
        //this.page = page;
        this.cookiesclass = "#uc-btn-accept-banner";
        this.locateur = "";
    }

    async maMethode(page) {
        const GetLocateur  = require('../../mapping/fonctions/locateurs');
        //let getLocateur = null;
        //getLocateur = new GetLocateur(); 
        GetLocateur();

  
        console.log("reussite");
        //console.log(getLocateur);
        let cookie = await page.locator(this.cookiesclass);
        await cookie.click();
        /*try {
            async () =>  {
                await getLocateur.maMethode(page);

            //const aliasLocateur = locateur;
            //this.locateur            = getLocateur(aliasLocateur);
            
            //const element       = await page.locator(this.locateur);
    
            /*const aliasLocateur = locateur;
            locateur            = getLocateur(aliasLocateur);
            const element       = await $(locateur);*/
            //await element.click();
            //}
    
        /*} catch(error) {
            throw Error(error);
        }*/

    //};
//}

//module.exports = CliquerSur

