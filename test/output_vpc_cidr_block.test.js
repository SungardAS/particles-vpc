var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("vpc", function() {
    describe("cidr_block", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "vpc/cidr_block",
          require("./fixtures/output_vpc_cidr_output_1"),
          {logicalId: "VpcCidrBlock", hArgs: {vpcLogicalId: "Vpc"}}
        );
      });
    });
  });
});
