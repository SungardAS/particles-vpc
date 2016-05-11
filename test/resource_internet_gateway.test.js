var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe.only("resources", function() {
  describe("internet_gateway", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "internet_gateway",
        require("./fixtures/resource_internet_gateway_output_1"),
        {logicalId: "InternetGateway", hArgs: {}}
      );
    });
  });
});
