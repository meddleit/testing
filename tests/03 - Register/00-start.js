"User Settings": function(test) {
	var currentDate = new Date();
	var settingsValues = {
		jobTitle: "jobTitle-"+currentDate.getTime(),
		company: "company-"+currentDate.getTime(), 
		country: "country-"+currentDate.getTime(), 
		state: "state-"+currentDate.getTime(), 
		zip: "zip-"+currentDate.getTime(), 
		about: "about-"+currentDate.getTime(), 

		
	};
	
	//.type("#field", settingsValues.company)

	test
