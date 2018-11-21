# Recent Changes

### v1.1.0
Significant improvements to the way we generate charts:
* We now expose chart generator functions, rather than sample config objects
* These generator functions accept a configuration object that supports any Highcharts oconfiguration properties
* If required data is missing, sample data will be injected automatically
* Leaving the config object blank will generate a complete sample chart that can be used as a placeholder

Breaking changes:
* We no longer export chart samples from the /samples directory
* baseConfig object exports have been replaced by the chart generator functions

### v1.0.0
This library has been ported from @pxblue/visualizations