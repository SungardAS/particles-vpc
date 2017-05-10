/*
* http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html#attach-bucket-policy
*/

var regionMap = {
  "us-east-1": 127311923021,
  "us-east-2": 033677994240,
  "us-west-1": 027434742980,
  "us-west-2": 797873946194,
  "ca-central-1":  985666609251,
  "eu-west-1": 156460612806,
  "eu-central-1": 054676820928,
  "eu-west-2": 652711504416,
  "ap-northeast-1": 582318560864,
  "ap-northeast-2": 600734575887,
  "ap-southeast-1": 114774131450,
  "ap-southeast-2": 783225319266,
  "ap-south-1": 718504428378,
  "sa-east-1": 507241528517,
  "us-gov-west-1": 048591011584,
  "cn-north-1": 638102146993
};

module.exports = function elbLogsAccount(region,opts) {
  return regionMap[this.s3.region];
};
