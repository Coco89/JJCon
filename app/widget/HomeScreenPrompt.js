Ext.define('JJCon.widget.HomeScreenPrompt', {
	extend: 'Ext.Container'
	,xtype: 'homescreenprompt'
	
	,config: {
		baseCls: 'home-screen-prompt'
		,top: 0
		,left: 0
		,width: '100%'
		,height: '100%'
		,showAnimation: 'fadeIn'
		,hideAnimation: 'fadeOut'
		,layout: {
			type: 'vbox'
			,pack: 'end'
			,align: 'center'
		}
		,items: [{
			xtype: 'component'
			,cls: 'banner'
			,html: '<img src="resources/images/icon.png">'
				 + '<div class="separator"></div>'
				 + '<div class="text">Add Jack & Jill to your home screen for the best experience.</div>'
		},{
			xtype: 'component'
			,cls: 'arrow'
			,html: '&darr;'
		}]
	}
	
	,initialize: function() {
		this.callParent(arguments);
		this.element.on('tap', function() {
			this.hide({
				type: 'fadeOut'
				,listeners: {
					scope: this
					,animationend: function() {
						this.destroy();
					}
				}
			});
		}, this);
	}
})