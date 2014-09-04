.open (env + "/user/edit/personalinfo")

.wait(wait)

.type("#title", settingsValues.jobTitle)

.submit("form[name='usereditform']") 

.refresh()

.wait(wait)

.assert.val("#title", settingsValues.jobTitle)

