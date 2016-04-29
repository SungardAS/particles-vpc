var gitrev = require('git-rev-sync');

var regions = [
  'us-east-1',
  'us-west-1',
  'us-west-2',
  'eu-west-1',
  'eu-central-1',
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'sa-east-1'
];

var buckets = [];

regions.forEach(function(regionName) {
  buckets.push({
    aws: {
      region: regionName,
      bucket: 'condensation-particles.'+regionName
    },
    prefix: 'particles-vpc/'+gitrev.branch(),
    clean: true,
    validate: true,
    create: true
  });
});


var config = {
  s3: buckets,
  dist: 'dist'
};

module.exports = config;
