.open(env + "/signin") 

.wait(wait)

.click('#inConnectButton')

.wait(wait)

.type('input[name="session_key"]' , inUsername  ) 

.type('input[name="session_password"]' , inPassword  ) 

.click('#u_0_1')

.wait(wait) 

.assert.url(env +"/" , "Redirected from Linkedin correctly")

.assert.text('header .name', "Dalek" , "User name visible in header")  

.open(env + "/logout.json")

.wait(wait)


