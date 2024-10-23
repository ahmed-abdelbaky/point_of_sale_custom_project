{
    'name': 'Point Of Sale First Module Custom',
    'Author': 'Ahmed Abd El Baky',
    'data':[
        'views/pos_config.xml',
    ],
    'depends':['point_of_sale'],
    'insatallable': True,
    'auto_install': False,
    'license': 'AGPL-3',
    'assets':{
        'point_of_sale.assets':[
            'pos_custom_module/static/src/js/pos.js',
            'pos_custom_module/static/src/js/config.js',
            'pos_custom_module/static/src/xml/template.xml',
            'pos_custom_module/static/src/xml/config.xml',
        ],

    },
}