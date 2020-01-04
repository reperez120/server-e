module.exports = {
  apps : [{
    name: 'server-e',
    script: 'index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-135-240-81.us-east-2.compute.amazonaws.com',
      key  : '~/.ssh/e.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-e.git',
      path : '/home/ubuntu/server-e',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
