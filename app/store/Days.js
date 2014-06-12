Ext.define('JJCon.store.Days', {
	extend: 'Ext.data.Store',
	requires: [
		'JJCon.model.Day'
	],
	
	config: {
		model: 'JJCon.model.Day',
		grouper: {
			groupFn: function (record) {
				return record.get('section');
			}
		},
		data: [
			{ section: 'Days', date: '2012-07-23', theme: '75 Years Living The Legacy', tagline: '75th Grand Opening'},
			{ section: 'Days', date: '2012-07-24', theme: '75 Years Living The Legacy', tagline: ''},
			{ section: 'Days', date: '2012-07-25', theme: 'Wake up Everybody', tagline: ''},
			{ section: 'Days',  date: '2012-07-26', theme: 'Mighty Love', tagline: ''},
			{ section: 'Days',  date: '2012-07-27', theme: 'Livin\' for the Weekend', tagline: ''},
			{ section: 'Days',  date: '2012-07-28', theme: 'Family Affair', tagline: ''},
			{ section: 'Days',  date: '2012-07-29', theme: 'Ain\'t No Stoppin\' Us Now', tagline: ''}

		]
	}
});