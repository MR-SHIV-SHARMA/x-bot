const Twit = require("twit");
const fs = require("fs");

// Twitter API credentials
const T = new Twit({
  consumer_key: "TImnhwnaont4NmpvfJOv0Z06G",
  consumer_secret: "nPjNeIReUcRWVk2toRB9UDgCYdVnlYL5muWqpYdjOTa12xJuWU",
  access_token: "1481452442177146882-YLEEoMRJXx4AN6ECFNzPaJGqBpMJN2",
  access_token_secret: "FzVZTF8qoUMwCC4AH0BniM3Cr709Fb4Y6EscTnsp8kZ5c",
  timeout_ms: 1 * 1000,
});

// File path for the tweets
const tweets = fs.readFileSync("tweets.txt").toString().split("\n");

// Function to get tweets from the file
function tweet() {
  const tweet = tweets[Math.floor(Math.random() * tweets.length)];
  T.post("statuses/update", { status: tweet }, (err, data, response) => {
    if (err) {
      console.error("Error tweeting:", err);
      if (err.code === 32) {
        console.error("Authentication error. Please check your credentials.");
      }
    } else {
      console.log("Tweeted:", tweet);
    }
  });
}

// Run tweet function every second
setInterval(tweet, 1 * 1000);
