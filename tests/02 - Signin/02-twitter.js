.open(env + "/signin") 

.wait(wait)

.click('#twConnectButton')

.wait(wait)

.type('#username_or_email' , twUsername  ) 

.type('#password' , twPassword  ) 

.click('#allow')

.wait(wait) 

.assert.url(env +"/" , "Redirected from twitter correctly")

.assert.text('header .name', "Dalek" , "User name visible in header")  

.open(env + "/logout.json")

.wait(wait)