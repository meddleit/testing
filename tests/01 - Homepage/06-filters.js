.click("topics li:nth-child(2) a")
.wait(wait)
.assert.attr("topics li:nth-child(2)", "class").to.contain("-active", "Topic sidebar active class set")
.assert.exists("meddles .preview", "Meddles loaded")
.assert.text(".listing-title h1").to.contain("Latest Meddles in", "Topic title shown")
.assert.exists("meddlers img", "Top Meddlers exist for this view")

.click("sources li:nth-child(2) a")
.wait(wait)
.assert.attr("sources li:nth-child(2)", "class").to.contain("-active", "Source sidebar active class set")
.assert.exists("meddles .preview", "Meddles loaded")
.assert.text(".listing-title h1").to.contain("Latest Meddles from", "Topic title shown")

.end()