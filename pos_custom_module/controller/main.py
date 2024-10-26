from odoo import  http


class posrpcController(http.Controller):

    @http.route('/pos/rpc/test', auth='user', type='json')
    def fetch_data(self, **kwargs):
        result = http.request.env['res.lang'].search_read([])
        return result