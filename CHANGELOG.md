# Change Log
All notable changes to this project will be documented here in
accordance with [Keep a CHANGELOG][keep-changelog-url].
This project adheres to [Semantic Versioning][semver-url].

## [0.5.1] - 2016-08-29

### Added
- route resource particle
- route\_table resource particle

## [0.5.0] - 2016-07-04

### Changed
- There are many breaking changes from 0.4.x and 0.5.0.  Template and
  resoruces have been updated to reflect the most recent changes in
  condensaton and best practices for generating particles.

- Directory structure has changed to reflect particles that are generic
  to any project and particles that are for building `simple` VPCs and
  Subnets

- Requires [condensation][condensation-url] ^0.5.0

### Added
- Unit tests using [condensation-particle-tests][cpt-url]


[cpt-url]: https://github.com/SungardAS/condensation-particle-tests
[semver-url]: http://semver.org
[keep-changelog-url]: http://keepachangelog.com/
[condensation-url]: https://github.com/SungardAS/condensation
