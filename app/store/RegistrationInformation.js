Ext.define('JJCon.store.RegistrationInformation', {
	extend: 'Ext.data.Store',
	requires: [
		'JJCon.model.RegistrationInformation'
	],
	
	config: {
		model: 'JJCon.model.RegistrationInformation',
		groupDir: 'DESC',
		grouper: {
			sortProperty: 'order',
			groupFn: function (record) {
				return record.get('section');
			}
		},
		data: [
			{ html: '1. All mother members will be required to show a valid ID at registration before receiving your registration materials.', section: 'Important Facts About Registration'},
			{ html: '2. Each member must pick-up her own registration materials. However, if you have registered your spouse, child and/or teen, their registration packets will be included with your materials.', section: 'Important Facts About Registration'},
	        { html: '3. A medical liability form must be completed for each registered child and teen. Members who have not completed this form will be unable to received their registration materials until a form is completed and file with the registration committee.', section: 'Important Facts About Registration'},
	        { html: '4. Onsite registration or ticket purchases will be NOT be available.', section: 'Important Facts About Registration'},
	        { html: '<b>Tuesday:</b><br><br>12:00 - 2:00 (pre-registration for national officers, convention chairs & leadership academy attendees)<br><br>2:00 - 7:00 pm (registration opens)', section: 'Registration Schedule for Level 5'},
	        { html: '<b>Wednesday:</b><br><br>7:00 am  - 10:00 am (Vendors and Volunteers)<br><br>8:00 am - 7:00 pm (registration opens)', section: 'Registration Schedule for Level 5'},
			{ html: '<b>Thursday:</b><br><br>8:00 am - 3:00 pm (registration opens)', section: 'Registration Schedule for Level 5'},
			{ html: '<b>Friday & Saturday</b><br><br>All remaining registration materials will move to the national business office.', section: 'Registration Schedule for Level 5'}
		]
	}
});