// The environment to use
var env = "http://heavymeddle.dynalias.net:9080";

// The standard wait time to use when waiting for AJAX requests to finish
var wait = 2000;
/*
The format of a Dalek unit test is as follows:

module.exports = {
	'test': function(),
	'test': function()
}

We are taking the first and last lines of that example, and putting them in separate files.

*/

module.exports = {
    "Homepage": function(test) {
        test
            .open(env)
            .wait(wait)
            .assert.title().is("Meddle: Curated Insights", "Title is correct")
            .assert.attr("meta[name='keywords']", "content", "curation, publish, social media, expert, business, personal branding", "Keywords are correct")
            .assert.attr("meta[property='og:site_name']", "content", "Meddle", "OG site name is correct")
            .assert.attr("meta[property='og:type']", "content", "website", "OG type is correct")
            .assert.attr("meta[property='og:url']", "content", "https://meddle.it", "OG URL is correct")
            .assert.attr("meta[property='og:image']", "content", env + "/resources/images/logos/meddle_logo.png", "OG image is correct")
            .assert.attr("meta[name='twitter:url']", "content", env, "Twitter URL is correct")
            .assert.attr("meta[name='twitter:card']", "content", "summary", "Twitter card is correct")
            .assert.attr("meta[name='twitter:site']", "content", "@meddleit", "Twitter site is correct")
            .assert.exists("meta[property='fb:app_id']", "Facebook app ID set")
            .assert.numberOfElements("topics li").is.between([1, 6], "Maximum 5 topics shown")
            .click("topics .list-expand")
            .assert.numberOfElements("topics li").is.gt(6, "More than 5 topics shown after expanding")
            .assert.numberOfElements("sources li").is.between([1, 6], "Maximum 5 sources shown")
            .click("sources .list-expand")
            .assert.numberOfElements("sources li").is.gt(6, "More than 5 sources shown after expanding")
            .assert.exists("meddlers img", "Top Meddlers shown")
            .assert.exists("meddles .preview", "Meddles loaded")
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
            .done();
    },
    // See explanation in 00/01 file

}