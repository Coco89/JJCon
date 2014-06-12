Ext.define('JJCon.store.MenuItems', {
	extend: 'Ext.data.Store',
	requires: [
		'JJCon.model.MenuItem'
	],
	
	config: {
		model: 'JJCon.model.MenuItem',
		groupDir: 'DESC',
		grouper: {
			groupFn: function (record) {
				return record.get('section');
			}
		},
		data: [
			{ title: 'Mothers', section: 'Schedule' },
	        { title: 'Youth', section: 'Schedule' },
	        { title: 'Teens', section: 'Schedule' },
	        { title: 'Fathers', section: 'Schedule' },
	        { title: 'Associates', section: 'Schedule'},
			{ title: 'Teen Summit', section: 'Schedule', subtitle: 'Tuesday, July 24, 2012'},
			{ title: 'Welcome from the President', section: 'Information', xtype: 'welcome'},
			{ title: 'Hotel Information', section: 'Information', xtype: 'hotels'},
			{ title: 'Registration', section: 'Information', xtype: 'registration'}
		]
	}
});