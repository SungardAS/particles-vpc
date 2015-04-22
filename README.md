# particles-vpc

Particles for [condensation](https://github.com/SungardAS/condensation) that help build a AWS VPC.

## Use

    > npm install
    > gulp

Templates will be created in the `dist` directory

To upload to S3 create `config/local.js` with bucket configuation and
run `gulp deploy`

## Particles

### cftemplates

#### subnet

A stack that will build a basic Subnet with options for AvailabilityZone, VPC and routing.

#### vpc

A stack that will build a basic VPC with options for creating a SecurityGroup, InternetGateway and open communication within the VPC.
