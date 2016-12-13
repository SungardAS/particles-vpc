var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("flowlog", function() {
    it("creates the resource", function() {
      cTests.testParticle(
        "resource",
        "flowlog",
        require("./fixtures/resource_flowlog_output_1"),
        {
          logicalId: "FlowLog",
          hArgs: {
            deliverLogsPermissionArn: '{"Ref": "Arn"}',
            logGroupName: '{"Ref": "Loggroupname"}',
            resourceId: '{"Ref": "Resourceid"}',
            resourceType: '{"Ref": "Resourcetype"}',
            trafficType: '{"Ref": "Traffictype"}'
          }
        }
      );
    });
  });
});
