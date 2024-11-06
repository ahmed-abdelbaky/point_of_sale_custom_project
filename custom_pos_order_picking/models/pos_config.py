from odoo import models, fields, _
from odoo.exceptions import ValidationError, UserError


class PosConfig(models.Model):
    _inherit = 'pos.config'

    internal_picking_type_id = fields.Many2one('stock.picking.type', 'STC Operation Type')


class PosSession(models.Model):
    _inherit = 'pos.session'

    def _pos_data_process(self, loaded_data):
        super()._pos_data_process(loaded_data)
        loaded_data['internal_picking_type_id'] = self.config_id.internal_picking_type_id

    def action_pos_session_open(self):
        if not self.config_id.internal_picking_type_id:
            raise ValidationError(_("Please Enter STC Operation Type."))
        return super().action_pos_session_open()

    def action_pos_session_resume(self):
        if not self.config_id.internal_picking_type_id:
            raise ValidationError(_("Please Enter STC Operation Type."))
        return super().action_pos_session_resume()

class pos_config(models.Model):
    _inherit = 'pos.config'

    def open_ui(self):
        for config in self:
            if not config.internal_picking_type_id:
                raise ValidationError(_("Please Enter STC Operation Type."))
        return super(pos_config, self).open_ui()
