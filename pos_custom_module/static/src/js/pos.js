odoo.define('pos_custom_module.pos', function(require){
    'use strict';
    const { useListener } = require("@web/core/utils/hooks");
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');


    class posCustomButton extends PosComponent {
        setup(){
             super.setup();
             useListener('click', this.CustomBtnClick)

        }
        async CustomBtnClick(){
//                this.showPopup('ErrorPopup',{
//                title: 'Error',
//                body: 'You are Not allow to use this button',
//                })
//              const confirmBtnCustom  =  await this.showPopup('ConfirmPopup',{
//                title:'Confirm',
//                body:'Are You Sure To Confirm?',
//                confirmText:"YES",
//                cancelText:"NO",
//                });
//                if (confirmBtnCustom){
//                        console.log("Yes");
//                }else{
//                        console.log("NO");
//                }
//                this.showPopup('OfflineErrorPopup',{
//                title:'Offline Error',
//                body:'Test',
//                })
                const {confirmed, payload:selectedOption } = await this.showPopup('SelectionPopup', {
                title: 'Are You JS Developer',
                list: [{'id':0, 'label': 'Yes', 'item':'Yes'},
                {'id':1, 'label': 'No', 'item':'No'}]
                });
                console.log("You are in Custom Button", selectedOption)
        }


    }
    posCustomButton.template = "customButtonTemplate";
    ProductScreen.addControlButton({
        component: posCustomButton,
        position: ['before', 'OrderlineCustomerNoteButton'],

    })
    Registries.Component.add(posCustomButton);
    return posCustomButton;

});