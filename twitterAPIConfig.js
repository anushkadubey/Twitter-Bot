const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.API_KEY || 'twqURZPD7orWvgXDUUAuMgAU1',
  appSecret: process.env.API_SECRET || 'Ul3jZzJNM4AMWnurIU04UbnEkZPECPPhFXAFDPe8p8lkgAhHVU',
//   consumerToken: process.env.API_KEY,
//   consumerSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN || '976076929299202048-8guigzqANnoP1a02fN2ZneadmGuI3UV',
  accessSecret: process.env.ACCESS_SECRET || 'MNtCPgLGALqPGB2b51mPK0u5ldpyEFQ8WjH5QCHsVBTAw',
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

module.exports = {twitterClient, twitterBearer};