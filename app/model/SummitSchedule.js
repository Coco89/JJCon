Ext.define('JJCon.model.SummitSchedule', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'event', type: 'string'}, 
			{name: 'room', type: 'string'},
			{name: 'date', type: 'date'},
			{name: 'startTime'},
			{name: 'endTime'},
			{name: 'theme', type: 'string'},
			{name: 'order', type: 'int'}
			]
	}
});