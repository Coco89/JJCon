Ext.define('JJCon.view.MenuList', {
	extend: 'Ext.List',
	xtype: 'menulist',
	
	config: {
		title: '<img src="resources/images/logo1.png" width=252>',
		store: 'MenuItems',
		ui: 'round',
		itemTpl: '<h1>{title}</h1><div class=theme><p>{subtitle}</p></div>',
		grouped: true,
		onItemDisclosure: Ext.emptyFn
    }

});
