var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("route", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "route",
        require("./fixtures/resource_route_output_1"),
        {
          logicalId: "Route",
          hArgs: {
            destinationCidrBlock: "0.0.0.0/0",
            routeTableId: "RouteTable"
          }
        }
      );
    });
  });
});
