var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("vpc", function() {
    describe("default_network_acl", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "vpc/default_network_acl",
          require("./fixtures/output_vpc_default_network_acl_output_1"),
          {logicalId: "VpcDefaultNetworkAcl", hArgs: {vpcLogicalId: "Vpc"}}
        );
      });
    });
  });
});
