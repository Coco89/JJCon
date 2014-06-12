/*jslint browser: true, undef: true, white: false, laxbreak: true *//*global Ext,JJCon*/
Ext.Loader.setConfig({
	enabled: true

	,paths: {
		Jarvus: 'Jarvus/'
		,Ext: 'sdk/src/'
//		,'Ext.ux': '/x/ux'
	}
});

Ext.application({
	name: 'JJCon'
	,appFolder: 'app/'
	,requires: [
		'Jarvus.patch.ModelConvertSort'
	]
	
	,controllers: ['Main']

    ,viewport: {
        autoMaximize: true
    }
	
	,launch: function() {
		// add main screen to global viewport (usually your navigationview)
//		Ext.Viewport.add({
//			xtype: 'groupslist'
//		});
		
		// size viewport for accurate previewing on desktop browsers
		if (Ext.os.is.Desktop && !location.search.match(/fullscreen/))
		{
			Ext.defer(function() {
				Ext.getBody().setSize(320, 460).setStyle('margin', 'auto');	
			}, 50);
		}
	}
	
	// silently pushes URL to history, used to enforce current location when navigation happens in a non-route way (e.g. tabs and navview)
	,pushUrl: function(url) {
		this.getHistory().add(Ext.create('Ext.app.Action', {url: url}), true);
	}
});