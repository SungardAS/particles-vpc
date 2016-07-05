# particles-vpc

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## Summary

[Condensation][condensation-url] particles that create VPC resources.

## Particles

### cftemplates

#### simple/subnet

Simple implemention of a Subnet.  Good base to start from.

#### simple/vpc

Simple implemention of a VPC.  Good base to start from.

### outputs

#### security\_group/id

Output ID of a SecurityGroup

**Extends** `base` from `particles-core`

**Parameters**

  * `securityGroupLogicalId {String}` **required** LogicalId of the
    SecurityGroup

#### security\_group/name

Output Name of a SecurityGroup

**Extends** `base` from `particles-core`

**Parameters**

  * `securityGroupLogicalId {String}` **required** LogicalId of the
    SecurityGroup

### parameters

#### availability\_zone/name

Name for an AvailabilityZone

**Extends** `base` from `particles-core`

#### availability\_zone/id

ID for an AvailabilityZone

**Extends** `base` from `particles-core`

#### security\_group/id\_list

ID List for SecurityGroups

**Extends** `base` from `particles-core`

#### subnet/id\_list

ID List for Subnets

**Extends** `base` from `particles-core`

#### vpc/cidr

CIDR range

**Extends** `cidr_range` from `particles-core`

#### vpc/id

ID for a VPC

**Extends** `base` from `particles-core`

#### vpc/route\_table\_id

ID for a VPC RouteTable

**Extends** `base` from `particles-core`

### resources

#### internet\_gateway

**Type** AWS::EC2::InternetGateway

**Extends** `base` from `particles-core`

#### network\_acl

**Type** AWS::EC2::NetworkAcl

**Extends** `base` from `particles-core`

**Parameters**

  * `vpcId {String}` **required** The ID of the VPC
  * `tags {Array}` An arbitrary set of tags

#### security\_group

**Type** AWS::EC2::SecurityGroup

**Extends** `base` from `particles-core`

**Parameters**

  * `groupDescription {String}` **required** Description of the security group
  * `vpcId {String}` **required** The physical ID of the VPC
  * `securityGroupEgress {Array}` A list of Amazon EC2 security group egress rules
  * `securityGroupIngress {Array}` A list of Amazon EC2 security group ingress rules
  * `tags {Array}` An arbitrary set of tags

#### security\_group/egress

**Type** AWS::EC2::SecurityGroupEgress

**Extends** `base` from `particles-core`

**Parameters**

  * `fromPort {String}` **required** Start of port range for the TCP and UDP protocols, or an ICMP type number
  * `groupId {String}` **required** ID of the Amazon VPC security group to modify
  * `ipProtocol {String}` **required** IP protocol name or number
  * `toPort {String}` **required** End of port range for the TCP and UDP protocols, or an ICMP code
  * `cidrIp {String}` cidr range
  * `destinationSecurityGroupId {String}` group ID of the destination Amazon VPC security group

#### security\_group/ingress

**Type** AWS::EC2::SecurityGroupIngress

**Extends** `base` from `particles-core`

**Parameters**

  * `fromPort {Number}` **required** Start of port range for the TCP and UDP protocols, or an ICMP type number
  * `ipProtocol {String}` **required** IP protocol name or number
  * `toPort {Number}` **required** End of port range for the TCP and UDP protocols, or an ICMP code
  * `cidrIp {String}` cidr range
  * `groupId {String}` ID of the Amazon VPC security group to modify
  * `groupName {String}` Name of the Amazon VPC security group to modify
  * `sourceSecurityGroupId {String}` group ID of the destination Amazon VPC security group
  * `sourceSecurityGroupName {String}` group name of the destination Amazon VPC security group
  * `sourceSecurityGroupOwnerId {String}` AWS Account ID of the owner of the Amazon EC2 security group specified in the SourceSecurityGroupName property

#### subnet

**Type** AWS::EC2::Subnet

**Extends** `base` from `particles-core`

**Parameters**

  * `cidrBlock {String}` **required** CIDR block that you want the subnet to cover
  * `availabilityZone {String}` **required** availability zone in which you want the subnet
  * `vpcId {String}` **required** VPC on which you want to create the subnet
  * `mapPublicIpOnLaunch {Boolean=false}` whether instances that are launched in this subnet receive a public IP address
  * `tags {Array}` An arbitrary set of tags

#### subnet/route\_table\_association

**Type** AWS::EC2::SubnetRouteTableAssociation

**Extends** `base` from `particles-core`

**Parameters**

  * `RouteTableId {String}` **required** The ID of the route table
  * `SubnetId {String}` **required** The ID of the subnet


#### vpc

**Type** AWS::EC2::Vpc

**Extends** `base` from `particles-core`

**Parameters**

  * `cidrBlock {String}` **required** The CIDR block you want the VPC to cover
  * `enableDnsSupport {Boolean}` whether DNS resolution is supported for the VPC
  * `enableDnsHostnames {Boolean}` whether the instances launched in the VPC get DNS hostnames
  * `instanceTenancy {String}` allowed tenancy of instances launched into the VPC
  * `Tags {Array}` An arbitrary set of tags

### sets

#### security\_group/output\_all

All possible outputs for a SecurityGroup

**Parameters**

  * `securityGroupLogicalId {String}` **required** The LogicalId of the SecurityGroup

#### subnet\_group/output\_all

All possible outputs for a Subnet

**Parameters**

  * `subnetLogicalId {String}` **required** The LogicalId of the Subnet

#### vpc\_group/output\_all

All possible outputs for a Vpc

**Parameters**

  * `vpcLogicalId {String}` **required** The LogicalId of the VPC

#### simple/create\_internet\_gateway

A `true_false` set for creation of an InternetGateway

**Extends** `particles-core` `true_false`

#### simple/route\_table\_association

A RouteTableId parameter and a RouteTableAssociation resource

#### simple/subnet

A collection of particles that will create a simple, usable subnet.

**Parameters**

  * `defaultCidr {String}` the default CIDR range for the SubnetCidr parameter


#### simple/vpc

A collection of particles that will create a simple, usable vpc.

**Parameters**

  * `defaultCidr {String}` the default CIDR range for the VpcCidr parameter

## Ready To Launch

An collection of particles that will create a simple, usable vpc.

### Simple VPC

### Simple Subnet

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-vpc.svg
[npm-url]: https://npmjs.org/package/particles-vpc
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-vpc.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-vpc
[daviddm-image]: https://david-dm.org/SungardAS/particles-vpc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-vpc
