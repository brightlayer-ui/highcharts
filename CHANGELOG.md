# CHANGELOG

## v2.1.0 (November 5, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

### v2.1.0 (March 30, 2021)

### Added

-   Utility functions for translating chart labels and formats.

### v2.0.0 (January 22, 2020)

### Changed

-   Library converted to TypeScript to provide strong typings for TS projects. This will continue to work for plain JavaScript projects without any changes necessary.

### v1.1.0 (November 21, 2018)

### Changed

Significant improvements to the way we generate charts:

-   We now expose chart generator functions, rather than sample config objects
-   These generator functions accept a configuration object that supports any Highcharts configuration properties
-   If required data is missing, sample data will be injected automatically
-   Leaving the config object blank will generate a complete sample chart that can be used as a placeholder

Breaking changes:

-   We no longer export chart samples from the /samples directory
-   baseConfig object exports have been replaced by the chart generator functions

### v1.0.0 (October 26, 2018)

-   This library has been ported from @pxblue/visualizations
