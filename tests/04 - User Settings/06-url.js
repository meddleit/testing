.open (env + "/user/edit/url")
.type("#vanity" , settingValues.url)
.click("#btn")
.click(".fauxdropdown menu-user ng-scope")
.click(".to-profile")
.wait(wait)
.assert.url(env + "/GregTest2")

