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
//                title: this.env._t('Offline Error'),
//                body: this.env._t('Test'),
//                })
                const {confirmed, payload:selectedOption } = await this.showPopup('SelectionPopup', {
                title: 'Are You JS Developer',
                list: [{'id':0, 'label': this.env._t('Yes'), 'item':'Yes'},
                {'id':1, 'label': this.env._t('No'), 'item':'No'}]
                });
                console.log("You are in Custom Button")
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