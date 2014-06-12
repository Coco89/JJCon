Ext.define('JJCon.model.Day', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'section', type: 'string'},
			{name: 'date', type: 'date', dateFormat: 'Y-m-d'},
			{name: 'theme', type: 'string'},
			{name: 'tagline', type: 'string'}
			]
	}
});