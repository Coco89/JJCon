Ext.define('JJCon.store.SummitSchedules', {
	extend: 'Ext.data.Store',
	requires: [
		'JJCon.model.SummitSchedule'
	],
	
	config: {
		model: 'JJCon.model.SummitSchedule',
		grouped: true,
		grouper: {
			sortProperty: 'order',
			groupFn: function (record) {
					return record.get('startTime') + "&ndash;" + record.get('endTime');
			}
		},
		data: [
			{ event: '2012 JMB Team Leadership Summit', room: 'Liberty Ballroom - Pre Function', startTime: '8:30 AM', endTime: '9:00 AM', theme: 'Aim To Live, Lead & Succeed', date: '2012-7-24', order: '1' },
			{ event: '2012 JMB Team Leadership Summit', room: 'Liberty Ballroom', startTime: '9:00 AM', endTime: '11:45 AM', theme: 'Aim To Live, Lead & Succeed', date: '2012-7-24', order: '2'},
			{ event: '2012 JMB Team Leadership Summit', room: 'Liberty Ballroom', startTime: '12:00 PM', endTime: '1:00 PM', theme: 'Aim To Live, Lead & Succeed', date: '2012-7-24', order: '3'},
			{ event: '2012 JMB Team Leadership Summit', room: 'Franklin Room', startTime: '1:00 PM', endTime: '4:00 PM', theme: 'Aim To Live, Lead & Succeed' , date: '2012-7-24', order: '4'},
			{ event: '2012 JMB Team Leadership Summit', room: 'Franklin Room', startTime: '4:00 PM', endTime: '6:00 PM', theme: 'Aim To Live, Lead & Succeed' , date: '2012-7-24', order: '5'}
		]
	}
});