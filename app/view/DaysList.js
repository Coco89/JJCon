Ext.define('JJCon.view.DaysList', {
	extend: 'Ext.List',
	xtype: 'dayslist',
	
	config: {
		store: 'Days',
		ui: 'round',
		itemTpl: '<h1>{date:date("l, F j, Y")}</h1><p>{tagline}</p><div class="theme"><p>Theme: {theme}</p></div>',
		onItemDisclosure: Ext.emptyFn,
		items: {
			xtype: 'title',
			title: '<div class=daysheader>Days</div>',
			style: {

			}
		}
	}
});