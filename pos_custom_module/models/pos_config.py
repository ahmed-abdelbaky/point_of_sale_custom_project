from odoo import models, fields


class PosConfig(models.Model):
    _inherit = 'pos.config'

    allow_delete = fields.Boolean('Allow to delete Order')



class PosSession(models.Model):
    _inherit = 'pos.session'

    def _pos_data_process(self, loaded_data):
        super()._pos_data_process(loaded_data)
        loaded_data['allow_delete'] = self.config_id.allow_delete
