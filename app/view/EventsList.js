Ext.define('JJCon.view.EventsList', {
	extend: 'Ext.List',
	xtype: 'eventslist',
	
	config: {
		store: 'EventsSchedules',
		itemTpl: '<div class=eventattire><h2>{event}</h2><p class=attire><span><br class="smallBR" />{attire}</span></p></div><div class=room><p><span>{room}</span></p></div>',
		grouped: true
	}
});