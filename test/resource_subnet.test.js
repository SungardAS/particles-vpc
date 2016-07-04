var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("subnet", function() {
    it("creates the resource with VpcId string", function() {
      cTests.testParticle(
        "resource",
        "subnet",
        require("./fixtures/resource_subnet_output_1"),
        {logicalId: "Subnet", hArgs: {
          availabilityZone: "us-east-1a",
          cidrBlock: "10.0.0.0/24",
          vpcId: "Vpc"
        }}
      );
    });

    it("creates the resource with VpcId ref", function() {
      cTests.testParticle(
        "resource",
        "subnet",
        require("./fixtures/resource_subnet_output_2"),
        {logicalId: "Subnet", hArgs: {
          availabilityZone: "us-east-1a",
          cidrBlock: "10.0.0.0/24",
          vpcId: '{"Ref": "Vpc"}'
        }}
      );
    });
  });
});
