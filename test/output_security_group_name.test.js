var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("security_group", function() {
    describe("name", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "security_group/name",
          require("./fixtures/output_security_group_name_output_1"),
          {logicalId: "SecurityGroupName", hArgs: {securityGroupLogicalId: "SecurityGroup"}}
        );
      });
    });
  });
});
