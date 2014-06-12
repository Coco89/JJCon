Ext.define('JJCon.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['JJCon.widget.HomeScreenPrompt'],

    config: {
		views: ['Main', 'MenuList', 'DaysList', 'Welcome', 'TeenSummit', 'EventsList', 'Map', 'RegistrationView'],
		stores: ['MenuItems', 'Days', 'SummitSchedules', 'EventsSchedules', 'RegistrationInformation'],
		refs: {
			mainView: {
				selector: 'mainview',
				autoCreate: true,
				
				xtype: 'mainview'
			},
			daysList: {
				selector: 'dayslist',
				autoCreate: true,
				
				xtype: 'dayslist'
			},
			eventsList: {
				selector: 'eventslist',
				autoCreate: true,
				
				xtype: 'eventslist'
			}

			
		},
		control: {
			menulist :{
			itemtap : 'onMenuItemTap'
			},
			dayslist:{
			itemtap: 'onDaysListTap'
			}
		}
		},
    
    launch: function() {
		Ext.Viewport.add(this.getMainView());
		
		var showHomeScreenPrompt = Ext.os.is.iOS && !window.navigator.standalone && !Ext.browser.is.WebView && Ext.os.deviceType != "Tablet";
		
		if(showHomeScreenPrompt)
					this.getMainView().add({xtype:'homescreenprompt'});
	
    },
    
    onMenuItemTap: function(menuList, index, target, record) {

		
		if (record.get('section') == 'Information')
		{

			this.getMainView().push({
				xtype: record.get('xtype')	
			});
		}
		
		else if (record.get('title') == 'Teen Summit')
		{
			this.getMainView().push({
			xtype: 'teenSummit'
			});
		}
		
		else
		{
			var daysList = this.getDaysList()
				,attendee = record.get('title')
				,dateTotals = {}, date
				,scheduleStore = Ext.getStore('EventsSchedules');
				
			daysList.config.title = attendee;
			scheduleStore.clearFilter(true);
			scheduleStore.each(function(event) {
				if(attendee == event.get('attendee'))
				{
					date = Ext.Date.format(event.get('date'), 'Y-m-d');
					if(dateTotals[date])
						dateTotals[date]++;
					else
						dateTotals[date] = 1;
				}
			});
			daysList.getStore().clearFilter(true);
			daysList.getStore().filterBy(function(record){
				return dateTotals[Ext.Date.format(record.get('date'),'Y-m-d')] > 0;
			} );
			this.getMainView().push(daysList);
		}
    },
    onDaysListTap: function(daysList, index, target, dayRecord, title) {
		var eventsList = this.getEventsList()
			,attendee = daysList.config.title
			,eventDay = dayRecord.get('date').getDay()
			,store = eventsList.getStore();
			
		eventsList.config.title = Ext.Date.dayNames[eventDay];
		store.clearFilter(true);
		store.filterBy(function(event){
		    return attendee == event.get('attendee') && dayRecord.get('date').getFullYear() == event.get('date').getFullYear() && dayRecord.get('date').getDay() == event.get('date').getDay() && dayRecord.get('date').getMonth() == event.get('date').getMonth();
		});
		
		this.getMainView().push(eventsList);
		
    }
    
});