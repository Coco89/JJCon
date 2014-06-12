Ext.define('JJCon.view.TeenSummit', {
	extend: 'Ext.List',
	xtype: 'teenSummit',
	
	config: {
		title: 'Teen Summit',
		store: 'SummitSchedules',
		idexBar: true,
		itemTpl: '<div class=event><h2>{event}</h2></div><div class=room><p><span>{room}</span></p></div>',
		grouped: true,
		grouper: {
			groupFn: function (record) {
				return record.get('startTime');
			}
		}
    }

});
