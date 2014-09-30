.open (env + "/organization/meddle/edit/instructions")

.type("#inviteeSubject" , settingsValues.subject)

.submit("form[name='form']")

.refresh

.assert.val("#inviteeSubject" , settingsValues.subject)

.type("#inviteeEmail" , settingsValues.email)

.submit("form[name='form']")

.refresh

.assert.val("#description" , settingsValues.description)

.type("#landingPageDesc" , settingsValues.landing)

.submit("form[name='form']")

.refresh

.assert.val("#landingPageDesc" , settingsValues.landing)


.type("#inviteeTerms" , settingsValues.terms)

.submit("form[name='form']")

.refresh

.assert.val("#inviteeTerms" , settingsValues.terms)




