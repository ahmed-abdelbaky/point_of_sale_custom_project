/** @odoo-module **/

import {PosGlobalState} from 'point_of_sale.models';
import registries from "point_of_sale.Registries";
import PaymentScreen from 'point_of_sale.PaymentScreen';
import { isConnectionError } from 'point_of_sale.utils';


const PosModelRestrict = (PosGlobalState)=> class PosModelRestrict extends PaymentScreen{

        async _processData(loadedData) {
        await super._processData(...arguments);
        this.internalOperation = loadedData['internal_picking_type_id']
        if (!this.internalOperation){
          this.showPopup('ErrorPopup',{
                title: 'Validation Error',
                body: 'Please Enter STC Operation Type.',
                })

        }
}
}
registries.Model.extend(PosGlobalState, PosModelRestrict);
