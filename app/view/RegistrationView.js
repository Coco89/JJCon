Ext.define('JJCon.view.RegistrationView', {
	extend: 'Ext.List',
	xtype: 'registration',
	
	config: {
		title: 'Registration',
		store: 'RegistrationInformation',
		idexbar: true,
//		ui: 'plain',
		itemTpl: '<div class=text><h6>{html}</h6></div>',
		grouped: true,
		grouper: {
			groupFn: function (record) {
				return record.get('section');
			}
		}
//		onItemDisclosure: Ext.emptyFn
    }

});