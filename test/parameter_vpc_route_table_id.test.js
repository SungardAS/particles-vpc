var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("vpc", function() {
    describe("route_table_id", function() {
      it("creates the parameter", function() {
        cTests.testParticle(
          "parameter",
          "vpc/route_table_id",
          require("./fixtures/parameter_vpc_route_table_id_output_1"),
          {logicalId: "RouteTableId", hArgs: {}}
        );
      });
    });

    describe("route_table_id", function() {
      it("creates the parameter as optional", function() {
        cTests.testParticle(
          "parameter",
          "vpc/route_table_id",
          require("./fixtures/parameter_vpc_route_table_id_output_2"),
          {logicalId: "RouteTableId", hArgs: {optional: true}}
        );
      });
    });
  });
});
