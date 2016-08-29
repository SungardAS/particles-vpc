var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("route_table", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "route_table",
        require("./fixtures/resource_route_table_output_1"),
        {
          logicalId: "RouteTable",
          hArgs: {
            vpcId: '{"Ref": "VpcId"}'
          }
        }
      );
    });
  });
});
