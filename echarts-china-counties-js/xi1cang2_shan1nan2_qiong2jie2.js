(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('琼结县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"540524","properties":{"name":"琼结县","cp":[91.683881,29.024625],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HSXKVEJUEOIOMOSQMOEIKMGQ@SBYCYEW@WDUIOMMKQGOO@SDUDMABOLMLICQMG[IQEQCQAMDMJGNGLKLKBOHQJQNOJOJMNQFUASCYAQAINALAPKLOBYDQ@KCM@GJKFMDSBOAQFQDMLSFQFMNIJIJMJDNFbC^ETDXPPPDNBNFRJZFVFVCPFTDZ@V@^HVRP^DfEbBhN\\TTRPLJLLLHLHNNNPFLTHP@NGPERFLJJHPHLJJHLHTFX@P@PMJIJOBGHIDC@AFADEFKBEDCDKHGNMFGBAD@J@FCHCFC@@BA@ADACQB[D[DUFWDYAUEU"],"encodeOffsets":[[93964,29739]]}}],"UTF8Encoding":true});}));