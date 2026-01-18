const GNews = require("@gnews-io/gnews-io-js");

const client = new GNews(process.env.GNEWS_API_KEY);

// Array of positive news keywords to search from
const GOOD_NEWS_KEYWORDS = [
  "good news",
  "breakthrough",
  "achievement",
  "success",
  "recovered",
  "won",
  "victory",
  "amazing",
  "incredible",
  "inspiring"
];

/**
 *  @returns {string}
 */
const getRandomKeyword = () => {
  return GOOD_NEWS_KEYWORDS[Math.floor(Math.random() * GOOD_NEWS_KEYWORDS.length)];
};

/**
 * @param {string} keyword 
 * @returns {Promise<{title: string, link: string, description: string}>}
 */
const getGoodNews = async (keyword) => {
  try {
    const searchKeyword = keyword || getRandomKeyword();
    console.log(`Searching for news with keyword: "${searchKeyword}"`);
    
    const response = await client.search(searchKeyword, {
      lang: "en",
      max: 1,
      sortby: "publishedAt"
    });

    if (response.articles && response.articles.length > 0) {
      const article = response.articles[0];
      return {
        title: article.title,
        link: article.url,
        description: article.description
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching good news:", error);
    return null;
  }
};

module.exports = {
  getGoodNews
};
