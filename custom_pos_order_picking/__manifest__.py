{
    'name': 'Pos Order Picking Custom',
    'Author': 'Ahmed Abd El Baky',
    'Description': "add new template on pos config and add new field many2one operation type ,"
                   "and check product in pos order if it is charge Card make internal transfer picking automica not pos picking",
    'depends':['point_of_sale'],
    'data':[
        'views/pos_config.xml',
    ],
    # 'assets':{
    #     'point_of_sale.assets':[
    #         'custom_pos_order_picking/static/srs/js/config.js',
    #     ],
    # },
    'installable': True,
    'auto_install': False,
    'license': 'AGPL-3',
}