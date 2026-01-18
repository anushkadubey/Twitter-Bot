require("dotenv").config({  path: `${__dirname}/.env` });

const { twitterClient } = require("./twitterAPIConfig");
const { getGoodNews } = require("./newsAPIConfig");
const { CronJob } = require("cron");

const tweetGoodNews = async () => {
  try {
    const newsArticle = await getGoodNews();
    
    if (!newsArticle) {
      console.log("No news article found");
      return;
    }

    const tweetText = `${newsArticle.title}\n\n${newsArticle.link}\n\n#GoodNews #100DaysOfGoodNews`;
    
    // Handling twitter text limit
    const finalTweet = tweetText.length > 280 
      ? tweetText.substring(0, 277) + "..." 
      : tweetText;

    await twitterClient.v2.tweet(finalTweet);
    console.log("Tweet posted successfully:", finalTweet);
  } catch (error) {
    console.log("Error occurred while tweeting: ", error);
  }
};

// Setting job to run daily at 9 am
const job = new CronJob("0 9 * * *", () => {
  console.log("Running scheduled good news tweet...");
  tweetGoodNews();
});

job.start();

tweetGoodNews();

console.log("Twitter bot started. Scheduled to tweet daily at 9 AM");
