var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("route_table_association", function() {
    it("creates the resource with strings", function() {
      cTests.testParticle(
        "resource",
        "route_table_association",
        require("./fixtures/resource_route_table_association_output_1"),
        {logicalId: "RouteTableAssociation", hArgs: {routeTableId: "RouteTable", subnetId: "Subnet1"}}
      );
    });

    it("creates the resource with refs", function() {
      cTests.testParticle(
        "resource",
        "route_table_association",
        require("./fixtures/resource_route_table_association_output_2"),
        {
          logicalId: "RouteTableAssociation",
          hArgs: {
            routeTableId: '{"Ref": "RouteTable"}',
            subnetId: '{"Ref": "Subnet1"}'
          }
        }
      );
    });
  });
});
