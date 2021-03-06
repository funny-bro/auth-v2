const cityH= { town: []}

const getTownSectionObject = (townObj = {}) => {
  const {name, id: admit} = townObj
  const targetTown = {
    name,
    id: admit,
    sectionList: []
  }

  const s_op = (sectionName, sectionId) => {
    targetTown.sectionList.push({
      name: sectionName,
      id:   sectionId
    })
  }

  if (admit=="01")
  {
  s_op("桃園段武陵小段","0001");s_op("桃園段中南小段","0002");s_op("桃園段長美小段","0003");s_op("桃園段公館頭小段","0004");s_op("大檜溪段","0005");s_op("小檜溪段","0006");s_op("崁子腳段","0007");s_op("中路段","0008");s_op("大樹林段","0009");s_op("埔子段埔子小段","0010");s_op("埔子段北門埔子小段","0011");s_op("埔子段八角店子小段","0012");s_op("水汴頭段水汴頭小段","0013");s_op("水汴頭段下埔子小段","0014");s_op("和平段","0015");s_op("西門段","0016");s_op("中埔段","0017");s_op("富國段","0018");s_op("法政段","0019");s_op("永安段","0020");s_op("新埔段","0021");s_op("慈文段","0022");s_op("成功段","0023");s_op("東國段","0024");s_op("東門段","0025");s_op("同安段","0026");s_op("汴洲段","0027");s_op("龍安段","0139");s_op("長安段","0141");s_op("中山段","0142");s_op("昆明段","0143");s_op("陽明段","0144");s_op("介壽段","0145");s_op("建國段","0146");s_op("建新段","0147");s_op("雲林段","0148");s_op("大林段","0149");s_op("福林段","0150");s_op("桃鶯段","0151");s_op("春日段","0173");s_op("會稽段","0174");s_op("大興段","0175");s_op("寶山段","0176");s_op("大有段","0177");s_op("福元段","0178");s_op("忠義段","0179");s_op("中正段","0180");s_op("延壽段","0181");s_op("國強段","0182");s_op("江南段","0183");s_op("中平段","0184");s_op("國聖段","0185");s_op("三聖段","0186");s_op("三元段","0187");s_op("有?段","0189");s_op("鹽埕段","0190");s_op("峨眉段","0191");s_op("龍鳳段","1402");s_op("龍祥段","1403");s_op("延平段","1404");s_op("青溪段","1405");s_op("同德段","1406");s_op("龍壽段","1407");s_op("雙龍段","1408");s_op("龍山段","1409");s_op("玉山段","1416");s_op("國際段","1417");s_op("皮寮段","1418");s_op("桃圳段","1419");s_op("中德段","1420");s_op("西埔段","1421");s_op("八角段","1422");s_op("星見段","1423");s_op("水汴頭段","1433");s_op("雲盟段","1435");s_op("中路一段","1436");s_op("中路二段","1437");s_op("中路三段","1438");s_op("八角店段","1439");s_op("中路五段","1440");s_op("三民段","1448");
  } 
  if (admit=="02")
  {
  s_op("中庄段中庄小段","0400");s_op("中庄段中庄街小段","0401");s_op("烏塗窟段","0402");s_op("石屯段上石屯小段","0403");s_op("石屯段下石屯小段","0404");s_op("月眉段","0405");s_op("番子寮段","0412");s_op("內柵段內柵小段","0413");s_op("內柵段埔尾小段","0414");s_op("內柵段下崁小段","0415");s_op("內柵段大同小段","0416");s_op("三層段坑底小段","0417");s_op("三層段尾寮小段","0418");s_op("三層段八結小段","0419");s_op("三層段三層小段","0420");s_op("三層段頭寮小段","0421");s_op("三層段十三份小段","0422");s_op("三層段阿姆坪小段","0423");s_op("三層段柑坪小段","0424");s_op("田心子段下田心子小段","0425");s_op("田心子段上田心子小段","0426");s_op("田心子段二層小段","0427");s_op("缺子段頂山腳小段","0429");s_op("缺子段缺子小段","0430");s_op("缺子段粟子園小段","0431");s_op("埔頂段","0433");s_op("南興段社角小段","0434");s_op("南興段廣福小段","0435");s_op("南興段南興小段","0436");s_op("新溪洲段","0437");s_op("舊溪洲段","0438");s_op("中正段","0477");s_op("介壽段","0478");s_op("和平段","0479");s_op("員林段","0480");s_op("武嶺段","0481");s_op("康莊段","0482");s_op("仁善段","0498");s_op("仁武段","0499");s_op("福山段","0506");s_op("金瓜段","0515");s_op("美華段","0516");s_op("慈湖段","0517");s_op("東湖段","0518");s_op("社角段","0560");s_op("仁愛段","0561");s_op("廣福段","0562");s_op("仁義段","0563");s_op("僑愛段","0564");s_op("松樹段","0565");s_op("仁德段","0566");s_op("大成段","0567");s_op("仁文段","0568");s_op("太武段","0569");s_op("仁和段","0570");s_op("大圳段","0571");s_op("瑞源段","0579");s_op("半屏段","0580");s_op("大鶯段","0581");s_op("瑞興段","0582");s_op("東隆段","0583");s_op("草厝江段","0584");s_op("南興段","0585");s_op("永昌段","0586");s_op("隆德段","0587");s_op("瑞安段","0588");s_op("石園段","0589");s_op("康義段","0590");s_op("康安段","1907");s_op("溪崁段","1908");s_op("埔尾段","1909");
  } 
  if (admit=="03")
  {
  s_op("興南段興南小段","0200");s_op("興南段中壢老小段","0201");s_op("興南段公坡小段","0202");s_op("石頭段","0203");s_op("三座屋段三座屋小段","0204");s_op("三座屋段舊社小段","0205");s_op("三民段","0206");s_op("五權段","0207");s_op("水尾段水尾小段","0208");s_op("新街段","0209");s_op("忠福段","0210");s_op("中壢埔頂段","0211");s_op("榮民段","0212");s_op("忠義段","0213");s_op("環東段","0214");s_op("遠東段","0215");s_op("成功段","0216");s_op("仁愛段","0217");s_op("復興段","0218");s_op("忠孝段","0219");s_op("大華段","0220");s_op("仁美段","0221");s_op("普義段","0222");s_op("自立段","0223");s_op("中原段","0224");s_op("健行段","0225");s_op("中北段","0226");s_op("中工段","0227");s_op("後寮段","0228");s_op("內壢段","0229");s_op("青埔段","0230");s_op("洽溪子段","0231");s_op("大崙段內厝子小段","0236");s_op("過嶺段","0237");s_op("山上段","0289");s_op("內厝段","0290");s_op("山下段","0300");s_op("月眉段","0301");s_op("西寮段","0313");s_op("前寮段","0314");s_op("東寮段","0315");s_op("平寮段","0316");s_op("中寮段","0318");s_op("後興段","0319");s_op("華興段","0320");s_op("中興段","0321");s_op("永興段","0322");s_op("振興段","0323");s_op("新興段","0324");s_op("紫雲段","0325");s_op("仁和段","0326");s_op("仁祥段","0327");s_op("仁德段","0333");s_op("榮南段","0334");s_op("普仁段","0335");s_op("富強段","0336");s_op("富台段","0337");s_op("青平段","0344");s_op("青昇段","0345");s_op("青溪段","0346");s_op("青芝段","0347");s_op("福德段","0350");s_op("上嶺段","0351");s_op("山嶺段","0352");s_op("雙嶺段","0353");s_op("芭里段","0354");s_op("大路段","0355");s_op("啟文段","0356");s_op("廣青段","0358");s_op("萬能段","0359");s_op("大江段","0360");s_op("永清段","0361");s_op("聖德段","0362");s_op("興和段","0363");s_op("洽溪段","0366");s_op("崇德段","0367");s_op("大崙段","0368");s_op("興崙段","0369");s_op("大享段","0370");s_op("培英段","0374");s_op("六和段","0379");s_op("老街溪段","0383");
  } 
  if (admit=="04")
  {
  s_op("草湳坡段草湳坡小段","0600");s_op("草湳坡段埔心小段","0601");s_op("矮坪子段","0602");s_op("頭重溪段","0603");s_op("大金山下段大金山下小段","0604");s_op("大金山下段月眉山下小段","0605");s_op("二重溪段","0606");s_op("老坑段","0607");s_op("楊梅段","0608");s_op("大平山下段","0609");s_op("秀才窩段","0610");s_op("水流東段","0611");s_op("崩坡段崩坡小段","0612");s_op("崩坡段老窩小段","0613");s_op("上四湖段","0614");s_op("伯公岡段","0615");s_op("下陰影窩段","0616");s_op("員笨段","0617");s_op("上陰影窩段","0618");s_op("三湖段","0619");s_op("頭湖段","0620");s_op("水尾段水尾小段","0621");s_op("上田心子段營盤腳小段","0625");s_op("四湖段","0668");s_op("上湖段","0669");s_op("楊湖段","0670");s_op("楊富段","0671");s_op("民富段","0672");s_op("民生段","0673");s_op("豐野段","0674");s_op("新明段","0675");s_op("國聯段","0676");s_op("富岡段","0682");s_op("梅高段","0683");s_op("員富段","0689");s_op("上田段","0690");s_op("和平段","0691");s_op("新榮段","0692");s_op("高榮段","0693");s_op("大平段","0694");s_op("東流段","0695");s_op("永福段","0696");s_op("國寶段","0697");s_op("秀才段","0698");s_op("永寧段","0699");s_op("田心段","0700");s_op("高雙段","0702");s_op("啟明段","0703");s_op("仁美段","0704");s_op("幼獅段","0705");s_op("雙榮段","0706");s_op("高上段","0707");s_op("高獅段","0708");s_op("高山段","0709");s_op("白鶴段","0710");s_op("水美段","0711");s_op("頂湖段","0712");s_op("金龍段","0713");s_op("瑞上段","0714");s_op("瑞原段","0715");s_op("民有段","0716");s_op("民豐段","0717");s_op("員本段","0718");s_op("長紅段","0719");s_op("長岡嶺段","0720");s_op("瑞湖段","0721");s_op("梅獅段","0722");s_op("瑞坪段","0723");s_op("老莊段","0724");s_op("東寧段","0725");s_op("永揚段","0726");s_op("新秀段","0727");s_op("甡甡段","0728");s_op("梅園段","0729");s_op("新富段","0730");
  } 
  if (admit=="05")
  {
  s_op("蘆竹段","0028");s_op("大竹圍段","0029");s_op("南崁下段","0030");s_op("新庄子段","0031");s_op("坑子段赤塗崎小段","0032");s_op("坑子段貓尾崎小段","0033");s_op("坑子段土地公坑小段","0034");s_op("坑子段頂社小段","0035");s_op("坑子外段山腳小段","0036");s_op("坑子外段外社小段","0037");s_op("坑子外段草子崎小段","0038");s_op("南崁內厝段內厝小段","0039");s_op("南崁內厝段溪洲小段","0040");s_op("中興段","0041");s_op("福興段","0042");s_op("新興段","0043");s_op("坑子口段海湖小段","0044");s_op("坑子口段頭前小段","0045");s_op("坑子口段後壁厝小段","0046");s_op("南崁廟口段廟口小段","0047");s_op("南崁廟口段山鼻子小段","0048");s_op("南崁廟口段蕃子厝小段","0049");s_op("南崁廟口段羊稠坑小段","0050");s_op("南崁廟口段營盤坑小段","0051");s_op("大竹段","0801");s_op("大新段","0802");s_op("錦中段","0803");s_op("錦明段","0804");s_op("南華段","0805");s_op("錦興段","0806");s_op("南崁段","0807");s_op("南新段","0808");s_op("南榮段","0809");s_op("公埔段","0820");s_op("長興段","0821");s_op("南山段","0822");s_op("長安段","0823");s_op("五福段","0824");s_op("六福段","0825");s_op("羊稠段","0826");s_op("河底段","0827");s_op("富興段","0828");s_op("水尾段","0829");s_op("八股段","0830");s_op("內興段","0831");s_op("山鼻段","0832");s_op("大興段","0833");s_op("蘆興段","0834");s_op("南竹段","0835");s_op("南青段","0836");s_op("富宏段","0837");s_op("富竹段","0838");s_op("新福段","0839");s_op("開南段","0840");s_op("文新段","0841");s_op("德林段","0842");s_op("文中段","0843");s_op("竹中段","0844");s_op("新中段","0845");s_op("上興段","0846");s_op("上竹段","0847");s_op("宏華段","0848");s_op("宏昌段","0849");s_op("宏竹段","0850");s_op("新鼻段","0864");
  } 
  if (admit=="06")
  {
  s_op("許厝港段","0052");s_op("大園段","0053");s_op("內海墘段","0054");s_op("內海墘段特工區小段","0055");s_op("埔心段埔心小段","0056");s_op("埔心段海豐坡小段","0057");s_op("埔心段三塊厝小段","0058");s_op("大牛稠段大牛稠小段","0059");s_op("大牛稠段倒厝子小段","0060");s_op("橫山段橫山小段","0061");s_op("橫山段尖山小段","0062");s_op("橫山段湳子小段","0063");s_op("雙溪口段下縣厝子小段","0064");s_op("雙溪口段溪洲子小段","0065");s_op("圳股頭段後館小段","0066");s_op("圳股頭段古亭小段","0067");s_op("圳股頭段圳股頭小段","0068");s_op("照鏡段","0069");s_op("田心子段田心子小段","0070");s_op("田心子段崁腳小段","0071");s_op("竹圍段崁腳小段","0072");s_op("竹圍段海口小段","0073");s_op("竹圍段三塊石小段","0074");s_op("竹圍段四股小段","0075");s_op("竹圍段拔子林小段","0076");s_op("竹圍段田寮小段","0077");s_op("竹圍段崁下小段","0078");s_op("竹圍段海方厝小段","0079");s_op("竹圍段竹圍小段","0080");s_op("五塊厝段大埔小段","0081");s_op("五塊厝段下埔小段","0082");s_op("沙崙段沙崙小段","0083");s_op("沙崙段埔頂小段","0084");s_op("沙崙段後厝小段","0085");s_op("沙崙段坡堵小段","0086");s_op("北港段","0128");s_op("中正段","0130");s_op("北園段","0810");s_op("中園段","0811");s_op("東園段","0812");s_op("西園段","0813");s_op("南園段","0814");s_op("青峰段","0815");s_op("青山段","0816");s_op("客運一段","0817");s_op("客運二段","0818");s_op("貨運段","0819");s_op("田心段","0851");s_op("長發段","0852");s_op("溪州段","0853");s_op("溪海段","0854");s_op("和平段","0855");s_op("華興段","0856");s_op("聖德段","0857");s_op("港口段","0858");s_op("潮音段","0859");s_op("艋舺段","0860");s_op("南港段","0861");s_op("國際段","0862");s_op("舊厝段","0863");
  } 
  if (admit=="07")
  {
  s_op("牛角坡段垹坡小段","0087");s_op("牛角坡段牛角坡小段","0088");s_op("牛角坡段水尾小段","0089");s_op("牛角坡段樟腦寮小段","0090");s_op("牛角坡段嶺頭小段","0091");s_op("新路坑段","0092");s_op("山頂段","0093");s_op("兔子坑段大湖頂小段","0094");s_op("兔子坑段大坵田下小段","0095");s_op("坪頂菜公堂段埤寮小段","0096");s_op("坪頂菜公堂段菜公堂小段","0097");s_op("坪頂下湖段","0098");s_op("舊路坑段大埔小段","0099");s_op("舊路坑段舊路坑小段","0100");s_op("舊路坑段西勢湖小段","0101");s_op("坪頂大湖段","0102");s_op("坪頂山尾段山尾小段","0103");s_op("坪頂山尾段後厝小段","0104");s_op("坪頂苦苓林段","0105");s_op("塔寮坑段大坑小段","0106");s_op("塔寮坑段坑底小段","0107");s_op("塔寮坑段大菁坑小段","0108");s_op("塔寮坑段關公嶺小段","0109");s_op("塔寮坑段馬頭小段","0110");s_op("塔寮坑段尖山外小段","0111");s_op("塔寮坑段新朝嶺小段","0112");s_op("塔寮坑段嶺腳小段","0113");s_op("南崁頂段大坑小段","0114");s_op("南崁頂段員林坑小段","0115");s_op("南崁頂段南崁頂小段","0116");s_op("南崁頂段陳厝坑小段","0117");s_op("南崁頂段蕃子窩小段","0118");s_op("楓樹坑段坪頂頂湖小段","0119");s_op("楓樹坑段楓樹坑小段","0120");s_op("新路段","0121");s_op("樂善段","0129");s_op("龜山段","0131");s_op("中興段","0132");s_op("自強段","0133");s_op("大同段","0134");s_op("壽山段","0135");s_op("半嶺段","0136");s_op("興華段","0137");s_op("文化段","0138");s_op("油廠段","0140");s_op("山德段","0152");s_op("山鶯段","0153");s_op("山福段","0154");s_op("華亞段","0188");s_op("明興段","0192");s_op("幸褔段","0193");s_op("海萍段","0194");s_op("東嶺段","0195");s_op("西嶺段","0196");s_op("精忠段","0197");s_op("陸光段","0198");s_op("龍華段","0199");s_op("迴龍段","1400");s_op("楓樹段","1401");s_op("公西段","1410");s_op("警大段","1411");s_op("下湖段","1412");s_op("大崗段","1413");s_op("公華段","1414");s_op("頂湖段","1415");s_op("南美段","1424");s_op("南上段","1425");s_op("蔗園段","1426");s_op("煉油段","1427");s_op("垹坡段","1428");s_op("吉祥段","1429");s_op("振三段","1430");s_op("體大段","1431");s_op("大埔段","1432");s_op("福源段","1434");s_op("樂捷段","1441");s_op("善捷段","1442");s_op("舊路坑一段","1443");s_op("舊路坑二段","1444");s_op("舊路坑三段","1445");s_op("塔寮坑段","1446");s_op("兔子坑段","1447");s_op("大坑段","1700");s_op("陳厝段","1701");
  } 
  if (admit=="08")
  {
  s_op("八塊段","0122");s_op("茄苳溪段","0123");s_op("大湳段","0125");s_op("霄裡段","0126");s_op("下庄子段","0127");s_op("大勇段","0155");s_op("大仁段","0156");s_op("大義段","0157");s_op("同福段","0158");s_op("東勇段","0159");s_op("大忠段","0160");s_op("永福段","0161");s_op("大華段","0162");s_op("大興段","0163");s_op("力行段","0164");s_op("青溪段","0165");s_op("前程段","0166");s_op("大福段","0167");s_op("桃德段","0168");s_op("大智段","0169");s_op("廣福段","0170");s_op("大成段","0171");s_op("福國段","0172");s_op("茄明段","1000");s_op("高城段","1001");s_op("高明段","1002");s_op("茄苳段","1003");s_op("永豐段","1004");s_op("白鷺段","1005");s_op("廣隆段","1006");s_op("中華段","1007");s_op("大明段","1008");s_op("大發段","1009");s_op("華興段","1010");s_op("麻園段","1011");s_op("瑞豐段","1012");s_op("榮興段","1013");s_op("大安段","1014");s_op("大竹段","1015");s_op("大和段","1016");s_op("大庄段","1017");s_op("興豐段","1018");s_op("興隆段","1019");s_op("福興段","1020");s_op("興仁段","1021");s_op("豐田段","1022");s_op("明智段","1023");s_op("溪尾段","1024");s_op("廣興段","1025");s_op("竹園段","1026");s_op("營盤段","1027");s_op("新霄裡段","1028");s_op("龍友段","1029");s_op("瑞祥段","1030");s_op("瑞德段","1031");s_op("豐德段","1032");s_op("連城段","1033");s_op("建國段","1034");s_op("新興段","1035");
  } 
  if (admit=="09")
  {
  s_op("三坑子段","0439");s_op("淮子埔段","0440");s_op("泉水空段","0441");s_op("九座寮段","0442");s_op("黃泥塘段","0443");s_op("烏樹林段","0445");s_op("八張犁段","0446");s_op("三洽水段","0447");s_op("竹窩子段","0448");s_op("銅鑼圈段","0449");s_op("三角林段","0450");s_op("十一份段","0451");s_op("大坪段大坪小段","0452");s_op("大坪段二坪小段","0453");s_op("四方林段四方林小段","0454");s_op("四方林段大湖底小段","0455");s_op("打鐵坑段","0456");s_op("石門段","0476");s_op("黃龍段","0484");s_op("凌雲段","0485");s_op("上林段","0486");s_op("北龍段","0487");s_op("龍興段","0488");s_op("東龍段","0489");s_op("龍華段","0490");s_op("南龍段","0491");s_op("黃唐段","0492");s_op("中山段","0493");s_op("五福段","0494");s_op("湖底段","0495");s_op("大湖段","0496");s_op("林坡段","0507");s_op("佳安段","0508");s_op("永福段","0509");s_op("碧湖段","0510");s_op("紅橋段","0511");s_op("大平段","0512");s_op("民有段","0513");s_op("三坑段","0514");s_op("永興段","0542");s_op("中興段","0543");s_op("武漢段","0544");s_op("奉慈段","0545");s_op("北興段","0546");s_op("成功段","0547");s_op("新烏樹林段","0548");s_op("燈潭段","0549");s_op("烏林段","0550");s_op("潛龍段","0551");s_op("龍祥段","0552");s_op("干城段","0553");s_op("上華段","0554");s_op("龍吟段","0555");s_op("建國段","0556");s_op("逸園段","0557");s_op("三元段","0558");s_op("三林段","0559");s_op("民豐段","0572");s_op("九座段","0573");s_op("九龍段","0574");s_op("健行段","0575");s_op("金龍段","0576");s_op("高平段","0577");s_op("龍源段","0578");s_op("雙連段","0591");s_op("富林段","0592");s_op("文化段","0593");s_op("中科段","0594");s_op("河川底段","0595");s_op("聖德段","0596");s_op("聖亭段","0597");s_op("德龍段","0598");s_op("梅龍段","0599");s_op("竹龍段","1900");s_op("八德段","1901");s_op("洽水段","1902");s_op("泥橋段","1903");s_op("和原段","1904");s_op("南坑段","1905");s_op("北坑段","1906");s_op("高原段","1910");s_op("福源段","1911");s_op("中原段","1912");s_op("打鐵段","1913");
  } 
  if (admit=="10")
  {
  s_op("平鎮段","0238");s_op("宋屋段廣興小段","0239");s_op("宋屋段高山下小段","0240");s_op("東勢段東勢小段","0241");s_op("東勢段金雞湖小段","0242");s_op("南勢段","0243");s_op("北勢段","0244");s_op("山子頂段","0245");s_op("雙連坡段","0247");s_op("廣東段","0291");s_op("廣西段","0292");s_op("廣南段","0293");s_op("廣北段","0294");s_op("忠貞段","0302");s_op("東社段","0303");s_op("平東段","0304");s_op("東安段","0305");s_op("東北段","0306");s_op("西社段","0307");s_op("廣平段","0328");s_op("廣德段","0329");s_op("復旦段","0330");s_op("義民段","0331");s_op("廣豐段","0332");s_op("延平段","1200");s_op("德育段","1201");s_op("振平段","1202");s_op("環南段","1203");s_op("北興段","1204");s_op("正義段","1205");s_op("關爺段","1206");s_op("新勢段","1207");s_op("新德段","1208");s_op("新榮段","1209");s_op("新富段","1210");s_op("新貴段","1211");s_op("廣仁段","1212");s_op("新光段","1213");s_op("莊敬段","1214");s_op("東豐段","1215");s_op("新生段","1216");s_op("湧豐段","1217");s_op("湧星段","1218");s_op("湧光段","1219");s_op("湧安段","1220");s_op("三興段","1221");s_op("富貴段","1222");s_op("南華段","1223");s_op("平南段","1224");s_op("平安段","1225");s_op("金星段","1226");s_op("金鍊段","1227");s_op("雙連段","1228");s_op("中央段","1229");s_op(" 高雙段","1230");s_op("六和段","1231");s_op("賦梅段","1232");s_op("賦北段","1233");s_op("台水段","1234");s_op("鎮安段","1235");s_op("平德段","1236");s_op("三崇段","1237");s_op("金龍段","1238");s_op("金獅段","1239");s_op("和平段","1240");s_op("中庸段","1241");s_op("鎮興段","1242");s_op("中興段","1243");s_op("興湧段","1244");s_op("建安段","1245");s_op("吉安段","1246");s_op("新北段","1247");s_op("北商段","1248");s_op("東陵段","1249");s_op("鎮東段","1250");s_op("東金段","1251");s_op("福林段","1252");s_op("長安段","1253");
  } 
  if (admit=="11")
  {
  s_op("?頭洲段?頭洲小段","0627");s_op("埔頂段埔頂小段","0631");s_op("埔頂段水碓小段","0632");s_op("東勢段東勢小段","0633");s_op("東勢段甲頭厝小段","0634");s_op("東勢段上庄子小段","0635");s_op("社子段","0636");s_op("番婆?段","0637");s_op("十五間段十五間小段","0638");s_op("十五間段十五間尾小段","0639");s_op("大坡段大坡小段","0640");s_op("大坡段三角堀小段","0641");s_op("?榔段上?榔小段","0642");s_op("?榔段下?榔小段","0643");s_op("後庄段","0644");s_op("蚵殼港段蚵殼港小段","0645");s_op("蚵殼港段深圳小段","0646");s_op("笨子港段笨子港小段","0647");s_op("笨子港段埔子頂小段","0648");s_op("笨子港段榕樹下小段","0649");s_op("崁頭厝段崁頭厝小段","0650");s_op("崁頭厝段下庄子小段","0651");s_op("大牛欄段大牛欄小段","0652");s_op("大牛欄段下埔頂小段","0653");s_op("大牛欄段後湖小段","0654");s_op("石牌嶺段","0655");s_op("下田心子段下田心子小段","0656");s_op("下田心子段赤牛欄小段","0657");s_op("下田心子段員笨小段","0658");s_op("石磊子段石磊子小段","0659");s_op("石磊子段水流小段","0660");s_op("新生段","0661");s_op("新屋段新屋小段","0662");s_op("新屋段後湖小段","0663");s_op("清華段","0664");s_op("啟文段","0665");s_op("中山段","0677");s_op("中華段","0678");s_op("中正段","0679");s_op("中興段","0680");s_op("長祥段","0681");s_op("頭洲段","0684");s_op("新洲段","0685");s_op("富九段","0686");s_op("青田段","0687");s_op("吉祥段","0688");s_op("高洲段","0701");s_op("永安段","0731");
  } 
  if (admit=="12")
  {
  s_op("觀音段新坡下小段","0249");s_op("崙坪段","0251");s_op("上大堀段","0252");s_op("下大堀段","0253");s_op("塔子腳段","0254");s_op("草漯段","0255");s_op("坑尾段","0256");s_op("白沙屯段白沙屯小段","0257");s_op("白沙屯段下庄子小段","0258");s_op("白沙屯段埔頂小段","0259");s_op("白沙屯段下埔頂小段","0261");s_op("下青埔段樹子腳小段","0264");s_op("大潭段大潭小段","0266");s_op("大潭段小飯壢小段","0267");s_op("大潭段塘背小段","0268");s_op("大潭段塘尾小段","0269");s_op("茄苳坑段對面厝小段","0270");s_op("茄苳坑段兩座屋小段","0271");s_op("三座屋段三座屋小段","0272");s_op("三座屋段橫圳頂小段","0273");s_op("三座屋段新興小段","0274");s_op("樹林子段樹林子小段","0275");s_op("樹林子段崁頭子小段","0276");s_op("樹林子段過溪子小段","0277");s_op("新坡段新坡小段","0278");s_op("新坡段張厝小段","0279");s_op("新坡段青埔子小段","0280");s_op("育仁段","0284");s_op("光明段","0285");s_op("大堀段","0286");s_op("藍埔段","0287");s_op("金湖段","0288");s_op("富源段","0295");s_op("上大段","0296");s_op("忠愛段","0297");s_op("廣福段","0298");s_op("新坡段","0299");s_op("工業區段一小段","0308");s_op("工業區段二小段","0309");s_op("工業區段三小段","0310");s_op("工業區段四小段","0311");s_op("工業區段五小段","0312");s_op("草新段","0317");s_op("坡興段","0338");s_op("新張段","0339");s_op("大同段","0340");s_op("廣興段","0341");s_op("甘泉段","0342");s_op("觀新段","0343");s_op("潭工段","0348");s_op("保潭段","0349");s_op("新富段","0357");s_op("觀塘段","0364");s_op("觀玉段","0365");s_op("忠富段","0371");s_op("大湖段","0372");s_op("中觀段","0373");s_op("溪口段","0375");s_op("草富段","0376");s_op("塔腳段","0377");s_op("廣大段","0378");s_op("忠孝段","0380");s_op("保障段","0381");s_op("崙尾段","0382");s_op("樹新段","0384");s_op("富林段","0385");s_op("埔頂段","0386");s_op("下埔頂段","0387");s_op("濱海段","0388");s_op("樹林段","0389");s_op("過溪段","0390");s_op("成功段","0391");s_op("草豊段","0392");s_op("王厝段","0393");s_op("茄苳段","0394");s_op("潭尾段","0395");
  } 
  if (admit=="13")
  {
  s_op("角板段","0457");s_op("水流東段","0458");s_op("高遶段","0459");s_op("竹頭角段","0460");s_op("拉號段","0461");s_op("基國派段","0462");s_op("哈嘎灣段","0463");s_op("高義段","0464");s_op("三光段","0465");s_op("爺亨段","0466");s_op("巴陵段","0467");s_op("霞雲段","0468");s_op("榮華段","0469");s_op("義盛段","0470");s_op("奎輝段","0471");s_op("色霧鬧段","0472");s_op("蘇樂段蘇樂小段","0473");s_op("合流段","0474");s_op("高坡段","0475");s_op("蘇樂段竹腳山小段","0483");s_op("東眼山段","0497");s_op("赫威段","0500");s_op("達觀段","0501");s_op("塔曼段","0502");s_op("萱原段","0503");s_op("四稜段","0504");s_op("新興段","0505");s_op("成福段","0519");s_op("卡普段","0520");s_op("宇內段","0521");s_op("義興段","0522");s_op("南插段","0523");s_op("斷匯段","0524");s_op("溪口段","0525");s_op("枕頭山段","0526");s_op("羅浮段","0527");s_op("長興段","0528");s_op("石牛段","0529");s_op("那結段","0530");s_op("李崠山段","0531");s_op("里安段","0532");s_op("鷹山段","0533");s_op("塔卡段","0534");s_op("夫婦山段","0535");s_op("華陵段","0536");s_op("哈崖段","0537");s_op("彌榮段","0538");s_op("卡拉段","0539");s_op("嘎拉賀段","0540");s_op("大曼段","0541");
  }
  return targetTown
}

const fillZero = (i) => i<10? `0${i}` : `${i}`

const townList = [
  {name: "桃園區", id:"01"},
  {name: "大溪區", id:"02"},
  {name: "中壢區", id:"03"},
  {name: "楊梅區", id:"04"},
  {name: "蘆竹區", id:"05"},
  {name: "大園區", id:"06"},
  {name: "龜山區", id:"07"},
  {name: "八德區", id:"08"},
  {name: "龍潭區", id:"09"},
  {name: "平鎮區", id:"10"},
  {name: "新屋區", id:"11"},
  {name: "觀音區", id:"12"},
  {name: "復興區", id:"13"},
]

for(const townObj of townList){
  const targetTown = getTownSectionObject(townObj)
  cityH.town.push(targetTown)
}

module.exports = cityH
// require('fs').writeFileSync('./temp/cityH.json', JSON.stringify(cityH))

