/** @odoo-module **/

import {PosGlobalState} from 'point_of_sale.models';
import registries from "point_of_sale.Registries";


const PosModelRestrict = (PosGlobalState)=> class PosModelRestrict extends PosGlobalState{

        async _processData(loadedData) {
        await super._processData(...arguments);
        this.posRestrictBtn = loadedData['allow_delete']
}
}
registries.Model.extend(PosGlobalState, PosModelRestrict);