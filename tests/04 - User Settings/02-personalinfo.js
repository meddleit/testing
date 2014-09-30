.open (env + "/user/edit/personalinfo")

.wait(wait)

.type("#title", settingsValues.jobTitle)

.submit("form[name='usereditform']") 

.refresh()

.wait(wait)

.assert.val("#title", settingsValues.jobTitle)

//Need to find way to delete the inputed title; possibly using special character (backspace) 

.type("#company", settingValues.company)  

.submit("form[name='userreditform']'")

.refresh()

.wait(wait) 

.assert.val("#company", settingsValues.company) 

.type("#country", settingValues.country)  

.submit("form[name='userreditform']'")

.refresh()

.wait(wait) 

.assert.val("#country", settingsValues.country) 

.type("#state", settingValues.state)  

.submit("form[name='userreditform']'")

.refresh()

.wait(wait) 

.assert.val("#state", settingsValues.state)

.type("#zipcode", settingValues.zip)  

.submit("form[name='userreditform']'")

.refresh()

.wait(wait) 

.assert.val("#zipcode", settingsValues.zip)

.type("#about", settingValues.about)  

.submit("form[name='userreditform']'")

.refresh()

.wait(wait) 

.assert.val("#about", settingsValues.about) 

 

 


