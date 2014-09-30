.click ('button['ng-click=addWB()']') 

.click ('.form-input:nth-of-type(1) select' //add in the option blog  

.type ('.form-input:nth-of-type(3) ' , "www.meddle.it" ) 

.click ('button['ng-class=[{active:saving|saved, -saved: saved}']')

.wait(wait)

.assert.val ('.form-input:nth-of-type(3)' , 'www.meddle.it' ) //add in the option blog  

.open (env + "/dalek")

.wait(wait) 

.click ('a ng=repeat=link in meddler.getWebPrescences()') 

.wait(wait) 

.assert.url('https://meddle.it', 'directed to web prescence')  

.open (env + "/user/edit/notifications")