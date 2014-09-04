"User Settings": function(test) {
	var currentDate = new Date();
	var settingsValues = {
		jobTitle: "jobTitle-"+currentDate.getTime(),
		company: "company-"+currentDate.getTime()
	};
	
	//.type("#field", settingsValues.company)

	test
