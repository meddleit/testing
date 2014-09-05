.open(env + "/signin") 

.wait(wait)

.click('#fbConnectButton')

.wait(wait)

.type('#email' , fbUsername  ) 

.type('#pass' , fbPassword  ) 

.click('#u_0_1')

.wait(wait) 

.assert.url(env +"/" , "Redirected from facebook correctly")

.assert.text('header .name', "Dalek" , "User name visible in header")  

.open(env + "/logout.json")

.wait(wait)

//John can you confirm the dalek@johnshammas.com facebook account  

