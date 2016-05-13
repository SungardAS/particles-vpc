var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("vpc", function() {
    describe("cidr", function() {
      it("creates the parameter", function() {
        cTests.testParticle(
          "parameter",
          "vpc/cidr",
          require("./fixtures/parameter_vpc_cidr_output_1"),
          {logicalId: "CidrBlock", hArgs: {}}
        );
      });
    });
  });
});
