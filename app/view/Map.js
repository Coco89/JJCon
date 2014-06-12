Ext.define('JJCon.view.Map', {
	extend: 'Ext.Container',
	xtype: 'hotels',

	requires: 'Ext.Map',
	
	config: {
			title: 'Hotel',
			layout: {
				type: 'vbox'	
			},
			items: [{
				xtype: 'map',
				flex: 1,
				listeners: {
					maprender: {
						fn: function(mapView, gMap) {
							var infoBox = new InfoBox({
								pixelOffset: new google.maps.Size(-50, -150),
								infoBoxClearance: new google.maps.Size(10, 50)
							});
	//						var bubble = new google.maps.InfoWindow();
							var marker = new google.maps.Marker({
								position: new google.maps.LatLng(39.954491, -75.160475),
								title: 'place'
							});
							marker.setMap(gMap);
	//						bubble.setContent('<h1><b>Philadelphia Marriott Downtown</b></h1><a href="https://maps.google.com/maps?q=1201+market+street,+philadelphia,+pa&ie=UTF-8&hq=&hnear=0x89c6c62931c74afb:0x60a7b33093645df3,1201+Market+St,+Philadelphia,+PA&gl=us&ei=U4L8T6yvAqnk0QHNiajrBg&ved=0CAgQ8gEwAA">1201 Market Street<br>Philadelphia, Pa 19107</a><br><a href="tel:+12156252900">(215) 625-2900</a>');
	//						bubble.open(gMap, marker);
							infoBox.setContent('<h1><b>Philadelphia Marriott Downtown</b></h1><a href="https://maps.google.com/maps?q=1201+market+street,+philadelphia,+pa&ie=UTF-8&hq=&hnear=0x89c6c62931c74afb:0x60a7b33093645df3,1201+Market+St,+Philadelphia,+PA&gl=us&ei=U4L8T6yvAqnk0QHNiajrBg&ved=0CAgQ8gEwAA">1201 Market Street<br>Philadelphia, Pa 19107</a><br><a href="tel:+12156252900">(215) 625-2900</a>');
							infoBox.open(gMap, marker);
						},
						delay: 500
					}
				
				},
				mapOptions: {
					zoom: 15,
					center: new google.maps.LatLng(39.954491, -75.160475)
				}
				
//			},{
//				xtype: 'component',
//				styleHtmlContent: true,
//				html: 'Philadelphia Marriott Downtown<br><a href="https://maps.google.com/maps?q=1201+market+street,+philadelphia,+pa&ie=UTF-8&hq=&hnear=0x89c6c62931c74afb:0x60a7b33093645df3,1201+Market+St,+Philadelphia,+PA&gl=us&ei=U4L8T6yvAqnk0QHNiajrBg&ved=0CAgQ8gEwAA">1201 Market Street<br>Philadelphia, Pa 19107</a><br>(215) 625-2900<br><br>For questions regarding your reservation, please call:<br>1-877-212-5752'	
			}]
	}

});