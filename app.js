require("dotenv").config({  path: `${__dirname}/.env` });

const { twitterClient } = require("./twitterAPIConfig");

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Hi. I am a bot tweeting about good news! #100DaysOfGoodNews");
  } catch (error) {
    console.log("Error occurred while tweeting: ", error);
  }
};

tweet();
