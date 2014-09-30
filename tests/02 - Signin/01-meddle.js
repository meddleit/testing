.type('input[name="hm_name"]' , basicUsername) 

.type('input[name="hm_password"]' , basicPassword) 

.click('.sign-in-form button[type="submit"]') 

.wait(wait) 

.assert.url(env +"/" , 'Redirected to homepage')

.assert.text('header .name' , firstName , 'Name seen in navbar is correct')   

.open(env +"/logout.json") 

.wait(wait)
