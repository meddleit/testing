.assert.title().is("Meddle: Curated Insights", "Title is correct")
.assert.attr("meta[name='keywords']", "content", "curation, publish, social media, expert, business, personal branding", "Keywords are correct")
.assert.attr("meta[property='og:site_name']", "content", "Meddle", "OG site name is correct")
.assert.attr("meta[property='og:type']", "content", "website", "OG type is correct")
.assert.attr("meta[property='og:url']", "content", "https://meddle.it", "OG URL is correct")
.assert.attr("meta[property='og:image']", "content", env+"/resources/images/logos/meddle_logo.png", "OG image is correct")
.assert.attr("meta[name='twitter:url']", "content", env, "Twitter URL is correct")
.assert.attr("meta[name='twitter:card']", "content", "summary", "Twitter card is correct")
.assert.attr("meta[name='twitter:site']", "content", "@meddleit", "Twitter site is correct")
.assert.exists("meta[property='fb:app_id']", "Facebook app ID set")