/* */ 
"format cjs";
﻿// There is corrently no good way to measure the text dimensions of
// SVG elements from NodeJS/jsdom. So we resort to collecting the measurements
// of all the text inside tests in a browser run, index them by font, size, weight,
// style, and dump them to this file.
//
// Since we're only doing this for visual regression tests, we don't have to worry
// about unexpected text or fonts.
//
// To refresh:
//
// 1) Set VF.SVGContext.collectMeasurements to "true" in tests/flow.html.
// 2) Open tests/flow.html in browser.
// 3) Pullup javascript console.
// 4) Copy the output of "JSON.stringify(Vex.Flow.SVGContext.measureTextCache)"
// 5) Replace string below.
// 6) Remove VF.SVGContext.collectMeasurements back to false in tests/flow.html.

VF.Test.measureTextCache = {"Anormalsans-serifbold12pt":{"x":135,"y":75,"width":11.546875,"height":18},"Bnormalsans-serifbold12pt":{"x":495,"y":75,"width":11.546875,"height":18},"1normalsans-serifnormal8pt":{"x":135,"y":79,"width":5.921875,"height":12},"2normalsans-serifnormal8pt":{"x":195,"y":79,"width":5.921875,"height":12},"3normalsans-serifnormal8pt":{"x":195,"y":14,"width":5.921875,"height":12},"4normalsans-serifnormal8pt":{"x":255,"y":14,"width":5.921875,"height":12},"5normalsans-serifnormal8pt":{"x":315,"y":14,"width":5.921875,"height":12},"6normalsans-serifnormal8pt":{"x":375,"y":14,"width":5.921875,"height":12},"7normalsans-serifnormal8pt":{"x":495,"y":79,"width":5.921875,"height":12},"D.S. alitalictimesbold12pt":{"x":555,"y":75,"width":44.890625,"height":18},"8normalsans-serifnormal8pt":{"x":555,"y":79,"width":5.921875,"height":12},"Codaitalictimesbold12pt":{"x":698,"y":75,"width":34.671875,"height":18},"9normalsans-serifnormal8pt":{"x":698,"y":79,"width":5.921875,"height":12},"Andantenormaltimesbold14pt":{"x":680,"y":72,"width":68.421875,"height":22},"Andante graziosonormaltimesbold14pt":{"x":680,"y":222,"width":139.421875,"height":22},"Violinnormaltimesnormal16pt":{"x":450,"y":30,"width":54.5,"height":24},"Right Textnormaltimesnormal16pt":{"x":600,"y":60,"width":91.828125,"height":24},"Above Textnormaltimesnormal16pt":{"x":600,"y":60,"width":101.28125,"height":24},"Below Textnormaltimesnormal16pt":{"x":600,"y":30,"width":100.09375,"height":24},"2nd linenormaltimesnormal16pt":{"x":600,"y":60,"width":69.296875,"height":24},"Left Below Textnormaltimesnormal16pt":{"x":600,"y":60,"width":140.953125,"height":24},"Right Below Textnormaltimesnormal16pt":{"x":600,"y":60,"width":152.84375,"height":24},"Whole measure restnormalArialnormal10pt":{"x":360,"y":37,"width":119.265625,"height":15},"mnormalArialnormal10pt":{"x":560,"y":49,"width":11.09375,"height":15},"TestnormalArialnormal10pt":{"x":217.96875,"y":88,"width":25.921875,"height":15},"4normalsans-serifbold10pt":{"x":390.75,"y":63,"width":7.40625,"height":15},"6normalArialnormal10pt":{"x":162.203125,"y":395.28125,"width":7.40625,"height":15.546875},"25normalArialnormal10pt":{"x":560,"y":49,"width":14.8125,"height":15},"15normalArialnormal10pt":{"x":560,"y":49,"width":14.8125,"height":15},"5normalArialnormal10pt":{"x":162.203125,"y":395.28125,"width":7.40625,"height":15.546875},"10normalArialnormal10pt":{"x":560,"y":49,"width":14.8125,"height":15},"12normalArialnormal10pt":{"x":560,"y":49,"width":14.8125,"height":15},"0normalArialnormal10pt":{"x":186.953125,"y":157.5,"width":7.40625,"height":15},"4normalArialnormal10pt":{"x":450,"y":48.78125,"width":7.40625,"height":15.546875},"3normalArialnormal10pt":{"x":253.203125,"y":43,"width":7.40625,"height":15},"6normalsans-serifbold10pt":{"x":273.5,"y":108,"width":7.40625,"height":15},"25normalsans-serifbold10pt":{"x":560,"y":69,"width":14.8125,"height":15},"10normalsans-serifbold10pt":{"x":560,"y":69,"width":14.8125,"height":15},"12normalsans-serifbold10pt":{"x":560,"y":69,"width":14.8125,"height":15},"5normalsans-serifbold10pt":{"x":539.828125,"y":128,"width":7.40625,"height":15},"6normalArialbold10pt":{"x":560,"y":49,"width":7.40625,"height":15},"25normalArialbold10pt":{"x":560,"y":49,"width":14.8125,"height":15},"10normalArialbold10pt":{"x":560,"y":49,"width":14.8125,"height":15},"12normalArialbold10pt":{"x":560,"y":49,"width":14.8125,"height":15},"5normalArialbold10pt":{"x":560,"y":49,"width":7.40625,"height":15},"9normalArialnormal10pt":{"x":460,"y":49,"width":7.40625,"height":14.65625},"FullnormalArialnormal10pt":{"x":377.078125,"y":267.78125,"width":21.453125,"height":15.546875},"1/2normalArialnormal10pt":{"x":460,"y":48.703125,"width":18.53125,"height":15.375},"1/4normalArialnormal10pt":{"x":560,"y":49,"width":18.515625,"height":15},"7normalArialnormal10pt":{"x":162.203125,"y":395.28125,"width":7.40625,"height":15.546875},"MonstrousnormalArialnormal10pt":{"x":560,"y":49,"width":62.21875,"height":15},"normalArialnormal10pt":{"x":0,"y":0,"width":0,"height":0},"UnisonnormalArialnormal10pt":{"x":74.453125,"y":388.78125,"width":41.46875,"height":15.546875},"slow.normalArialnormal10pt":{"x":46,"y":87.78125,"width":30.34375,"height":15.546875},"HnormalArialnormal10pt":{"x":450,"y":49,"width":9.625,"height":15},"AnnotationnormalArialnormal10pt":{"x":360,"y":49,"width":63.734375,"height":15},"14normalArialnormal10pt":{"x":450,"y":48.78125,"width":14.8125,"height":15.546875},"16normalArialnormal10pt":{"x":450,"y":48.78125,"width":14.8125,"height":15.546875},"PnormalArialnormal10pt":{"x":450,"y":49,"width":8.890625,"height":15},"TnormalArialnormal10pt":{"x":460,"y":49,"width":8.140625,"height":14.65625},"sl.normalArialnormal10pt":{"x":450,"y":48.78125,"width":13.3125,"height":15.546875},"1normalArialnormal10pt":{"x":186.953125,"y":157.5,"width":7.40625,"height":15},"quietitalicTimesnormal10pt":{"x":63.453125,"y":88,"width":26.65625,"height":15.328125},"mitalicTimesnormal10pt":{"x":460,"y":49,"width":9.625,"height":15.328125},"AllegroitalicTimesnormal10pt":{"x":261.21875,"y":88,"width":39.984375,"height":15.328125},"Harm.normalArialnormal10pt":{"x":460,"y":49,"width":36.28125,"height":14.65625},"(8va)italicTimesnormal10pt":{"x":460,"y":49,"width":28.125,"height":15.328125},"A.H.normalArialnormal10pt":{"x":460,"y":49,"width":25.921875,"height":14.65625},"2normalArialnormal10pt":{"x":377.078125,"y":267.78125,"width":7.40625,"height":15.546875},"pitalicTimesnormal10pt":{"x":460,"y":49,"width":6.65625,"height":15.328125},"iitalicTimesnormal10pt":{"x":460,"y":49,"width":3.703125,"height":15.328125},"aitalicTimesnormal10pt":{"x":460,"y":49,"width":6.65625,"height":15.328125},"FnormalTimesnormal10pt":{"x":310,"y":37,"width":7.40625,"height":15.328125},"mnormalTimesnormal10pt":{"x":310,"y":37,"width":10.359375,"height":15.328125},"AnormalTimesnormal10pt":{"x":310,"y":37,"width":9.625,"height":15.328125},"CnormalTimesnormal10pt":{"x":310,"y":37,"width":8.890625,"height":15.328125},"EnormalTimesnormal10pt":{"x":310,"y":37,"width":8.140625,"height":15.328125},"goodnormalArialnormal10pt":{"x":60.453125,"y":98,"width":29.65625,"height":14.65625},"evennormalArialnormal10pt":{"x":127.84375,"y":98,"width":28.90625,"height":14.65625},"undernormalArialnormal10pt":{"x":191.21875,"y":88,"width":34.09375,"height":14.65625},"beamnormalArialnormal10pt":{"x":191.21875,"y":88,"width":33.34375,"height":14.65625},"TextnormalArialnormal10pt":{"x":560,"y":49,"width":25.921875,"height":15},"Pianonormaltimesnormal16pt":{"x":145,"y":120,"width":48.578125,"height":24},"Celestanormaltimesnormal16pt":{"x":145,"y":296,"width":62.78125,"height":24},"Harpsichordnormaltimesnormal16pt":{"x":145,"y":296,"width":105.421875,"height":24},"<normalundefinednormalundefinedpt":{"x":40.359375,"y":24.453125,"width":10.140625,"height":20},"mnormalundefinednormalundefinedpt":{"x":40.359375,"y":24.453125,"width":14,"height":20},"LnormalArialnormal12pt":{"x":568,"y":34.5625,"width":8.890625,"height":17.765625},"mnormalArialnormal12pt":{"x":568,"y":34.5625,"width":13.3125,"height":17.765625},"RnormalArialnormal12pt":{"x":568,"y":34.5625,"width":11.546875,"height":17.765625},"C7normalTimesnormal12pt":{"x":310,"y":55,"width":18.671875,"height":18},"mnormalTimesnormal12pt":{"x":530,"y":55,"width":12.4375,"height":18},"FnormalTimesnormal12pt":{"x":530,"y":55,"width":8.890625,"height":18},"C7normalTimesnormal13pt":{"x":310,"y":53,"width":20.21875,"height":20},"mnormalTimesnormal13pt":{"x":310,"y":53,"width":13.46875,"height":20},"3normalsans-serifbold10pt":{"x":316.21875,"y":128,"width":7.40625,"height":15},"2normalsans-serifbold10pt":{"x":316.21875,"y":128,"width":7.40625,"height":15},"MnormalArialnormal12pt":{"x":548.15625,"y":95.5625,"width":13.3125,"height":17.765625},"Default Rest PositionsnormalArialnormal12pt":{"x":443.703125,"y":96,"width":157.40625,"height":17},"Rests Repositioned To Avoid CollisionsnormalArialnormal12pt":{"x":869.25,"y":96,"width":279.234375,"height":17},"normalArialnormal12pt":{"x":0,"y":0,"width":0,"height":0},"Center JustificationnormalArialnormal10pt":{"x":410,"y":36.78125,"width":113.28125,"height":15.546875},"Left Line 1normalArialnormal10pt":{"x":410,"y":36.78125,"width":62.21875,"height":15.546875},"RightnormalArialnormal10pt":{"x":573.859375,"y":88,"width":31.109375,"height":15},"Center JustificationnormalArialnormal12pt":{"x":330.46875,"y":85.5625,"width":136.046875,"height":17.765625},"Left Line 1normalArialnormal12pt":{"x":330.46875,"y":85.5625,"width":74.71875,"height":17.765625},"RightnormalArialnormal12pt":{"x":330.46875,"y":85.5625,"width":37.34375,"height":17.765625},"Ã¢â„¢Â­InormalArialnormal10pt":{"x":510,"y":37,"width":17.03125,"height":15},"DÃ¢â„¢Â¯/FnormalArialnormal10pt":{"x":510,"y":37,"width":28.125,"height":15},"iinormalArialnormal10pt":{"x":510,"y":37,"width":5.921875,"height":15},"CnormalArialnormal10pt":{"x":510,"y":37,"width":9.625,"height":15},"viinormalArialnormal10pt":{"x":510,"y":37,"width":12.578125,"height":15},"VnormalArialnormal10pt":{"x":510,"y":37,"width":8.890625,"height":15},"MnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":17.78125,"height":23},"Ã¢â„¢Â­InormalSerifnormal15pt":{"x":401.84375,"y":82,"width":26.65625,"height":23},"DÃ¢â„¢Â¯/FnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":51.109375,"height":23},"iinormalSerifnormal15pt":{"x":401.84375,"y":82,"width":11.109375,"height":23},"CnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":13.328125,"height":23},"viinormalSerifnormal15pt":{"x":401.84375,"y":82,"width":21.109375,"height":23},"VnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":14.4375,"height":23},"CenternormalArialnormal10pt":{"x":573.859375,"y":88,"width":40,"height":15},"CenternormalArialnormal12pt":{"x":548.15625,"y":95.5625,"width":48.015625,"height":17.765625},"gliss.normalArialnormal10pt":{"x":303.71875,"y":88,"width":30.359375,"height":15},"LeftnormalArialnormal10pt":{"x":573.859375,"y":88,"width":22.21875,"height":15},"TopnormalArialnormal10pt":{"x":573.859375,"y":88,"width":22.96875,"height":15},"una cordaitalicTimes New Romanbold12pt":{"x":450.25,"y":86,"width":67.125,"height":17},"tre cordaitalicTimes New Romanbold12pt":{"x":450.25,"y":86,"width":59.09375,"height":17},"Sost. Ped.italicTimes New Romanbold12pt":{"x":450.25,"y":86,"width":64.4375,"height":17},"15italicSerifnormal15pt":{"x":431.359375,"y":112,"width":20,"height":23},"MitalicSerifnormal15pt":{"x":456.890625,"y":112,"width":16.65625,"height":23},"vaitalicSerifnormal10.714285714285715pt":{"x":431.359375,"y":117,"width":13.46875,"height":17},"MitalicSerifnormal10.714285714285715pt":{"x":456.890625,"y":117,"width":11.890625,"height":17},"8italicSerifnormal15pt":{"x":431.359375,"y":112,"width":10,"height":23},"vbitalicSerifnormal10.714285714285715pt":{"x":431.359375,"y":117,"width":13.46875,"height":17},"Cool notesitalicSerifnormal15pt":{"x":456.890625,"y":112,"width":86.109375,"height":23},"italicSerifnormal10.714285714285715pt":{"x":0,"y":0,"width":0,"height":0},"Not cool notesitalicSerifnormal15pt":{"x":456.890625,"y":112,"width":115.546875,"height":23}," super uncoolitalicSerifnormal10.714285714285715pt":{"x":456.890625,"y":117,"width":74.15625,"height":17},"TestingnormalArialnormal15pt":{"x":456.890625,"y":112,"width":65.578125,"height":22},"MnormalArialnormal15pt":{"x":456.890625,"y":112,"width":16.65625,"height":22},"superscriptnormalArialnormal10.714285714285715pt":{"x":456.890625,"y":117,"width":69.828125,"height":16},"MnormalArialnormal10.714285714285715pt":{"x":456.890625,"y":117,"width":11.890625,"height":16},"8italicSerifnormal30pt":{"x":456.890625,"y":94,"width":20,"height":46},"MitalicSerifnormal30pt":{"x":456.890625,"y":94,"width":33.3125,"height":46},"vbitalicSerifnormal21.42857142857143pt":{"x":456.890625,"y":105,"width":26.953125,"height":32},"MitalicSerifnormal21.42857142857143pt":{"x":456.890625,"y":105,"width":23.796875,"height":32},"â™­InormalArialnormal10pt":{"x":510,"y":37,"width":17.03125,"height":15},"Dâ™¯/FnormalArialnormal10pt":{"x":510,"y":37,"width":28.125,"height":15},"â™­InormalSerifnormal15pt":{"x":401.84375,"y":82,"width":26.65625,"height":23},"Dâ™¯/FnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":51.109375,"height":23},"♭InormalArialnormal10pt":{"x":510,"y":37,"width":17.03125,"height":15},"D♯/FnormalArialnormal10pt":{"x":510,"y":37,"width":28.125,"height":15},"♭InormalSerifnormal15pt":{"x":401.84375,"y":82,"width":26.65625,"height":23},"D♯/FnormalSerifnormal15pt":{"x":401.84375,"y":82,"width":51.109375,"height":23}}