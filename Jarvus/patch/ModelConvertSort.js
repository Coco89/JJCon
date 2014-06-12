Ext.define('Jarvus.patch.ModelConvertSort', {
	override: 'Ext.data.Model'
	
	// override provided to solve convert reordering issue.
	// see http://www.sencha.com/forum/showthread.php?196364-Ext-4.1-RC3-configuring-convert-function-on-model-field-changes-field-order
	,sortConvertFields: function(f1, f2) {
		return 0;
	}
});