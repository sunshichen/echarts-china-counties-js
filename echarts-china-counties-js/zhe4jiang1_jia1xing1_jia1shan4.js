(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('嘉善县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330421","properties":{"name":"嘉善县","cp":[120.926028,30.830864],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@G@E@C@A@ECCCCAAA@@CCCACCCA@@CAACA@@@AB@BAB@@@@B@B@@B@@A@@@@@@@AB@@@BB@@@@@@@A@@@BB@@A@@@B@@B@@@BB@@DB@@B@@@D@H@@A@@BADAAEA@ABA@@B@@@@@@@@@@B@@B@@@@@@@B@@AE@@A@@@ACCC@C@E@@@C@@BA@AAABA@@@@BBBBB@@@D@HAB@B@D@B@D@@E@C@C@E@A@CB@@@@KC@@AB@@ABA@C@A@C@C@CA@@C@A@C@@@AA@@C@CBC@A@A@A@GCECCA@@@BBD@D@B@D@B@D@B@@@BB@@@HFBB@B@BBFBB@BAB@BB@@BDABBBDBBB@@BBFBB@BB@FDJFBBBD@@A@@@AB@@CBABA@AB@CA@@@@@@AED@AABBBGDAC@B@BCBBB@@EBA@ABA@AB@@@BB@@@@@A@@@@BA@@@AA@BA@@BA@@B@@@@@BCAICCAGCA@@AIEAACCCAAAAA@@ADABAH@B@D@D@@BDK@@EA@@BA@@B@@@@@AA@@BA@@@A@AABID@AB@@BBB@@AB@@A@@@ABAC@BAA@@@AABACA@@CC@@C@@@@@ADCA@@@@BCA@AAAH@@@@BB@@B@AB@BA@@@@B@A@@@AA@@A@@@AEA@BAA@BA@@@A@@H@@@B@@@BB@AB@@@@AD@@@BA@B@A@@@A@@@B@@@@A@A@@@@A@@B@BDBA@@B@B@@BB@@@B@D@@@@BB@B@B@B@BAA@@A@AB@@@@@@@@DB@BB@@BF@@@@B@@A@@DEB@AA@@A@@@@@@@B@BA@A@@@@@@DA@@B@BBB@@@@B@@BB@@@@@@J@@@DBB@@@@@B@@@BA@@BA@@D@B@D@BB@@BA@@B@@@DD@B@@@@@@@@BAD@B@F@@AF@B@BAD@B@@ND@B@@@D@@B@@@B@@@@B@BABA@AGA@@B@DC@AA@@@A@@@@@@@AA@A@A@@@AD@@@@G@@AC@AFA@CAA@@@@C@C@C@A@@G@@FGA@@@@AD@B@B@@A@A@@@@@@B@@@B@BBBDD@BAB@BA@@D@@AB@BAB@BCA@B@@D@@@AB@@C@CB@@ABAB@BABB@@@@B@@B@@BB@@@AB@@BB@@@@D@DDBBB@BBD@BBB@FDDD@@B@@BABAB@@CB@@@D@D@@A@@B@@A@@AA@@BABA@A@@BCD@@@B@@@@@@@@B@@@BB@@@@DBAB@@@@B@AB@@B@@BCD@@MBAB@BB@@@B@@@@@@DBA@BA@@@@@@@@B@A@@@@A@@@A@@@C@ABC@AB@@AAA@CB@@@AACAC@@@@EDB@@BBD@@E@DDBBBBDDDFBBDBDBFBH@FB@B@B@DABAF@D@B@D@BBBBD@D@BB@@@B@@ADAB@BBDDBDDBHBTDDBNBH@N@NBDAPETIBCBC@AB@@@@@@AB@@@@@@@B@@@@B@@@@B@@@@@@@@@@@@@@@@A@@@@@@BA@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@B@@@@@BB@@@@@@BB@@@@@@@@B@@B@@@@@@@@@@B@@A@@@@@@@@@@B@@@@@@@@@BA@@@@@@@@@@@@@@BA@@@@@@@A@@@@B@@@@@@@@@@@@@@@BB@@B@@@@@@@B@@@@A@@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@B@@@@B@@@D@@@@@@@B@@@BB@@@D@B@D@@@@@B@@BB@BBD@D@@@@BRHDBBNFB@LJ@@@B@B@P@@C@EBCFBFDD@PEBDDADBBADAHAD@@BGJABBB\\BDLEBBFCBBBB@BADB@@B@B@B@FABIBCBAF@BAEEBAD@D@F@F@B@H@J@@ABAB@D@B@B@B@B@CABEDCAABC@@@CA@@CB@@A@ECABCHBBEAABABCB@BI@A@A@ABAB@B@B@@CCA@A@A@AA@@AC@@AA@@@@@@@@@@@A@E@@AAABCA@@CD@@A@A@@ACDGE@BGD@BGB@@KAABABCBCDA@@@A@CAG@E@S@E@A@A@@@A@@AAB@@AA@@AB@B@D@B@B@@EA@@AAAA@ABC@@CC@A@A@@AA@AA@@@C@@@ACE@@@AB@BA@@@A@C@AB@@@XADAB@B@@A@AAC@@@A@@DAB@B@H@B@BABA@@BABA@@A@ACFAAAA@@ADACACDEEFAACA@CEDCCCB@ACABA@@ABACCHCCCC@AB@@A@AC@AC@ACAA@AA@A@A@@AAAAACBAC@ABAA@ACA@A@A@@@AA@A@@CC@AAAD@DAGEBAB@DA@A@@CC@@@ABAD@B@BB@BA@BBBADFA@BDB@BBB@@A@ADA@@@@B@@@@BAB@@BAFFHH@@DBB@BCJAJCFADA@@@@HIBEB@@ABA@A@@@ABC@@@@@AE@@A@@BS@@A@C@@A@@@@BA@@AA@@@A@E@C@@@ACA@@C@E@@@@@@C@@AA@@@@@@@A@@@@@@BAB@@A@A@@@@B@@A@@BCC@AA@@A@A@@@@A@A@@A@@AA@@B@B@@CBCC@@@@@@@BB@@BA@A@@@@@@@CCAAAAA@@C@A@AA@@@A@@A@@@@A@@BA@B@A@ABE@E@AA@@A@C@@@@@@@EA@BBHC@A@@@@AC@@@@@@BABA@@@EBACCB@@A@CB@B@@@D@@MACAA@@A@@@C@@@@CAK@KAC@CACA"],"encodeOffsets":[[123854,31513]]}}],"UTF8Encoding":true});}));