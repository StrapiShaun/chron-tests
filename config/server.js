

const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: true,
    tasks: cronTasks, 
    
      },


    
    /*'myJob': {
      task: ({ strapi }) => {const now = new Date().toISOString()
        console.log(now + ' Every 10') },
      options: { 
        rule: '* 2 * * * *',
        tz: 'America/New York',
      }
    },*/
 
    
    
    
  
      
      

});
