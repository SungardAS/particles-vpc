var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("vpc", function() {
    it("creates the resource with VpcId string", function() {
      cTests.testParticle(
        "resource",
        "vpc",
        require("./fixtures/resource_vpc_output_1"),
        {logicalId: "Vpc", hArgs: {cidrBlock: "10.0.0.0/16"}}
      );
    });

    it("creates the resource with VpcId ref", function() {
      cTests.testParticle(
        "resource",
        "vpc",
        require("./fixtures/resource_vpc_output_2"),
        {logicalId: "Vpc", hArgs: {cidrBlock: '{"Ref": "CidrBlock"}'}}
      );
    });

    it("creates the resource with tags", function() {
      cTests.testParticle(
        "resource",
        "vpc",
        require("./fixtures/resource_vpc_output_3"),
        {logicalId: "Vpc", hArgs: {
          cidrBlock: '{"Ref": "CidrBlock"}',
          tags: [{tag1: "tag1"}]
        }}
      );
    });
  });
});
