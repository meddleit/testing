.assert.numberOfElements("sources li").is.between([1, 6], "Maximum 5 sources shown")
.click("sources .list-expand")
.assert.numberOfElements("sources li").is.gt(6, "More than 5 sources shown after expanding")