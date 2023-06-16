import LoginPage from '../pageobjects/login.page.js';
import ElEconomistaPage from '../pageobjects/eleconomista.page.js';

let ibexValue;
let beValue;
let ukValue;

function sortValues() {
    for(let i = 0; i < 3; i++) {
        if(ibexValue > beValue && ibexValue > ukValue) {
            console.log(ibexValue);
            ibexValue = 0;
        }
        if(beValue > ibexValue && beValue > ukValue) {
            console.log(beValue);
            beValue = 0;
        }
        if(ukValue > ibexValue && ukValue > beValue) {
            console.log(ukValue);
            ukValue = 0;
        }
        if(ukValue == 0 && ibexValue == 0 && beValue == 0) {
            break;
        }
    }
}

describe('My Login application', () => {
    it('Open the page of El Economista', async () => {
        await LoginPage.open();
        await browser.pause(3000);
        await ElEconomistaPage.cookiesBtn.waitForClickable();
        await ElEconomistaPage.cookiesBtn.click();
        await browser.pause(2000);
        await expect(ElEconomistaPage.sidebarButton).toBeClickable();
    });

    it('Navigating to the desired section', async () => {
        await ElEconomistaPage.sidebarButton.click();
        await expect(ElEconomistaPage.mercadosSection).toBeDisplayed();
        await ElEconomistaPage.mercadosSection.click();
        await expect(ElEconomistaPage.iMundialSection).toBeDisplayed();
        await ElEconomistaPage.iMundialSection.click();
        await browser.pause();
        await ElEconomistaPage.euroTable.scrollIntoView();
        await expect(ElEconomistaPage.euroTable).toBeDisplayed();
    });

    it('Getting the needed values', async () => {
        await expect(ElEconomistaPage.tableValues[0]).toBeDisplayed();
        ibexValue = await ElEconomistaPage.tableValues[0].getText();
        beValue = await ElEconomistaPage.tableValues[4].getText();
        ukValue = await ElEconomistaPage.tableValues[8].getText();
    });

    it('Displaying the obtained values', async () => {
        await sortValues();
    });
});
