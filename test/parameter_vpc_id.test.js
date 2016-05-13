var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("vpc", function() {
    describe("id", function() {
      it("creates the parameter", function() {
        cTests.testParticle(
          "parameter",
          "vpc/id",
          require("./fixtures/parameter_vpc_id_output_1"),
          {logicalId: "VpcId", hArgs: {}}
        );
      });
    });
  });
});
