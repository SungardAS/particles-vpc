var config = {
  s3: [
    {
      // AWS specific options
      aws: {
        region: 'us-east-1',
        bucket: '',
      },

      // Run CloudFormation validation before deploying this bucket
      validate: true,

      // Create this bucket if it does not already exist
      create: true
    }
  ],
  // Remove 'condensation' from the beginning of the task names
  taskPrefix: '',

  dist: 'dist'
};

module.exports = config;
