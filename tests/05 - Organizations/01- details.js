.open (env + "/organization/meddle/edit/details")

.wait(wait) 

.type("#name" , settingsValues.organizationName)

.submit("form[name='form']")

.refresh

.assert.val("#name", settingsValues.organizationName)

.type("input[name='vanity'] , settingsValues.vanity)

.submit("form[name='form']")

.refresh

.assert.val("input[name='vanity'] , settingsValues.vanity)

.type("input[name='notificationEmail'] , settingsValues.email)

.submit("form[name='form']")

.refresh

.assert.val("input[name='notificationEmail'] , settingsValues.email)

.type("#description" , settingsValues.description)

.submit("form[name='form']")

.refresh

.assert.val("#description" , settingsValues.description)

.type("#twitterhandle" , settingsValues.twitter)

.submit("form[name='form']")

.refresh

.assert.val("#twitterhandle" , settingsValues.twitter)




