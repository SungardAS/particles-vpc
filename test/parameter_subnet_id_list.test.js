var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("subnet", function() {
    describe("id_list", function() {
      it("creates the parameter", function() {
        cTests.testParticle(
          "parameter",
          "subnet/id_list",
          require("./fixtures/parameter_subnet_id_list_output_1"),
          {logicalId: "SubnetIdList", hArgs: {}}
        );
      });
    });
  });
});
