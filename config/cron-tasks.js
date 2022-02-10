const checkForNewReviews = require("./functions/checkForNewReviews");

module.exports = {
    //check for new reviews everyday at midnight
    "0 0 * * * *": {
        task: ({ strapi }) => {
            checkForNewReviews();
        },
        options: {
            tz:"America/Los Angeles",
        },
    }, 
};