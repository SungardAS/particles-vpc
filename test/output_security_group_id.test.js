var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("security_group", function() {
    describe("id", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "security_group/id",
          require("./fixtures/output_security_group_id_output_1"),
          {logicalId: "SecurityGroupId", hArgs: {securityGroupLogicalId: "SecurityGroup"}}
        );
      });
    });
  });
});
