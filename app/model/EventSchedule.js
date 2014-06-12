Ext.define('JJCon.model.EventSchedule', {
	extend: 'Ext.data.Model',
	

	config: {
		fields: [
			{name: 'event', type: 'string'},
			{name: 'date', type: 'date', dateFormat: 'n-j-Y'},
			{name: 'startTime', convert: function(value, record) {
				return Ext.Date.parse(record.raw[1] + ' ' +value, 'n-j-Y G:i:s');
			}},
			{name: 'endTime', convert: function(value, record) {
				return Ext.Date.parse(record.raw[1] + ' ' +value, 'n-j-Y G:i:s');
			}},
			{name :'room', type: 'string'},
			{name: 'attendee', type: 'string'},
			{name: 'attire', type: 'string'}
		]
	}
});
