var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe.only("resources", function() {
  describe("network_acl", function() {
    it("creates the resource with VpcId string", function() {
      cTests.testParticle(
        "resource",
        "network_acl",
        require("./fixtures/resource_network_acl_output_1"),
        {logicalId: "NetworkAcl", hArgs: {vpcId: "Vpc"}}
      );
    });

    it("creates the resource with VpcId ref", function() {
      cTests.testParticle(
        "resource",
        "network_acl",
        require("./fixtures/resource_network_acl_output_2"),
        {logicalId: "NetworkAcl", hArgs: {vpcId: '{"Ref": "Vpc"}'}}
      );
    });
  });
});
