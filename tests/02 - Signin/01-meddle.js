.type('input[name="hm_name"]' , username) 

.type('input[name="hm_password"]' , password) 

.click('.sign-in-form button[type="submit"]') 

.wait(wait) 

.assert.url(env +"/" , 'Redirected to homepage')

.text('header .name' , firstName , 'Name seen in navbar is correct')   


