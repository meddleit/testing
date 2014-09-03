.assert.numberOfElements("topics li").is.between([1, 6], "Maximum 5 topics shown")
.click("topics .list-expand")
.assert.numberOfElements("topics li").is.gt(6, "More than 5 topics shown after expanding")