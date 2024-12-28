const Twit = require("twit");
const fs = require("fs");

// Twitter API credentials
const T = new Twit({
  consumer_key: "bzJvN0x5Wnh6MXU2NkhYNGNXQTE6MTpjaQ",
  consumer_secret: "w1PD2WxxVZI7TN2ataWFgIAbtuI0oyO1u3bz2T0XcM0Gpcdvb_",
  access_token: "1481452442177146882-O3u5fOkp2ye3dmQwcfUOtyrSAAXNJF",
  access_token_secret: "39K1DiHpShAKeFuBmYjBdm67BbMNfGOIifmuaJeJz0kwU",
  timeout_ms: 60 * 1000,
});

// File path for the tweets
const tweets = fs.readFileSync("tweets.txt").toString().split("\n");

// Function to get tweets from the file
function tweet() {
  const tweet = tweets[Math.floor(Math.random() * tweets.length)];
  T.post("statuses/update", { status: tweet }, (err, data, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Tweeted:", tweet);
    }
  });
}

setInterval(tweet, 60 * 1000);
