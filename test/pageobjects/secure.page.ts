import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class ElEconomistaPage extends Page {
    //GETTERS
    get sidebarButton () {
        return $('// button [contains(@aria-label,"Toggle navigation")]');
    }
    get mercadosSection() {
        return $('// a [contains(.,"  Mercados")]');
    }
    get iMundialSection() {
        return $('// a [contains(.,"Índices mundiales")]');
    }
    get euroTable() {
        return $('// h3 [contains(.,"Europa")]');
    }
    get tableValues() {
        return $$('td .accion-1');
    }
}

export default new ElEconomistaPage();
