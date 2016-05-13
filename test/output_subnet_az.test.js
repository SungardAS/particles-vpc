var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("subnet_az", function() {
    describe("availability_zone", function() {
      it("creates the output", function() {
        cTests.testParticle(
          "output",
          "subnet/availability_zone",
          require("./fixtures/output_subnet_az_output_1"),
          {logicalId: "SubnetAZ", hArgs: {subnetLogicalId: "Subnet1"}}
        );
      });
    });
  });
});
