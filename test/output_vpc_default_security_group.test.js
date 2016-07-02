var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("vpc", function() {
    describe("default_security_group", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "vpc/default_security_group",
          require("./fixtures/output_vpc_default_security_group_output_1"),
          {logicalId: "VpcDefaultSecurityGroup", hArgs: {vpcLogicalId: "Vpc"}}
        );
      });
    });
  });
});
