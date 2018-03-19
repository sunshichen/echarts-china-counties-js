(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('延吉市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"222401","properties":{"name":"延吉市","cp":[129.508804,42.89125],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AA@A@@@@AAA@@AA@@@A@@@@@A@@@A@A@@BA@@AA@@@A@@@@@A@@A@@A@@@A@@@@AA@@@A@@@AA@BA@A@@@A@A@A@AB@@C@@@A@@@@@A@A@AAA@A@AAA@A@@@A@@@@BAAA@@@@@AA@@A@C@@@A@AB@@A@@@A@A@@@AAAAA@A@A@@AABA@A@@@A@@@AAC@AAAAAAA@CA@@A@ADA@ELBDEHC@GAALE@@NC\\_BCEAAIEAGEMMI@KFMFAGCCGBEHA@GEEaFCAGQG@G@KCAEBEBCCAEEGCI@EBGDEB@CK@QEC@C@KJKF@DC@BPKBEFA@@DFN@LGDIEGCGHGNINABEJ@FBD@H@H@JCNCHCHGPEHGRMHMDCH@HAJCLGJKPS\\YRKPO\\CPITELIJIDMBKDGFITITIVBA@@B@BB@@B@@B@@BB@@@@B@B@B@@@D@B@B@B@B@BB@@B@@@BB@@BB@@@@BBB@@BBBBB@@@BB@BB@@D@DBB@B@BB@@@B@@ABC@A@A@C@AB@@AB@@AD@@@B@B@BBBBB@@BD@@@B@B@@BBAB@B@BAB@@AB@@A@A@A@A@A@@@A@@B@BA@@B@@AB@B@@BB@@@B@B@B@@@B@@A@ABA@A@@@ABAB@@@@@BA@@B@@@B@@AB@@@B@@A@@@A@@BA@@BA@A@AB@@A@A@A@A@ABA@A@A@@@A@AB@AA@@A@@@@A@@B@@AB@@A@@@@B@@@BA@@@A@C@@@A@A@A@@@AB@@A@ABA@@@A@@@A@A@A@@@A@@@ABABA@A@A@@@A@A@AB@@AAA@A@@@A@@@A@@@@@A@@@A@@BA@@AA@A@@@A@A@A@ABA@ABA@@@A@A@A@A@A@A@A@@@A@@@A@A@@@A@@@A@AB@@@@AAA@@@A@@A@@A@A@@@A@AAC@A@AA@@@@A@@@@BA@@@A@@@A@AB@@A@A@@@@@@BA@@B@@ABA@@B@@@B@@A@@@A@A@@@A@A@A@@@ABA@@@ABA@@BA@A@@BA@A@@B@@@@@BB@@B@@@@@@@BA@@@@@@B@@@B@@@@@@@@BB@@BB@@@@@@@B@@A@@B@@@B@@@@AB@@@@A@@@A@A@@@A@A@@@A@A@@@AB@@A@@@ABA@A@@@@@@@AB@@@B@@@@@@@B@@@B@B@@@B@B@B@@@BA@@@ABA@@@@@@B@@AB@@@@AB@@@B@@@BA@@B@BA@@BA@@B@@AB@@@@AB@@A@@@AB@B@@A@ABA@BB@@B@B@D@B@@@B@B@@BB@@@@@A@@@ABAB@@@@@B@B@@@BBB@@@@BB@@BB@@B@@B@@@BBB@BAB@BA@@@@@BB@@@B@@@@BBB@B@@@B@@@B@@@A@@@@@@B@@@D@B@@@DA@@B@@A@AB@BAB@B@@@BBB@BBB@B@@@@BB@@@B@@BB@@B@@@B@B@D@B@@AB@@BB@BBB@@BB@@B@@B@B@DB@@B@@B@@B@B@B@B@B@B@B@B@@@@@@@@BB@@@@BB@@@B@BB@@B@@B@@@B@@@B@@@B@@@B@@@B@@@@BB@BB@BBB@DB@@@@@@@BB@@@B@BBB@BBB@@@B@@@B@B@BBB@B@B@BD@@BBBB@@@@ABAB@BABABABAB@@CFAFAD@B@@@D@D@BABCDABAB@DAD@B@B@BA@AB@@@B@@B@B@BBBBDDB@@@B@B@B@@@B@D@BB@@@B@@@D@B@@@B@B@@@BABAB@@@B@B@@@B@@@BBBBB@@DD@@BB@@B@@@BB@@BB@@@@@BB@@@B@@@@@@B@@BBB@@B@@AB@B@@@B@@A@@AA@C@C@ABA@@@A@@@@@A@@BA@A@@BA@A@@@@@@@ABA@C@@@AB@@@@@BA@@@@BA@@@A@BB@B@@@@@B@@@B@@@B@@B@A@@@@@@@A@@B@@@@@@AB@@@B@@BB@@@@A@@@@@A@@BA@@@A@@@A@@@A@@@@B@B@@AB@BA@@@@BA@A@@@A@ABA@@AA@AB@@ABABA@@@@@A@A@A@@@A@@@CB@@AB@BABA@@@@@A@@AAB@@AB@@@@A@@BA@@B@@A@@@A@AB@D@@AD@@@BA@@@AB@@@@A@ABA@@B@@@B@B@@@@AB@@@B@BA@ABA@@@@@ABAA@@A@@@AB@@A@@@@B@@@@BB@B@B@@@BB@@@DB@@@B@BCD@DABA@@B@@@B@B@B@B@B@B@B@@@B@@@@@@ADABB@@@B@B@BBDBB@@B@@BB@BBBB@BBF@BBB@F@B@@@@AB@B@@@@BBBBDBHADD@@@B@B@@@BAB@B@@@D@@@BB@@@BB@@@BBF@F@D@D@D@F@BBD@BBJBFBFBBBB@BADA@B@DB@BBBBF@B@@@FAB@DABABAFCDADC@@BABABA@AB@@AB@B@@@@A@@BAA@BA@@@A@@@@BAB@B@B@@AB@BADCBABCB@@ABA@@B@B@B@B@BAB@B@@AB@B@@AB@@@D@D@B@@@B@@@FADAD@D@DAB@BABBB@@@B@DDDB@@BBB@@BB@@B@BBBBB@@BB@@D@B@B@D@D@@@BB@@DB@@@@@B@@A@@BCBAB@@CBA@AB@@@@A@@B@@@BDF@B@@@@@@@B@BAB@@@@ADCB@B@@BBFBBB@BBD@@@@BB@@BA@@DAB@FBB@B@D@@@B@BBB@BBB@B@FBD@B@D@D@@@@B@@@@@BAD@@@DB@@BBB@@FBDB@B@@B@AB@BAD@@@@BAB@B@B@@@B@@@B@BA@@B@B@DBB@BA@@D@BAB@B@B@B@BBB@@@B@B@B@BAB@B@D@F@@@B@@@BAB@B@DAB@BBB@B@B@D@B@D@HBD@D@DBB@@@@@BA@@@C@@AC@A@A@@@A@ABA@@@A@AB@@@@AA@@@@C@@@A@@@A@@AA@@@A@A@A@AB@@A@A@@CAAC@@AA@@@AB@@A@@DABABA@@BA@A@A@@@@BA@@BAD@@@D@DAB@DAB@B@B@B@B@B@@@B@B@@@B@D@B@B@@@@@ACA@@A@@A@CA@@A@@CAAAAA@ACAA@@@ABA@@A@@AAA@@@A@@BAB@@AB@B@B@B@B@@A@@@A@@@A@@@@DA@@@@@@AA@A@AAAB@@@BAB@BA@ABA@@BCBA@AB@@@@A@@B@@@BA@@@@@@@A@@@@BA@ABA@AD@@ABA@AA@CAAA@@AC@@@AAA@ACCAA@A@A@A@@BC@A@A@@@A@@@A@AAA@AECAAAAA@@A@A@@CA@A@AB@DAFCDADC@@@AA@@A@@B@@A@@@ABAAA@@@AA@@AA@@@@AA@@AA@@@CAA@@@@@@AB@BA@@B@DAB@@@@@@A@@@A@AB@@A@@B@B@@@@ABA@@@AB@@A@@@AB@BA@@B@B@B@B@B@@@@@B@@ADAD@@@BA@@@AB@@A@@BA@A@A@@BA@@@@B@D@B@B@DAD@BAB@B@@AB@BA@@@A@@@C@A@@@AD@BA@@B@@A@@@A@@@AAA@@A@@A@A@@BA@@BA@@B@@@@ABAB@@@B@B@B@@@B@DAD@@@B@BA@@BA@@BAB@@C@A@@@AB@@@AA@A@@@A@@@@DAB@@@BA@@BA@@BA@A@@@@@A@AB@@@@AB@@@BAB@@@@@@@@@@AB@@A@@@@BA@@@@@ALCD@B@B@AAB@@A@@BABABA@@@@@AB@@AB@B@@AB@@AB@@ABA@@@@@A@@BABABA@A@@B@@AB@@ABA@@@@B@@@B@@@B@B@@@B@@@@@@ABAB@@@@@B@@@@@@BB@D@@@@@B@@@@@B@@AB@B@@@@@@B@@BB@@B@@BB@@@B@DA@@B@BABA@@B@B@BA@@B@@BB@B@B@BBB@B@BBBBD@BB@@B@B@B@B@@@@@B@B@@@@@BBBB@@B@@@B@BAB@B@@@@A@@@@BA@@BAB@@A@@BA@@B@@A@@BA@@B@BA@@B@@@BA@BB@@@B@@@@@B@@@B@@@@@@@@@B@@@B@D@B@B@@@B@BBB@B@B@@@BAF@B@@@B@@AB@@A@AB@@@FA@@BAB@B@B@B@B@@A@@B@@@B@@AB@@A@AB@@@@@B@@@@@BA@@B@@@@@BAD@B@B@@BB@BAD@D@B@B@B@B@B@BAB@B@@B@@B@@BBB@@@@BBB@BBB@BB@@BBB@DB@@@D@@B@@@B@BBB@B@@@B@D@@@B@B@DB@@@@BA@@B@D@@@B@@B@@@@B@@@@@BAB@@@B@B@D@@@@@B@B@@AB@@@B@@@B@@@B@@@B@@A@A@@B@@@BAB@@@@@@A@@BAB@@ABB@@@@B@@@@@B@@AB@BA@@@@BA@A@@@@B@@AB@B@B@@@@@B@@@BA@@@A@A@@@@@A@@@@@A@A@AB@@A@@@A@@@A@@@@@A@@B@@A@@B@@A@@BA@@@@@A@@@A@@A@@@BA@@@A@@@@B@@@@AB@@@BA@@B@@@@@@@@@B@@BB@B@@@B@@@B@B@@@@@B@@@@B@AB@@@@AB@@AB@@A@@@A@@@AB@@@@@@A@A@@@@@A@@A@@A@@@@@@@@@@@@@A@@@@B@@@@@BB@A@@B@@A@@BA@@BA@@B@@@BA@@@@@@@A@@@A@@@@@A@@@@@AB@@A@@@@@A@@@@@@@A@@B@@@@@BA@@@@@@@@BA@@@@BAB@@@@@B@B@@@B@@A@A@@@@@A@@@@@A@@BA@@@@@@BA@@BA@@@@@@@A@@@@@AB@@@@@@@@A@@@@@@@@@@@A@A@A@@@A@@@A@@A@@@@@A@@@A@@@@@@@@AB@@AB@@@@ABA@@@AB@@@BA@@B@@A@@@@@A@@A@@@@A@@@@@AB@B@BB@@B@@@@@@@BA@@@@@@BA@@B@@AA@@@@@@AA@@@@@@A@@@@@@@A@@@@A@@@@@AA@@@@@@AA@@@AA@@@@@@A@@@@@A@@@@@A@@B@@A@@A@@@@A@@@@@@@A@@@@@@A@@@A@@@@@A@@@@A@@A@@A@@@@A@A@A@A@@@A@A@@B@@A@@@A@AAA@@@@@A@@@@@@@A@@@@AA@@@@@@@@AA@@@@@AA@@@@@AB@@@@AB@@AB@@A@@BA@@@A@@A@@AA@@@A@@@AA@@@@A@A@@@@A@@@@@A@@@@@A@@@@@A@@AA@@A@@@@@AA@@@A@@@A@@A@@@@@@@@A@@@A@@@A@@BA@@@A@@BA@@@A@@@@@A@@B@@@@@B@B@@@BA@@@A@@@A@@@AA@@@@A@@@@@@@A@@D@@A@@@@@@@A@@@@@@@AB@@@@@@A@@B@@@@@AA@@AA@@@A@@@@@A@AB@@@@A@@BA@A@@@A@@@AB@@@@A@@@@B@B@@@B@B@BA@@B@@@@A@@@@@A@@@@@AA@B@@A@@@AB@@@@A@@@@BA@@@A@AA@@@@A@@@@@A@@@A@@@@@A@@@@B@@@@A@@@A@@@@@A@@@@@A@@@AB@@@@A@@@@@A@A@AA@@AB@@@@@A@@@A@A@A@A@A@A@A@@@A@A@@@A@@@A@@@A@@@AAA@A@@@@@@AA@@@A@@@A@AA@@@@AA@CAAC@AAAAC@C@CBC@A@A@@@@@AA@@@@A@@A@@@AA@@@A@AA@A@@AA@@A@@@AA@@A@@A@@@A@@A@@@@AA@@@A@@@A@@A@@@A@AB@@A@@AAEE@@A@A@A@@@@@@@@@@AAC@A@C@C@AAA@C@CAGAC@CAA@A@@@@@AB@@@@@@@B@@ADA@ADA@@B@@A@@@@AA@@@A@@@A@A@A@A@@B@@A@@@@@@@AB@A@@A@@@@@A@@A@@A@@@A@A@AA@@A@@@A@@A@@A@@@@AAACACAA@C@ABABA@AAAACACAAAA@@@@@A@AB@B@@A@@F@DADA@ABA@CF@FABADAD@B@@@BBB@BAD@BABADAB@D@B@B@BAB@B@B@DAD@B@B@B@B@DADAD@B@@@DABBB@@@B@B@DBB@BB@@B@BAB@BAB@@A@@@A@ABCBAB@B@BADA@@BAB@@@B@B@@@DBDDDDBDBDBBBBBBBBF@B@FAB@D@B@BBBBB@BBB@D@@BD@B@B@@@@@@D@B@BBABAB@B@B@DAB@B@@@@@@AB@B@B@BAB@@@@@B@BB@@B@B@@@B@@@B@B@@@B@@@B@BABBB@B@@@@@@@@A@AB@@A@A@@@ABA@@B@BA@@BA@A@@BA@A@@B@B@B@D@BBB@D@@@B@BB@@B@@A@@BA@@@AB@@A@@@@@A@@@A@@@A@@@AB@@A@@@@@ABA@@@A@A@A@@@@@A@@A@@@@@@@AAECAAC@CA@A@AAAA@CBC@C@A@C@@@A@AAC@AAA@A@@@A@AB@@A@@@CBA@@@A@@@@@A@AAA@AA@@A@@@A@ABA@A@@BA@@@AA@@@AAA@@@A@@A@@A@A@AA@CAA@A@@@A@@@@@A@@BA@@@@@A@@AA@@A@@A@@@AA@@@@@@@@AA@@A@@@A@@@AA@@A@ABA@A@A@@@A@A@A@@@@@A@@@@BAB@BAD@@A@@@@@AA@AA@@@@@A@@@@@A@@@A@A@A@ABAAA@A@@@AB@@@BA@@@@BA@@A@@AA@@A@AAA@@@A@@@A@@A@@@@AAA@@@@A@@@A@@@@@@@A@@@@AA@@A@@A@@AA@@@@@AAA@@@A@@AA@@@@@CAACAAACAAAA@BC@AAAAAAAAA@A@A@@AACAAAA@AA@@@@@A@@@A@@@@@@@AA@A@A@A@@@A@@@A@@@A@@@A@@@AB@@A@@BA@@@A@@@A@A@A@A@AA@@AA@@@@@AAA@AA@A@@@A@A@A@A@A@A@A@@@A@@AA@@@A@@BCA@@A@C@A@@@A@@@A@A@@BC@@AA@@@A@A@A@A@A@AAA@A@A@@BA@@@@@A@AB"],"encodeOffsets":[[132640,43880]]}}],"UTF8Encoding":true});}));