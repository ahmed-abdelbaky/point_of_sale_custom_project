odoo.define('pos_custom_module.clearBtn', function(require){
    'use strict';
    const { useListener } = require("@web/core/utils/hooks");
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');


    class clearAllButton extends PosComponent {
        setup(){
             super.setup();
             useListener('click', this.CustomBtnClick)

        }
        async CustomBtnClick(){

              const {confirmed}  =  await this.showPopup('ConfirmPopup',{
                title:'Confirm',
                body:'Are You Sure To Delete all Product?',
                confirmText:"YES",
                cancelText:"NO",
                });
               var order_line = this.env.pos.get_order();


//                console.log('$$$$$$$$$$', confirmBtnCustom)
                if (confirmed){
                        order_line.orderlines.filter(line=> line.get_product()).forEach(single_line=> order_line.remove_orderline(single_line))
                }else{
                        console.log("NO");
                }

                console.log("You are in Custom Button")
        }


    }
    clearAllButton.template = "ClearButtonCustomTemplate";
    ProductScreen.addControlButton({
        component: clearAllButton,
        position: ['after', 'OrderlineCustomerNoteButton'],

    })
    Registries.Component.add(clearAllButton);
    return clearAllButton;

});