var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("availability_zone", function() {
    it("creates the parameter", function() {
      cTests.testParticle(
        "parameter",
        "availability_zone/name",
        require("./fixtures/parameter_availability_zone_output_1"),
        {logicalId: "AvailabilityZone", hArgs: {}}
      );
    });
  });

  describe("route_table_id", function() {
    it("creates the parameter as optional", function() {
      cTests.testParticle(
        "parameter",
        "availability_zone/name",
        require("./fixtures/parameter_availability_zone_output_2"),
        {logicalId: "AvailabilityZone", hArgs: {optional: true}}
      );
    });
  });
});
