const twit = require('twit');
const config = require('./config.js');
const app = new twit(config);
console.log("twitter bot started");
function retweet(){
// Now setting up the search parameters. Only using "q" parameter here out of various parameters.
let params = {                                    
    q: "#webdev",
    count: 10,
    result_type: "recent",
    lang: "en",
    min_retweets: 10
  }

app.get("search/tweets", params, (err, data, response)=>
{
    let tweets=data.statuses;
    if(!err){
    for(let dat of tweets){
        let retweetId = dat.id_str;
        let username = dat.user.screen_name;
        app.post("statuses/retweet/:id", {id : retweetId}, (err,response)=>{
            if(response){
            console.log("https://twitter.com/" + username + "/status/"+ retweetId);
            }
            else if(err){
                console.log(err.message);
            }
        })
    }
    }
    });
}
setInterval(retweet, 5000);
