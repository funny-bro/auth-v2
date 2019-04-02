const cityF= { town: []}

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
  s_op("頭前段頭前小段","0300");s_op("海山頭段三角子小段","0307");s_op("海山頭段石龜小段","0308");s_op("埤角段頂埤角小段","0309");s_op("新莊段新莊小段","0311");s_op("新莊段街後小段","0312");s_op("西盛段西盛小段","0313");s_op("中港厝段","0316");s_op("頂坡角段頂坡角小段","0317");s_op("頂坡角段啞口坑小段","0318");s_op("十八份坑段十八份坑小段","0319");s_op("十八份坑段長窠子小段","0320");s_op("中正段","0403");s_op("輔大段","0404");s_op("思賢段","0406");s_op("自立段","0407");s_op("中誠段","0408");s_op("中泰段","0409");s_op("自強段","0410");s_op("復興段","0411");s_op("思源段","0412");s_op("新工段一小段","0414");s_op("新工段二小段","0415");s_op("文明段","0416");s_op("化成段","0417");s_op("鴻福段","0418");s_op("?安段","0419");s_op("立德段","0420");s_op("文德段","0421");s_op("全安段","0422");s_op("忠孝段","0423");s_op("榮和段","0424");s_op("瓊林段","0426");s_op("建國段","0427");s_op("民安段","0428");s_op("光明段","0429");s_op("光榮段","0430");s_op("公正段","0431");s_op("公館段","0432");s_op("光華段","0433");s_op("新樹段","0434");s_op("豐年段","0435");s_op("瓊泰段","0436");s_op("後港段","0437");s_op("富國段","0438");s_op("福營段","0439");s_op("四維段","0440");s_op("立言段","0441");s_op("安泰段","0443");s_op("安和段","0444");s_op("裕民段","0445");s_op("龍鳳段","0446");s_op("合鳳段","0447");s_op("丹鳳段","0448");s_op("雙鳳段","0449");s_op("興化段","0450");s_op("福基段","0451");s_op("頭興段","0452");s_op("幸福段","0453");s_op("昌隆段","0454");s_op("和平段","0455");s_op("榮富段","0456");s_op("景德段","0491");s_op("中原段","0494");s_op("副都心段一小段","0495");s_op("信華段二小段","0498");s_op("副都心段三小段","0499");s_op("副都心段四小段","2200");s_op("副都心段五小段","2201");s_op("副都心段六小段","2202");s_op("副都心段七小段","2203");s_op("副都心段八小段","2204");s_op("副都心段九小段","2205");s_op("中原段一小段","2206");s_op("中原段二小段","2207");s_op("新豐段","2210");s_op("新知段","2221");s_op("中環段","2226");s_op("信華段三小段","2227");s_op("壽山段","2237");s_op("青山段","2238");
  } 
  if (admit=="02")
  {
  s_op("南勢埔段南勢埔小段","0322");s_op("南勢埔段頭湖小段","0323");s_op("南勢埔段大牛稠小段","0324");s_op("南勢埔段員崛子小段","0325");s_op("南勢埔段大崙小段","0326");s_op("南勢埔段南勢埔尾小段","0328");s_op("南勢埔段過崙子小段","0330");s_op("太平嶺段","0331");s_op("菁埔段菁埔小段","0332");s_op("菁埔段中湖小段","0333");s_op("菁埔段樹林口小段","0334");s_op("菁埔段東湖小段","0335");s_op("菁埔段湖子小段","0336");s_op("菁埔段三塊厝小段","0337");s_op("菁埔段粉寮水尾小段","0338");s_op("菁埔段後湖小段","0339");s_op("菁埔段新寮小段","0340");s_op("菁埔段漳洲寮小段","0341");s_op("瑞樹坑段瑞樹坑小段","0342");s_op("瑞樹坑段後坑小段","0343");s_op("小南灣段頂福小段","0344");s_op("小南灣段下福小段","0345");s_op("大南灣段寶斗厝坑小段","0346");s_op("大南灣段嘉溪子坑小段","0347");s_op("工二段","0351");s_op("國宅段","0405");s_op("麗林段","0465");s_op("力行段","0466");s_op("建林段","0467");s_op("新林段","0468");s_op("林口段","2211");s_op("行政段","2212");s_op("麗林一段","2213");s_op("麗林二段","2214");s_op("竹林段","2215");s_op("佳林段","2216");
  } 
  if (admit=="03")
  {
  s_op("五股坑段五股坑小段","0352");s_op("五股坑段壟?坑小段","0353");s_op("五股坑段冷水坑小段","0354");s_op("水碓段水碓小段","0355");s_op("水碓段水碓窠小段","0356");s_op("水碓段塭底小段","0357");s_op("石土地公段石土地公小段","0358");s_op("石土地公段外寮小段","0359");s_op("石土地公段蓬萊坑小段","0360");s_op("更寮段更寮小段","0361");s_op("更寮段褒子寮小段","0362");s_op("更寮段洲子尾小段","0363");s_op("更寮段鴨母港小段","0364");s_op("更寮段下竹圍小段","0365");s_op("更寮段樹林頭小段","0366");s_op("更寮段羅古小段","0367");s_op("洲子段洲子小段","0368");s_op("洲子段御史坑小段","0369");s_op("新塭段新塭小段","0370");s_op("成子寮段成子寮小段","0372");s_op("成子寮段獅子頭小段","0373");s_op("成子寮段北勢坑小段","0374");s_op("觀音坑段坑口小段","0375");s_op("觀音坑段直坑小段","0376");s_op("觀音坑段崩山小段","0377");s_op("觀音坑段中坑小段","0378");s_op("觀音坑段內岩小段","0379");s_op("觀音坑段田子埔小段","0380");s_op("觀音坑段福隆山小段","0381");s_op("五工段","0413");s_op("石德段","0425");s_op("御史段","0492");s_op("成功段","0493");s_op("成州段","2208");s_op("芳洲段","2209");s_op("德音段","2217");s_op("登林段","2218");s_op("陸光段","2219");s_op("五股段","2220");s_op("成蘆段","2222");s_op("成福段","2223");s_op("成泰段","2224");s_op("中興段","2225");s_op("成子寮段","2239");s_op("觀音東段","2240");s_op("觀音西段","2241");s_op("五股坑一段","2242");s_op("五股坑二段","2243");s_op("五股坑三段","2244");s_op("福德段","2245");
  } 
  if (admit=="04")
  {
  s_op("光華段","1734");s_op("重陽段","1735");s_op("復興段","1742");s_op("民族段","1743");s_op("民權段","1744");s_op("民生段","1745");s_op("保新段","1746");s_op("保佑段","1747");s_op("保和段","1748");s_op("集賢段","1749");s_op("鷺江段","1750");s_op("信義段","1751");s_op("成功段","1752");s_op("和平段","1753");s_op("民義段","1754");s_op("樹德段","1755");s_op("中山段","1756");s_op("中原段","1757");s_op("光明段","1758");s_op("九芎段","1759");s_op("正義段","1762");
  } 
  if (admit=="05")
  {
  s_op("三重埔段後埔小段","1706");s_op("三重埔段田心子小段","1707");s_op("三重埔段過圳小段","1709");s_op("三重埔段菜寮小段","1711");s_op("三重埔段大竹圍小段","1713");s_op("三重埔段同安厝小段","1714");s_op("三重埔段竹圍子小段","1715");s_op("三重埔段簡子畬小段","1716");s_op("重新段壹小段","1717");s_op("二重埔段頂崁小段","1718");s_op("二重埔段五谷王小段","1719");s_op("二重埔段頂田心子小段","1720");s_op("二重埔段陡門頭小段","1721");s_op("二重埔段中興小段","1722");s_op("二重埔段大有小段","1723");s_op("幸福段","1724");s_op("永安段","1725");s_op("仁愛段","1726");s_op("仁義段","1727");s_op("五華段","1728");s_op("碧華段","1729");s_op("新海段","1730");s_op("永德段","1731");s_op("忠孝段","1732");s_op("仁興段","1733");s_op("龍濱段","1736");s_op("龍門段","1737");s_op("三和段","1738");s_op("正義段","1739");s_op("安慶段","1740");s_op("大智段","1741");s_op("光榮段","1760");s_op("長樂段","1761");s_op("正義北段","1763");s_op("長壽段","1764");s_op("文化北段","1765");s_op("福德北段","1766");s_op("大同南段","1767");s_op("光興段","1768");s_op("福德南段","1769");s_op("富貴段","1770");s_op("大仁段","1771");s_op("正民段","1772");s_op("明志段","1773");s_op("德新段","1774");s_op("雙園段","1775");s_op("三民段","1776");s_op("錦田段","1777");s_op("田安段","1778");s_op("中華段","1779");s_op("興華段","1780");s_op("過田段","1781");s_op("菜寮段","1782");s_op("中民段","1783");s_op("大安段","1784");s_op("集美段","1785");s_op("大有段","1786");s_op("二重段","1787");s_op("成功段","1788");s_op("疏洪段","1789");s_op("頂崁段","1790");s_op("興德段","1791");s_op("中興段","1792");s_op("五谷王一段","1793");s_op("三重段","1794");s_op("五谷王段","1795");s_op("仁信段","1796");
  } 
  if (admit=="06")
  {
  s_op("泰山段一小段","0382");s_op("泰山段二小段","0383");s_op("泰山段三小段","0384");s_op("楓樹腳段楓樹腳小段","0391");s_op("貴子坑段","0392");s_op("大窠坑段大窠坑小段","0393");s_op("大窠坑段柯厝坑小段","0394");s_op("大窠坑段錢厝坑小段","0395");s_op("大窠坑段橫窠子小段","0396");s_op("大窠坑段半山子小段","0397");s_op("大窠坑段?頭窠小段","0398");s_op("山腳段大窠口小段","0400");s_op("山腳段溝子墘小段","0401");s_op("楓江段","0457");s_op("同興段","0458");s_op("泰林段","0459");s_op("黎明段","0460");s_op("同榮段","0461");s_op("南林段","0462");s_op("明志段","0463");s_op("中山段","0464");s_op("新林段一小段","0469");s_op("新林段二小段","0470");s_op("新林段三小段","0471");s_op("新林段四小段","0472");s_op("新林段五小段","0473");s_op("新林段六小段","0474");s_op("新林段七小段","0475");s_op("新林段八小段","0476");s_op("新林段九小段","0477");s_op("新林段十小段","0478");s_op("新林段十一小段","0479");s_op("新林段十二小段","0480");s_op("新林段十三小段","0481");s_op("新林段十四小段","0482");s_op("新林段十五小段","0483");s_op("新林段十六小段","0484");s_op("新林段十七小段","0485");s_op("新林段十八小段","0486");s_op("新林段十九小段","0487");s_op("新林段二十小段","0488");s_op("新林段二一小段","0489");s_op("新林段二二小段","0490");s_op("副都心段二小段","0496");s_op("信華段一小段","0497");s_op("信華段五小段","2228");s_op("福興段","2229");s_op("同興一段","2230");s_op("文程段","2231");s_op("貴和段","2232");s_op("新泰段","2233");s_op("橫窠段","2234");s_op("大窠段","2235");s_op("自強段","2236");
  } 
  if (admit=="07")
  {
  s_op("大坪林段七張小段","0500");s_op("大坪林段二十張小段","0502");s_op("安坑段頂城小段","0506");s_op("安坑段下城小段","0507");s_op("安坑段頭城小段","0508");s_op("安坑段二城小段","0509");s_op("安坑段三城小段","0510");s_op("安坑段四城小段","0511");s_op("安坑段五城小段","0512");s_op("安坑段柴埕小段","0513");s_op("安坑段十四分小段","0514");s_op("安坑段上五十六分小段","0515");s_op("安坑段下五十六分小段","0516");s_op("安坑段六十三分小段","0517");s_op("安坑段二叭子小段","0518");s_op("安坑段石頭厝小段","0519");s_op("安坑段芊蓁湖小段","0520");s_op("安坑段大坪腳小段","0521");s_op("安坑段大湖底小段","0522");s_op("安坑段大坪頂小段","0523");s_op("安坑段大茅埔小段","0524");s_op("安坑段內挖子小段","0526");s_op("安坑段深坑子小段","0527");s_op("安坑段小粗坑小段","0528");s_op("安坑段大粗坑小段","0529");s_op("安坑段溪州小段","0530");s_op("安坑段溪西小段","0531");s_op("安坑段木柵小段","0532");s_op("安坑段樟荖寮小段","0534");s_op("安坑段公館崙小段","0535");s_op("安坑段三城湖小段","0536");s_op("安坑段一股坡小段","0537");s_op("安坑段豬肚山小段","0538");s_op("安坑段大楠坑小段","0539");s_op("安坑段九甲三小段","0540");s_op("安坑段薏仁坑小段","0541");s_op("直潭段直潭小段","0542");s_op("直潭段灣潭小段","0543");s_op("直潭段塗潭小段","0544");s_op("直潭段過橋坑小段","0545");s_op("直潭段蘆竹濫小段","0546");s_op("直潭段小粗坑小段","0547");s_op("直潭段赤皮湖小段","0548");s_op("直潭段屈尺小段","0549");s_op("直潭段湖子內小段","0550");s_op("直潭段康雅崙小段","0551");s_op("直潭段頂石厝小段","0552");s_op("直潭段猴湖小段","0553");s_op("直潭段磺窟小段","0554");s_op("直潭段廣興小段","0555");s_op("直潭段下石厝小段","0556");s_op("直潭段中溪洲小段","0557");s_op("直潭段小坑小段","0558");s_op("青潭段蕃薯寮小段","0559");s_op("青潭段楣子寮小段","0560");s_op("青潭段六分小段","0561");s_op("青潭段十分小段","0562");s_op("青潭段十二分小段","0563");s_op("青潭段四十分小段","0564");s_op("青潭段十六分小段","0565");s_op("青潭段員潭子坑小段","0566");s_op("青潭段稻子園坑小段","0567");s_op("青潭段油車坑小段","0568");s_op("青潭段湖閃坑小段","0569");s_op("青潭段雙坑小段","0570");s_op("青潭段?子頭小段","0571");s_op("青潭段大崎腳小段","0572");s_op("青潭段土崎頭小段","0573");s_op("青潭段德高嶺小段","0574");s_op("青潭段濕水子小段","0575");s_op("青潭段青潭小段","0576");s_op("平廣段","0577");s_op("龜山段龜山小段","0578");s_op("龜山段大粗坑小段","0579");s_op("安坑段車子路小段","0754");s_op("秀岡段","0756");s_op("華城一段","0757");s_op("華城二段","0758");s_op("花園段","0759");s_op("中正段","0761");s_op("中華段","0762");s_op("民權段","0763");s_op("大豐段","0764");s_op("建國段","0765");s_op("明德段","0766");s_op("中央段","0767");s_op("莊敬段","0768");s_op("復興段","0769");s_op("順安段","0770");s_op("寶元段","0771");s_op("禾豐一段","0772");s_op("禾豐二段","0773");s_op("福園段","0775");s_op("環河段","0776");s_op("北新段","0777");s_op("北宜段","0778");s_op("碧潭段","0779");s_op("寶強段","0780");s_op("寶橋段","0781");s_op("寶興段","0782");s_op("五峰段","0783");s_op("惠國段","0784");s_op("秀岡一段","0785");s_op("秀岡三段","0787");s_op("秀岡四段","0788");s_op("行政段","0789");s_op("光明段","0790");s_op("文山段","0791");s_op("新坡段","0792");s_op("廣明段","0793");s_op("太平段","0797");s_op("永業段","0798");s_op("新和段","0799");s_op("安和段","0800");s_op("安德段","0801");s_op("民安段","0802");s_op("栗子園段","0826");s_op("安康段","0833");s_op("安華段","0834");s_op("陽光段","0835");s_op("黎明段","0836");s_op("小城段","0837");s_op("玫瑰段","0838");s_op("安豐段","0839");s_op("蘭溪段","0840");s_op("香坡段","0841");s_op("雙城段","0842");s_op("安泰段","0843");s_op("錦秀段","0844");s_op("秀水段","0845");s_op("竹林段","0846");s_op("安興段","0847");s_op("祥和段","0848");s_op("安城段","0849");s_op("濛濛谷段","0850");s_op("櫻花段","0851");s_op("梅花湖段","0852");s_op("斯馨段","0853");s_op("新烏段","0854");s_op("新龜山段","0857");s_op("松林段","0858");s_op("雙溪口段","0859");s_op("長福段","0860");s_op("新小坑段","0861");
  } 
  if (admit=="08")
  {
  s_op("大溪墘段大溪墘小段","0580");s_op("大溪墘段大湖格小段","0581");s_op("大溪墘段藤寮坑小段","0582");s_op("大溪墘段下紙寮坑小段","0583");s_op("大溪墘段蚯蚓坑小段","0584");s_op("雙溪段串空湖小段","0585");s_op("雙溪段雙溪小段","0586");s_op("雙溪段吊橋小段","0587");s_op("蓬菜寮段蓬菜寮小段","0588");s_op("蓬菜寮段蕃薯寮小段","0589");s_op("蓬菜寮段半路店小段","0590");s_op("蓬菜寮段湳子小段","0591");s_op("蓬菜寮段小粗坑小段","0592");s_op("烏塗窟段烏塗窟小段","0593");s_op("烏塗窟段摸乳巷小段","0594");s_op("烏塗窟段溪邊寮小段","0595");s_op("烏塗窟段員山子小段","0596");s_op("烏塗窟段蛇舌子小段","0597");s_op("烏塗窟段橫坪小段","0598");s_op("烏塗窟段四分子小段","0599");s_op("烏塗窟段樟空子小段","0600");s_op("烏塗窟段月扇湖小段","0601");s_op("烏塗窟段大格門小段","0602");s_op("小格頭段小格頭小段","0603");s_op("小格頭段內楒子腳小段","0604");s_op("小格頭段外楒子腳小段","0605");s_op("小格頭段楠枋寮小段","0606");s_op("小格頭段中楒子腳小段","0607");s_op("小格頭段崙尾寮小段","0608");s_op("小格頭段五郎寮小段","0609");s_op("小格頭段塗潭小段","0610");s_op("小格頭段荖寮小段","0611");s_op("小格頭段車閂寮小段","0612");s_op("小格頭段十股寮小段","0613");s_op("小格頭段水底寮小段","0614");s_op("小格頭段直潭小段","0615");s_op("小格頭段潭腰小段","0616");s_op("小格頭段竹坑小段","0617");s_op("小格頭段獅子頭坑小段","0618");s_op("小格頭段坑內小段","0619");s_op("小格頭段石崁頭小段","0620");s_op("小格頭段十三股小段","0621");s_op("小格頭段濕水子小段","0622");s_op("小格頭段土巷小段","0623");s_op("小格頭段大湖小段","0624");s_op("小格頭段火燒樟小段","0625");s_op("小格頭段雷公坡小段","0626");s_op("小格頭段二格小段","0627");s_op("小格頭段小金瓜寮小段","0628");s_op("小格頭段柑腳?小段","0629");s_op("新興坑段新興坑小段","0630");s_op("新興坑段深按小段","0631");s_op("新興坑段八分寮小段","0632");s_op("排寮段排寮小段","0633");s_op("排寮段十八重溪小段","0634");s_op("排寮段石碇子埔小段","0635");s_op("排寮段番子坑小段","0636");s_op("松柏崎段九橧坪小段","0637");s_op("松柏崎段頂紙寮坑小段","0638");s_op("松柏崎段耳空龜小段","0639");s_op("松柏崎段松柏崎小段","0640");s_op("乾溝段乾溝小段","0641");s_op("乾溝段後坑子小段","0642");s_op("乾溝段石硿子小段","0643");s_op("石碇段石碇小段","0644");s_op("火燒樟段","0645");s_op("員潭子坑段員潭子坑小段","0646");s_op("員潭子坑段九寮子埔小段","0647");s_op("員潭子坑段外按小段","0648");s_op("員潭子坑段湳窟小段","0649");s_op("員潭子坑段小粗坑小段","0650");s_op("員潭子坑段上橫坪小段","0651");s_op("員潭子坑段石崁小段","0652");s_op("員潭子坑段下橫坪小段","0653");s_op("崩山段崩山小段","0654");s_op("崩山段大崙小段","0655");s_op("崩山段磨石坑小段","0656");s_op("玉桂嶺段玉桂嶺小段","0657");s_op("玉桂嶺段西勢坑小段","0658");s_op("玉桂嶺段九芎坑小段","0659");s_op("玉桂嶺段峰頭小段","0660");s_op("玉桂嶺段南勢坑小段","0661");s_op("楓子林段楓子林小段","0662");s_op("楓子林段冷飯坑小段","0663");s_op("鹿窟段鹿窟小段","0664");s_op("玉豐段","0812");
  } 
  if (admit=="09")
  {
  s_op("深坑子段深坑子小段","0665");s_op("深坑子段新埤內小段","0666");s_op("深坑子段麻竹寮小段","0668");s_op("深坑子段草地頭小段","0669");s_op("深坑子段半山小段","0670");s_op("萬順寮段萬順寮小段","0671");s_op("萬順寮段圳古後小段","0672");s_op("萬順寮段大坑外股小段","0673");s_op("萬順寮段大坑小段","0674");s_op("萬順寮段三腳木小段","0675");s_op("萬順寮段草地尾小段","0676");s_op("烏月段烏月小段","0677");s_op("烏月段旺?小段","0678");s_op("升高坑段升高坑小段","0679");s_op("升高坑段炙子頭小段","0680");s_op("土庫段土庫尖小段","0681");s_op("土庫段崩山小段","0682");s_op("土庫段賴仲坑小段","0683");s_op("土庫段大坪小段","0684");s_op("土庫段土庫小段","0685");s_op("阿柔坑段阿柔洋小段","0686");s_op("阿柔坑段?腳坑小段","0687");s_op("阿柔坑段向天湖小段","0688");s_op("阿柔坑段土巷小段","0689");s_op("阿柔坑段南邦寮小段","0690");s_op("阿柔坑段王軍寮小段","0691");s_op("阿柔坑段大崙尾小段","0692");s_op("阿柔坑段炮子崙小段","0693");s_op("阿柔坑段公館後小段","0694");s_op("阿柔坑段大崙腳小段","0695");s_op("永安段","0820");s_op("埔新段","0821");
  } 
  if (admit=="10")
  {
  s_op("坪林段坪林小段","0696");s_op("坪林段水柳腳小段","0697");s_op("坪林段黃舉皮寮小段","0698");s_op("坪林段烏窟子小段","0699");s_op("坪林段嶺腳坑小段","0700");s_op("九芎林段九芎林小段","0701");s_op("九芎林段鶯子瀨小段","0702");s_op("九芎林段石?小段","0703");s_op("九芎林段尖山湖小段","0704");s_op("九芎林段?牛寮小段","0705");s_op("九芎林段倒吊子小段","0706");s_op("?魚堀段?魚堀小段","0708");s_op("?魚堀段仁里?小段","0709");s_op("灣潭段灣潭小段","0710");s_op("灣潭段幼瀨小段","0711");s_op("灣潭段石硿子小段","0712");s_op("灣潭段粗窟小段","0713");s_op("坑子口段桶盤嶼小段","0714");s_op("坑子口段崩山坑小段","0715");s_op("坑子口段竹子易小段","0716");s_op("坑子口段樹梅嶺小段","0717");s_op("坑子口段上坑子口小段","0718");s_op("坑子口段下坑子口小段","0719");s_op("水聳凄坑段水聳凄坑小段","0720");s_op("水聳凄坑段大湖尾小段","0721");s_op("水聳凄坑段磨壁潭小段","0722");s_op("水聳凄坑段苦苓腳小段","0723");s_op("厚德岡坑段厚德岡坑小段","0724");s_op("厚德岡坑段東坑小段","0725");s_op("厚德岡坑段籐寮坑小段","0726");s_op("厚德岡坑段大湖尾坑小段","0727");s_op("大粗坑段大粗坑小段","0728");s_op("大粗坑段九芎坑小段","0729");s_op("大粗坑段虎寮潭小段","0730");s_op("大舌湖段大舌湖小段","0731");s_op("大舌湖段樟空子小段","0732");s_op("大舌湖段乾溪小段","0733");s_op("大舌湖段粗石斛小段","0734");s_op("楣子寮段楣子寮小段","0735");s_op("楣子寮段小粗坑小段","0736");s_op("闊瀨段闊瀨小段","0737");s_op("闊瀨段枋山坑小段","0738");s_op("闊瀨段豹子?小段","0739");s_op("柑腳坑段柑腳坑小段","0740");s_op("鷺鶿岫段鷺鶿岫小段","0741");s_op("鷺鶿岫段中心崙小段","0742");s_op("姑婆寮段","0743");s_op("金瓜寮段","0744");s_op("桶後北段","0813");s_op("鹿寮段","0814");s_op("姑婆寮西段","0815");s_op("姑婆寮東段","0816");s_op("坪堵段","0817");s_op("水鴨嶺段","0818");s_op("碧湖段","0819");
  } 
  if (admit=="11")
  {
  s_op("忠治段","0746");s_op("信賢段","0747");s_op("福山段","0748");s_op("哪哮段","0749");s_op("屯鹿段","0750");s_op("啦卡段","0751");s_op("小寮段","0752");s_op("水源段","0794");s_op("達棒段","0795");s_op("哈盆段","0796");s_op("羅宏段","0803");s_op("桶后段","0804");s_op("東坑段","0805");s_op("模古段","0806");s_op("拳頭母段","0807");s_op("馬萬段","0808");s_op("茶墾段","0809");s_op("檜山段","0810");s_op("馬岸段","0811");s_op("大桶山段","0822");s_op("烏沙段","0823");s_op("羅培段","0824");s_op("羅蘭段","0825");s_op("南勢段","0827");s_op("環山段","0828");s_op("西羅岸段","0829");s_op("西坑段","0830");s_op("內洞段","0831");s_op("波露段","0832");s_op("嘎佑段","0855");s_op("堰堤段","0856");
  } 
  if (admit=="14")
  {
  s_op("忠孝段","0001");s_op("仁愛段","0002");s_op("信義段","0003");s_op("和平段","0004");s_op("重慶段","0005");s_op("府中段","0006");s_op("民族段","0007");s_op("民權段","0008");s_op("中山段","0009");s_op("介壽段","0010");s_op("海山段","0011");s_op("國光段","0012");s_op("光仁段","0013");s_op("光華段","0014");s_op("大庭段","0015");s_op("文化段","0016");s_op("公館段","0017");s_op("幸福段","0018");s_op("埔墘段","0021");s_op("港子嘴段","0022");s_op("江子翠段第一崁小段","0023");s_op("江子翠段第二崁小段","0024");s_op("江子翠段第三崁小段","0025");s_op("江子翠段第四崁小段","0026");s_op("江子翠段新埔小段","0027");s_op("江子翠段溪頭小段","0028");s_op("江子翠段大埔尾小段","0029");s_op("江子翠段中洲小段","0030");s_op("新興段","0160");s_op("亞東段","0161");s_op("新雅段","0162");s_op("僑中段","0163");s_op("大觀段","0164");s_op("力行段","0165");s_op("福安段","0166");s_op("大同段","0167");s_op("篤行段","0168");s_op("民生段","0169");s_op("中正段","0170");s_op("中興段","0171");s_op("成功段","0172");s_op("振興段","0173");s_op("永安段","0174");s_op("龍安段","0175");s_op("新板段一小段","0176");s_op("新板段二小段","0177");s_op("新板段三小段","0188");s_op("五權段","0198");s_op("光環段","0216");s_op("大豐段","0217");s_op("新都段","0218");s_op("永翠段","0220");s_op("江翠段","0221");s_op("板翠段","0222");s_op("環翠段","0223");
  } 
  if (admit=="15")
  {
  s_op("白雞段白雞小段","0039");s_op("白雞段紫微小段","0040");s_op("白雞段烏才頭小段","0041");s_op("十三添段犁舌尾小段","0042");s_op("十三添段打鐵坑小段","0043");s_op("十三添段十三添小段","0044");s_op("礁溪段","0045");s_op("公館後段公館後小段","0046");s_op("公館後段劉厝埔小段","0047");s_op("公館後段隆恩埔小段","0048");s_op("成福段成福小段","0049");s_op("成福段小暗坑小段","0050");s_op("麥子園段劉厝埔小段","0051");s_op("麥子園段麥子園小段","0052");s_op("山員潭子段","0053");s_op("大寮段","0054");s_op("麻園段溪墘寮小段","0057");s_op("麻園段麻園小段","0058");s_op("大埔段大埔小段","0059");s_op("大埔段柑子樹腳小段","0060");s_op("大埔段圳子頭小段","0061");s_op("大埔段二鬮小段","0062");s_op("大埔段十八份小段","0063");s_op("大埔段五鬮小段","0064");s_op("鳶山段","0065");s_op("中埔段","0066");s_op("劉厝埔段","0067");s_op("隆恩埔段","0068");s_op("東眼段東麓小段","0069");s_op("東眼段金敏子小段","0070");s_op("茅埔段","0071");s_op("挖子段","0072");s_op("橫溪段溪南小段","0073");s_op("橫溪段溪北小段","0074");s_op("橫溪段坪林小段","0075");s_op("橫溪段頂寮小段","0076");s_op("福德坑段","0077");s_op("竹崙段竹坑小段","0078");s_op("竹崙段崙尾小段","0079");s_op("八張段坡子墘小段","0081");s_op("五寮段五寮小段","0082");s_op("五寮段菜園地小段","0083");s_op("五寮段詩朗小段","0084");s_op("插角段熊空小段","0085");s_op("插角段有木小段","0086");s_op("插角段外插角小段","0087");s_op("插角段內插角小段","0088");s_op("介壽段","1909");s_op("東眼段東眼小段","1910");s_op("民權段","1911");s_op("民生段","1912");s_op("仁愛段","1913");s_op("和平段","1914");s_op("國光段","1915");s_op("文化段","1916");s_op("隆恩段","1917");s_op("大仁段","1918");s_op("大學段一小段","1932");s_op("民族段","1934");s_op("中園段","1935");s_op("湊合段","1943");s_op("佳興段","1965");s_op("長泰段","1966");s_op("安溪段","1967");s_op("永安段","1968");s_op("正義段","1969");s_op("龍福段","1970");
  } 
  if (admit=="16")
  {
  s_op("橋子頭段","0089");s_op("大湖段大湖小段","0090");s_op("大湖段崁腳小段","0091");s_op("大湖段大竹圍小段","0092");s_op("大湖段三界公坑小段","0093");s_op("大湖段樟普坑小段","0094");s_op("大湖段圳子頭坑小段","0095");s_op("鶯歌段牛灶坑小段","0096");s_op("大湖段中坑小段","0097");s_op("南靖厝段","0098");s_op("尖山段尖山埔小段","0099");s_op("尖山段尖山小段","0100");s_op("鶯歌段鶯歌小段","0101");s_op("二甲九段","0102");s_op("阿南坑段阿南坑小段","0103");s_op("阿南坑段茶山小段","0104");s_op("阿南坑段阿四坑小段","0105");s_op("中山段","1905");s_op("中正段","1906");s_op("建國段","1907");s_op("國慶段","1908");s_op("陶瓷段","1944");s_op("國姓段","1945");s_op("昌福段","1946");s_op("永昌段","1947");s_op("鳳鳴段","1952");s_op("德昌段","1955");s_op("永吉段","1956");s_op("鳳福段","1957");s_op("福德段","1958");s_op("鳳祥段","1959");s_op("工藝段","1960");s_op("尖山堆段","1961");s_op("尖山腳段","1962");s_op("二橋段","1963");s_op("三鶯段","1971");s_op("南靖段","1972");s_op("二甲段","1977");s_op("橋子頭一段","1978");s_op("橋子頭二段","1979");s_op("橋子頭三段","1980");s_op("國際段","1981");s_op("西湖段","1982");
  } 
  if (admit=="17")
  {
  s_op("石灰坑段石灰坑小段","0106");s_op("石灰坑段風爐坑小段","0107");s_op("石灰坑段上斗門頭小段","0108");s_op("石灰坑段下斗門頭小段","0109");s_op("樟樹窟段","0110");s_op("坡內坑段","0111");s_op("桃子腳段","0112");s_op("三角埔段","0113");s_op("圳岸腳段","0114");s_op("崙子段","0115");s_op("彭福段彭厝小段","0117");s_op(" 彭福段樹林小段","0120");s_op("?子寮段","0121");s_op("潭底段","0122");s_op("潭底段工業小段","0123");s_op("石頭溪段上石頭溪小段","0124");s_op("石頭溪段下石頭溪小段","0125");s_op("石頭溪段田尾小段","0126");s_op("石頭溪段柑園小段","0127");s_op("山子腳段山子腳小段","0128");s_op("山子腳段太高坑小段","0129");s_op("山子腳段橫坑子小段","0130");s_op("山子腳段中坑小段","0131");s_op("山子腳段蓋淡坑小段","0132");s_op("三塊厝段","0133");s_op("溪墘厝段溪墘厝小段","0134");s_op("溪墘厝段柑園小段","0135");s_op("博愛段","1900");s_op("復興段","1901");s_op("樹德段","1902");s_op("育英段","1903");s_op("大同段","1904");s_op("東昇段","1919");s_op("鎮前段","1920");s_op("太平段","1921");s_op("中華段","1922");s_op("水源段","1923");s_op("慈恩段","1924");s_op("東豐段","1925");s_op("樂山段","1926");s_op("東山段","1927");s_op("味王段","1928");s_op("新興段","1929");s_op("山佳段","1930");s_op("佳園段","1931");s_op("大學段二小段","1933");s_op("樹新段","1936");s_op("文林段","1937");s_op("大安段","1938");s_op("光武段","1939");s_op("三福段","1940");s_op("武林段","1941");s_op("備內段","1942");s_op("三龍段","1948");s_op("三多段","1949");s_op("圳生段","1950");s_op("圳德段","1951");s_op("圳民段","1953");s_op("圳福段","1954");s_op("福興段","1964");s_op("北園段","1973");s_op("西園段","1974");s_op("南園段","1975");s_op("東園段","1976");
  } 
  if (admit=="18")
  {
  s_op("漳和段二八張小段","1800");s_op("漳和段山腳小段","1801");s_op("中坑段牛埔小段","1805");s_op("中坑段灰?小段","1806");s_op("四十張段","1807");s_op("外員山段","1808");s_op("員山子段","1809");s_op("永和段水尾小段","1810");s_op("永和段芎蕉腳小段","1811");s_op("南勢角外南勢角小段","1812");s_op("南勢角頂南勢角小段","1813");s_op("南勢角段橫路鹿寮小段","1814");s_op("民享段","1835");s_op("民生段","1836");s_op("新生段","1837");s_op("景福段","1857");s_op("大智段","1858");s_op("秀峰段","1859");s_op("大仁段","1860");s_op("秀山段","1861");s_op("景新段","1862");s_op("景平段","1863");s_op("中安段","1864");s_op("公園段","1865");s_op("保健段","1866");s_op("安平段","1867");s_op("大華段","1868");s_op("捷運段","1869");s_op("新和段","1870");s_op("景華段","1871");s_op("南山段","1872");s_op("大同段","1873");s_op("復興段","1874");s_op("中和段","1875");s_op("連城段","1876");s_op("南工段","1877");s_op("信和段","1878");s_op("仁和段","1879");s_op("民樂段","1880");s_op("健康段","1881");s_op("安邦段","1882");s_op("台貿段","1883");s_op("光復段","1884");s_op("中原段","1885");s_op("板南段","1886");s_op("橋和段","1887");s_op("福祥段","1888");s_op("福美段","1889");s_op("莊敬段","1890");s_op("廟美段","1891");s_op("瓦?段","1892");s_op("錦和段","1893");s_op("圓通段","1894");s_op("烘爐地段","1895");s_op("南勢段","1896");s_op("正南段","1897");s_op("東南段","1898");s_op("興南段","1899");s_op("華新段","2000");s_op("光環段","2001");s_op("新民段","2002");s_op("民富段","2003");s_op("員山段","2004");s_op("民有段","2005");s_op("三民段","2006");s_op("德光段","2007");s_op("莒光段","2008");s_op("自強段","2009");s_op("華福段","2010");s_op("民利段","2011");s_op("國道段","2012");s_op("灰&#30936;段","2013");s_op("盛昌段","2014");s_op("橫路段","2015");s_op("華中段","2016");
  } 
  if (admit=="19")
  {
  s_op("柑林埤段","0136");s_op("清水坑段外冷水坑小段","0137");s_op("埤塘段內柑林埤小段","0148");s_op("廷寮坑段外藤寮坑小段","0152");s_op("瑞興段","0178");s_op("頂新段","0179");s_op("頂福段","0180");s_op("土城段","0181");s_op("大安段","0182");s_op("員仁段","0183");s_op("永和段","0184");s_op("大巒段","0185");s_op("運校段","0186");s_op("永寧段","0187");s_op("員和段","0189");s_op("員福段","0190");s_op("城林段","0191");s_op("沛陂段","0192");s_op("中華段","0193");s_op("學成段","0194");s_op("樂利段","0195");s_op("學林段","0196");s_op("板院段","0197");s_op("安和段","0199");s_op("延和段","0200");s_op("延吉段","0201");s_op("廷寮段","0202");s_op("金城段","0203");s_op("清水段","0204");s_op("冷水段","0205");s_op("青雲段","0206");s_op("永豐段","0207");s_op("尖山段","0208");s_op("石門段","0209");s_op("清化段","0210");s_op("柑林段","0211");s_op("忠義段","0212");s_op("南天母段","0213");s_op("建安段","0214");s_op("祖田段","0215");s_op("福華段","0219");s_op("明德段","0224");
  } 
  if (admit=="21")
  {
  s_op("柑子瀨段柑子瀨小段","1400");s_op("柑子瀨段苧子潭小段","1401");s_op("四腳亭段楓子瀨小段","1406");s_op("四腳亭段粗坑口小段","1407");s_op("金瓜石段","1408");s_op("草山段石梯坑小段","1409");s_op("草山段苦苓嶺小段","1410");s_op("草山段草山小段","1411");s_op("鼻頭段","1412");s_op("南子吝段南子吝小段","1413");s_op("南子吝段哩咾小段","1414");s_op("水南洞段","1415");s_op("九芎橋段","1416");s_op("?子寮段","1417");s_op("深澳段","1418");s_op("三爪子段蛇子形小段","1419");s_op("三爪子段員山子小段","1420");s_op("三爪子段中坑小段","1421");s_op("三爪子段烏塗窟小段","1422");s_op("三爪子段坪林小段","1423");s_op("三爪子段柴寮子小段","1425");s_op("三爪子段魚寮子小段","1426");s_op("三爪子段新路尾小段","1427");s_op("三爪子段三爪子坑小段","1428");s_op("龍潭堵段","1429");s_op("猴硐段","1430");s_op("?魚坑段尪子上天小段","1431");s_op("?魚坑段八分寮小段","1432");s_op("?魚坑段坑子內小段","1433");s_op("?魚坑段大寮小段","1434");s_op("?魚坑段頂坪小段","1435");s_op("?魚坑段滴水子小段","1436");s_op("?魚坑段?魚坑小段","1437");s_op("?魚坑段瑞工小段","1438");s_op("瑞芳段","1568");s_op("明燈段","1569");s_op("逢甲段","1570");s_op("東和段","1571");s_op("爪峰段","1572");s_op("吉慶段","1574");s_op("吉安段","1575");s_op("瑞亭段","1576");s_op("新猴硐段","1592");s_op("深澳新段","1596");
  } 
  if (admit=="22")
  {
  s_op("十分寮段望古坑小段","1439");s_op("十分寮段頂寮子小段","1440");s_op("十分寮段粗坑小段","1441");s_op("十分寮段平溪子小段","1442");s_op("十分寮段幼坑小段","1443");s_op("十分寮段南山坪小段","1444");s_op("十分寮段六分小段","1445");s_op("十分寮段十分寮小段","1446");s_op("十分寮段月桃寮小段","1447");s_op("十分寮段五分寮小段","1448");s_op("十分寮段新寮小段","1449");s_op("十分寮段番子坑小段","1450");s_op("十分寮段石灼坑小段","1451");s_op("十分寮段乾坑小段","1452");s_op("十分寮段石硿子小段","1453");s_op("十分寮段大湖小段","1454");s_op("石底段白石腳小段","1455");s_op("石底段薯榔寮小段","1456");s_op("石底段番子坑小段","1457");s_op("石底段竿蓁林小段","1458");s_op("石底段火燒寮小段","1459");s_op("石底段冬瓜寮坑小段","1460");s_op("石底段柴橋坑小段","1461");s_op("石底段平溪子小段","1462");s_op("石底段竿蓁坑小段","1463");s_op("石底段菁桐坑小段","1464");s_op("石底段石?尖小段","1465");s_op("石底段嶺腳寮小段","1466");s_op("石底段石底小段","1467");s_op("石底段東勢格小段","1468");s_op("東平段","1577");s_op("十分段","1585");s_op("南山一段","1586");s_op("南山二段","1587");s_op("平溪段","1588");s_op("石底一段","1589");s_op("菁桐段","1590");s_op("白石段","1591");
  } 
  if (admit=="23")
  {
  s_op("平林段麻竹坑小段","1469");s_op("平林段大瀨小段","1470");s_op("平林段新寮子小段","1471");s_op("平林段內平林小段","1472");s_op("平林段後番子坑小段","1473");s_op("平林段外平林小段","1474");s_op("平林段竹寮坑小段","1475");s_op("平林段下崁小段","1476");s_op("平林段埔尾小段","1477");s_op("平林段艋舺崙小段","1478");s_op("武丹坑段武丹坑小段","1479");s_op("武丹坑段尪子崙坑小段","1480");s_op("武丹坑段五分小段","1481");s_op("武丹坑段頂坪小段","1482");s_op("武丹坑段下坑小段","1483");s_op("武丹坑段粗坑小段","1484");s_op("料角坑段戇子坑小段","1485");s_op("料角坑段畚箕湖小段","1486");s_op("料角坑段料角坑小段","1487");s_op("料角坑段保成坑小段","1488");s_op("柑腳段柑腳小段","1489");s_op("柑腳段外柑腳小段","1490");s_op("柑腳段盤山坑小段","1491");s_op("柑腳段中坑小段","1492");s_op("柑腳段下坑小段","1493");s_op("柑腳段崩山坑小段","1494");s_op("丁子蘭坑段","1495");s_op("石壁坑段","1496");s_op("燦光寮段","1497");s_op("石?段","1498");s_op("烏山段灣潭小段","1499");s_op("烏山段三分二小段","1500");s_op("烏山段烏山小段","1501");s_op("烏山段大湖尾小段","1502");s_op("魚行段頂坑小段","1503");s_op("魚行段礁溪子小段","1504");s_op("魚行段魚杭子小段","1505");s_op("魚行段乾溪子小段","1506");s_op("魚行段登子蘭坑口小段","1507");s_op("魚行段坑子內小段","1508");s_op("魚行段乾溪子口小段","1509");s_op("魚行段粗坑子小段","1510");s_op("魚行段八股小段","1511");s_op("魚行段新店小段","1512");s_op("魚行段頂坪小段","1513");s_op("魚行段公館小段","1514");s_op("魚行段內厝小段","1515");s_op("雙溪段雙溪小段","1516");s_op("雙溪段九分坑小段","1517");s_op("雙溪段苕谷坑小段","1518");s_op("雙溪段過港小段","1519");s_op("大平段大平小段","1520");s_op("大平段竹子山小段","1521");s_op("大平段破子寮小段","1522");s_op("大平段竿蓁坑小段","1523");s_op("大平段後寮子小段","1524");s_op("溪尾寮段溪尾寮小段","1525");s_op("溪尾寮段藤寮坑小段","1526");s_op("三叉港段三叉港小段","1527");s_op("三叉港段土地公嶺小段","1528");s_op("三叉坑段三叉坑小段","1529");s_op("三叉坑段四分子小段","1530");s_op("三叉坑段大埤小段","1531");s_op("南勢坑段","1573");s_op("雙柑段","1578");s_op("虎豹潭段","1579");s_op("坪溪段","1580");s_op("新基段","1593");s_op("雙平段","1594");s_op("泰和段","1595");
  } 
  if (admit=="24")
  {
  s_op("貢寮段內寮小段","1532");s_op("貢寮段貢寮小段","1533");s_op("丹裡段內寮小段","1534");s_op("丹裡段文秀坑小段","1535");s_op("丹裡段尖山腳小段","1536");s_op("丹裡段鹽寮小段","1537");s_op("田寮洋段虎子山小段","1538");s_op("田寮洋段新社田寮小段","1539");s_op("田寮洋段中心崙小段","1540");s_op("田寮洋段龜媽坑小段","1541");s_op("田寮洋段挖子小段","1542");s_op("田寮洋段萊萊小段","1543");s_op("田寮洋段卯澳小段","1544");s_op("田寮洋段荖蘭小段","1545");s_op("田寮洋段入桂小段","1546");s_op("田寮洋段荖寮小段","1547");s_op("田寮洋段??小段","1548");s_op("社里段舊社小段","1549");s_op("社里段水返港小段","1550");s_op("長潭段","1551");s_op("遠望坑段遠望坑小段","1552");s_op("遠望坑段草嶺頂小段","1553");s_op("撈洞段撈洞小段","1554");s_op("撈洞段蚊子坑小段","1555");s_op("撈洞段南勢坑小段","1556");s_op("撈洞段北勢坑小段","1557");s_op("澳底段火炎山小段","1559");s_op("大石壁坑段","1561");s_op("枋腳段","1562");s_op("雞母嶺段巫里岸小段","1563");s_op("雞母嶺段雞母嶺小段","1564");s_op("雞母嶺段土地公嶺小段","1565");s_op("下雙溪段下雙溪小段","1566");s_op("下雙溪段坑子內小段","1567");s_op("真美段","1581");s_op("新港段","1582");s_op("仁里段","1583");s_op("仁和段","1584");
  } 
  if (admit=="25")
  {
  s_op("頂中股段硫磺子坪小段","0900");s_op("頂中股段三重橋小段","0901");s_op("頂中股段林口小段","0902");s_op("頂中股段茅埔頭小段","0903");s_op("頂中股段大孔尾小段","0904");s_op("下中股段田心子小段","0905");s_op("下中股段龜子山小段","0907");s_op("下中股段南勢湖小段","0909");s_op("下中股段坑子內小段","0910");s_op("下中股段南勢小段","0912");s_op("下中股段月眉小段","0915");s_op("下中股段?子坪小段","0916");s_op("頂角段頂六股小段","0917");s_op("頂角段三界壇小段","0918");s_op("頂角段葵扇湖小段","0919");s_op("頂角段磺溪頭小段","0920");s_op("頂角段曲尺坑子小段","0921");s_op("頂角段馬鞍格小段","0922");s_op("頂角段竹子山腳小段","0923");s_op("頂角段下六股小段","0924");s_op("頂角段六股林口小段","0925");s_op("頂角段倒照湖小段","0926");s_op("頂角段半嶺子小段","0927");s_op("頂角段潭子內小段","0928");s_op("頂角段牛埔子小段","0929");s_op("中角段尖山子小段","0930");s_op("中角段西勢小段","0931");s_op("中角段跳石小段","0932");s_op("中角段大水堀小段","0933");s_op("中角段西勢湖小段","0934");s_op("中角段濆水小段","0935");s_op("中角段清水小段","0936");s_op("中角段萬里阿突小段","0937");s_op("頂角段頂角小段","1019");s_op("中興段","1024");s_op("文化段","1025");s_op("溫泉段","1026");s_op("金美段","1027");s_op("五福段","1028");s_op("永興段","1048");s_op("萬西段","1049");s_op("聖德段","1050");s_op("金山一段","1059");s_op("金山二段","1060");s_op("金山三段","1061");
  } 
  if (admit=="26")
  {
  s_op("頂萬里加投段大坪崙子小段","0938");s_op("頂萬里加投段土地公坑小段","0939");s_op("頂萬里加投段苦苓坪小段","0940");s_op("頂萬里加投段大尖山小段","0941");s_op("頂萬里加投段鹿堀坪小段","0942");s_op("頂萬里加投段烏塗炭小段","0943");s_op("頂萬里加投段冷水堀小段","0944");s_op("頂萬里加投段崁腳小段","0945");s_op("頂萬里加投段溪底小段","0946");s_op("中萬里加投段瑪鍊港內小段","0947");s_op("中萬里加投段瑪鍊港口小段","0948");s_op("中萬里加投段麻斯廩小段","0949");s_op("中萬里加投段中幅子小段","0950");s_op("中萬里加投段荖寮湖小段","0951");s_op("中萬里加投段粗坑子小段","0952");s_op("中萬里加投段湳子小段","0953");s_op("中萬里加投段龜吼小段","0954");s_op("中萬里加投段二坪小段","0955");s_op("中萬里加投段大坪小段","0956");s_op("中萬里加投段大湖小段","0957");s_op("下萬里加投段八斗坑內小段","0959");s_op("下萬里加投段尪子上天小段","0960");s_op("下萬里加投段萬里加投小段","0961");s_op("下萬里加投段七甲尾小段","0962");s_op("下萬里加投段芎蕉坪小段","0963");s_op("下萬里加投段公館崙小段","0964");s_op("下萬里加投段磺溪子小段","0965");s_op("下萬里加投段員潭子小段","0966");s_op("下萬里加投段國聖埔小段","0967");s_op("下萬里加投段清水溪小段","0968");s_op("下萬里加投段八斗子小段","0969");s_op("下萬里加投段坑頭小段","0970");s_op("下萬里加投段頂寮小段","0971");s_op("下萬里加投段?子坪頂小段","0973");s_op("北基段","1020");s_op("萬里段","1021");s_op("翡翠段","1022");s_op("海洋段","1023");s_op("大鵬段","1029");
  } 
  if (admit=="27")
  {
  s_op("淡水段庄子內小段","1100");s_op("淡水段草厝尾小段","1102");s_op("淡水段暗街子小段","1103");s_op("淡水段後街子小段","1104");s_op("淡水段新厝小段","1105");s_op("淡水段米巿小段","1106");s_op("淡水段東興小段","1107");s_op("淡水段公館口小段","1108");s_op("淡水段新店小段","1109");s_op("淡水段福興小段","1110");s_op("淡水段三層厝小段","1111");s_op("淡水段永吉小段","1112");s_op("淡水段九崁小段","1113");s_op("淡水段協興小段","1114");s_op("淡水段元吉小段","1115");s_op("淡水段烽火小段 ","1116");s_op("淡水段龍目井小段","1117");s_op("淡水段砲台埔小段","1118");s_op("小八里坌子段竹圍子小段","1119");s_op("小八里坌子段外北勢小段","1120");s_op("小八里坌子段高厝坑小段","1121");s_op("小八里坌子段樹梅坑小段","1122");s_op("小八里坌子段內小八里坌子小段","1123");s_op("庄子內段","1126");s_op("竿蓁林段外竿蓁林小段","1127");s_op("竿蓁林段內竿蓁林小段","1128");s_op("沙崙子段","1130");s_op("油車口段油車口小段","1131");s_op("油車口段中崙子小段","1132");s_op("大庄埔段","1133");s_op("水碓子段","1134");s_op("北投子段","1135");s_op("三空泉段","1136");s_op("樹林口段樹林口小段","1137");s_op("樹林口段樟栳寮坪小段","1138");s_op("樹林口段糞箕湖小段","1139");s_op("小坪頂段","1140");s_op("興福寮段","1141");s_op("水?頭段百六戛小段","1142");s_op("水?頭段社厝坑小段","1143");s_op("水?頭段瓦?坑小段","1144");s_op("水?頭段鄒厝崙小段","1145");s_op("水?頭段山子頂小段","1146");s_op("水?頭段山子邊小段","1147");s_op("水?頭段破布子腳小段","1148");s_op("水?頭段大溪小段","1149");s_op("水?頭段楓樹湖小段","1150");s_op("水?頭段南勢埔小段","1151");s_op("水?頭段白石腳小段","1152");s_op("水?頭段埔子頂小段","1153");s_op("中田寮段後寮小段","1154");s_op("中田寮段破瓦厝子小段","1155");s_op("中田寮段大竹圍小段","1156");s_op("中田寮段桂花樹小段","1157");s_op("中田寮段演戲埔腳小段","1158");s_op("中田寮段口湖子小段","1159");s_op("中田寮段大埤頭小段","1160");s_op("中田寮段竹圍子小段 ","1161");s_op("中田寮段泉州厝小段","1162");s_op("中田寮段水尾子小段","1163");s_op("頂圭柔山段三塊厝小段","1164");s_op("頂圭柔山段番子厝小段","1165");s_op("頂圭柔山段後坑子小段","1166");s_op("頂圭柔山段相公山小段","1167");s_op("頂圭柔山段樁子林小段","1168");s_op("頂圭柔山段中洲子小段","1169");s_op("頂圭柔山段水汴頭小段","1170");s_op("蕃薯寮段安子內小段","1171");s_op("蕃薯寮段雲廣坑頭小段","1172");s_op("蕃薯寮段小坑子頭小段","1173");s_op("蕃薯寮段水碓小段","1174");s_op("草埔尾段小中寮小段","1175");s_op("草埔尾段三角埔子小段","1176");s_op("草埔尾段崙頂小段","1177");s_op("草埔尾段北勢子小段","1178");s_op("草埔尾段南平小段","1179");s_op("林子段","1180");s_op("下圭柔山段","1181");s_op("興化店段前洲子小段","1182");s_op("興化店段牛埔子小段","1183");s_op("興化店段車路腳小段","1184");s_op("興化店段店子後小段","1185");s_op("興化店段下田寮小段","1186");s_op("興化店段頂田寮小段","1187");s_op("興化店段大牛稠小段","1188");s_op("灰?子段番子田小段","1189");s_op("灰?子段石頭埔小段","1190");s_op("灰?子段公埔子小段","1191");s_op("灰?子段田心子小段","1192");s_op("灰?子段八里堆小段","1193");s_op("灰?子段後洲子小段","1194");s_op("灰?子段新埔子小段","1195");s_op("大屯段番社前小段","1196");s_op("大屯段石頭厝小段","1197");s_op("大屯段六塊厝小段","1198");s_op("大屯段樹鼻子小段","1199");s_op("大屯段桂竹圍小段","1200");s_op("大屯段溪口小段","1201");s_op("仁愛段","1286");s_op("草麓段","1287");s_op("學府段","1289");s_op("米蘭段","1290");s_op("海鷗段","1291");s_op("海天段","1292");s_op("水仙段","1293");s_op("馬偕段","1294");s_op("竹圍段","1295");s_op("飛歌段","1296");s_op("關渡段","1297");s_op("大竿段","1298");s_op("淡海段","1304");s_op("新巿段","1305");s_op("望高樓段","1307");s_op("沙崙段","1308");s_op("公司田段","1309");s_op("正德段","1310");s_op("中興段","1311");s_op("鄧公段","1312");s_op("長興段","1313");s_op("滬尾段","1314");s_op("中正段","1315");s_op("紅毛城段","1316");s_op("大義段","1317");s_op("新興段","1318");s_op("天生段","1319");s_op("樹梅段","1334");s_op("坪頂段","1335");s_op("樹興段","1336");s_op("水源段","1337");s_op("忠山段","1338");s_op("蕃薯段","1339");s_op("興仁段","1340");s_op("賢孝段","1341");
  } 
  if (admit=="28")
  {
  s_op("汐止段汐止小段","0974");s_op("汐止段街后小段","0975");s_op("汐止段下寮小段","0976");s_op("茄苳腳段","0977");s_op("保長坑段保長坑小段","0978");s_op("保長坑段溪洲寮小段 ","0979");s_op("保長坑段石門小段","0980");s_op("鄉長厝段鄉長厝小段","0981");s_op("鄉長厝段過港小段","0982");s_op("樟樹灣段樟樹灣小段","0983");s_op("樟樹灣段蕃子寮小段","0984");s_op("社后段社后頂小段","0985");s_op("社后段社后下小段","0986");s_op("橫科段橫科小段","0987");s_op("橫科段南港子小段","0988");s_op("橫科段東勢坑小段","0989");s_op("北港段北港口小段","0990");s_op("北港段烘內小段","0991");s_op("北港段新山小段","0992");s_op("北港段五指山小段","0993");s_op("北港段柯子林小段","0994");s_op("叭嗹港段叭嗹港口小段","0995");s_op("叭嗹港段車坪寮小段","0996");s_op("叭嗹港段烘內小段","0997");s_op("叭嗹港段小溪小段","0998");s_op("叭嗹港段雙溪小段","0999");s_op("康誥坑段","1000");s_op("白匏湖段","1001");s_op("十三分段","1002");s_op("姜子寮段姜子寮小段","1003");s_op("姜子寮段石壁子小段","1004");s_op("石硿子段石硿子小段","1005");s_op("石硿子段作坡內小段","1006");s_op("鵠鵠崙段鵠鵠崙小段","1007");s_op("鵠鵠崙段小坑小段","1008");s_op("中正段","1009");s_op("智興段","1010");s_op("新峰段","1011");s_op("中南段一小段","1012");s_op("中南段二小段","1013");s_op("中南段四小段","1014");s_op("南港段二小段","1015");s_op("東湖段七小段","1018");s_op("同新段","1030");s_op("工建段","1031");s_op("大同段","1032");s_op("厚德段","1033");s_op("昊天段","1034");s_op("建成段","1035");s_op("長安段","1036");s_op("保長段","1037");s_op("保安段","1038");s_op("崇德段","1039");s_op("水源段","1040");s_op("金龍段","1041");s_op("福德段","1042");s_op("環河段","1043");s_op("北山段","1044");s_op("江北段","1045");s_op("福興段","1046");s_op("東勢段","1047");s_op("長青段","1051");s_op("北峰段","1052");s_op("八連段","1053");s_op("拱北段","1054");s_op("秀山段","1055");s_op("白雲段","1056");s_op("白匏段","1057");s_op("汐碇段","1058");
  } 
  if (admit=="30")
  {
  s_op("新小基隆段橫山小段","1202");s_op("新小基隆段二坪頂小段","1203");s_op("新小基隆段大坑小段","1204");s_op("新小基隆段新庄子小段","1205");s_op("新小基隆段陳厝坑小段","1206");s_op("新小基隆段埔頭坑小段","1207");s_op("新小基隆段蕃社後小段","1208");s_op("後厝段大片頭小段","1209");s_op("後厝段北勢子小段","1210");s_op("後厝段陽住坑小段","1211");s_op("後厝段番子崙小段","1212");s_op("後厝段土地公坑小段","1213");s_op("後厝段番社後小段","1214");s_op("土地公埔段三板橋小段","1215");s_op("土地公埔段大水堀小段","1216");s_op("土地公埔段木屐寮小段","1217");s_op("土地公埔段五腳松小段","1218");s_op("土地公埔段員山子頂小段","1219");s_op("土地公埔段芋尾崙小段","1220");s_op("土地公埔段內柑宅小段","1221");s_op("土地公埔段石曹子坑小段","1222");s_op("土地公埔段八連溪頭小段","1223");s_op("土地公埔段大湖小段","1224");s_op("土地公埔段土地公埔小段","1225");s_op("土地公埔段埔尾小段","1226");s_op("舊小基隆段舊庄小段","1227");s_op("舊小基隆段四棧橋小段","1228");s_op("舊小基隆段茂興店小段","1229");s_op("舊小基隆段埔頭小段","1230");s_op("舊小基隆段八連溪小段","1231");s_op("錫板段南勢岡小段","1232");s_op("錫板段梀板頭小段","1233");s_op("錫板段山豬堀小段","1234");s_op("錫板段番婆林小段","1235");s_op("錫板段海尾小段","1236");s_op("錫板段小坑子小段","1237");s_op("北新庄子段龜子山小段","1238");s_op("北新庄子段楓子林小段","1239");s_op("北新庄子段店子小段","1240");s_op("北新庄子段田心子小段","1241");s_op("北新庄子段菜公坑小段","1242");s_op("北新庄子段車埕小段","1243");s_op("舊小基隆段山豬堀小段","1285");s_op("烘爐段","1288");s_op("箭竹段","1299");s_op("埔頭段","1330");s_op("埔坪段","1331");s_op("芝柏段","1332");s_op("茂長段","1333");
  } 
  if (admit=="31")
  {
  s_op("石門段石門小段","1244");s_op("石門段石崩山小段","1245");s_op("下角段竹子湖小段","1246");s_op("下角段五爪崙小段","1247");s_op("下角段石門小段","1248");s_op("下角段草埔尾小段","1249");s_op("下角段坪林小段","1250");s_op("下角段小坑小段","1251");s_op("下角段尖子鹿小段","1252");s_op("下角段阿里荖小段","1253");s_op("下角段阿里磅小段","1254");s_op("頭圍段下員坑小段","1255");s_op("頭圍段崁子腳小段","1256");s_op("頭圍段八甲小段","1257");s_op("頭圍段楓林小段","1258");s_op("老梅段老崩山小段","1259");s_op("老梅段大溪墘小段","1260");s_op("老梅段豬槽潭小段","1261");s_op("老梅段九芎林小段","1262");s_op("老梅段尖山湖小段","1263");s_op("老梅段七股小段","1264");s_op("老梅段大丘田小段","1265");s_op("老梅段公地小段","1266");
  } 
  if (admit=="32")
  {
  s_op("大八里坌段大崁腳小段","1267");s_op("大八里坌段大堀湖小段","1268");s_op("大八里坌段?瑪蘭坑小段","1269");s_op("大八里坌段渡船頭小段","1270");s_op("大八里坌段蛇子形小段","1271");s_op("小八里坌段楓櫃斗湖小段","1272");s_op("小八里坌段荖阡坑小段","1273");s_op("小八里坌段舊城小段","1274");s_op("小八里坌段廈竹圍子小段","1275");s_op("小八里坌段中小段","1276");s_op("小八里坌段挖子尾小段","1277");s_op("小八里坌段埤子頭小段","1278");s_op("小八里坌段松子腳小段","1279");s_op("小八里坌段十三行小段","1280");s_op("小八里坌段訊塘埔小段","1281");s_op("下罟子段下罟子小段","1282");s_op("下罟子段長道坑口小段","1283");s_op("長道坑段","1284");s_op("大崁段","1300");s_op("大堀段","1301");s_op("埤頭段","1302");s_op("頂罟段","1303");s_op("商港段","1306");s_op("中庄段","1320");s_op("臺北港段","1321");s_op("訊塘段","1322");s_op("龍米段","1323");s_op("米倉段","1324");s_op("中山段","1325");s_op("長坑段","1326");s_op("下罟段","1327");s_op("楓林段","1328");s_op("荖阡段","1329");
  } 
  if (admit=="33")
  {
  s_op("龜崙蘭溪洲段頂溪洲小段","1816");s_op("福和段","1822");s_op("永利段","1823");s_op("得和段","1824");s_op("中正段","1825");s_op("竹林段","1826");s_op("永福段","1827");s_op("文化段","1828");s_op("及人段","1829");s_op("頂溪段","1830");s_op("信義段","1831");s_op("仁愛段","1832");s_op("中信段","1833");s_op("民權段","1839");s_op("民治段","1840");s_op("安樂段","1841");s_op("永安段","1842");s_op("大新段","1843");s_op("國光段","1844");s_op("中興段","1845");s_op("保福段","1846");s_op("保生段","1847");s_op("永平段","1848");s_op("保平段","1849");s_op("樂華段","1850");s_op("水源段","1851");s_op("雙和段","1852");s_op("長堤段","1853");s_op("林森段","1854");s_op("得林段","1855");s_op("四維段","1856");
  }

  return targetTown
}

const fillZero = (i) => i<10? `0${i}` : `${i}`

const townList = [
  {name: "新莊區", id:"01"},
  {name: "林口區", id:"02"},
  {name: "五股區", id:"03"},
  {name: "蘆洲區", id:"04"},
  {name: "三重區", id:"05"},
  {name: "泰山區", id:"06"},
  {name: "新店區", id:"07"},
  {name: "石碇區", id:"08"},
  {name: "深坑區", id:"09"},
  {name: "坪林區", id:"10"},
  {name: "烏來區", id:"11"},
  {name: "板橋區", id:"14"},
  {name: "三峽區", id:"15"},
  {name: "鶯歌區", id:"16"},
  {name: "樹林區", id:"17"},
  {name: "中和區", id:"18"},
  {name: "土城區", id:"19"},
  {name: "瑞芳區", id:"21"},
  {name: "平溪區", id:"22"},
  {name: "雙溪區", id:"23"},
  {name: "貢寮區", id:"24"},
  {name: "金山區", id:"25"},
  {name: "萬里區", id:"26"},
  {name: "淡水區", id:"27"},
  {name: "汐止區", id:"28"},
  {name: "三芝區", id:"30"},
  {name: "石門區", id:"31"},
  {name: "八里區", id:"32"},
  {name: "永和區", id:"33"}
]

for(const townObj of townList){
  const targetTown = getTownSectionObject(townObj)
  cityF.town.push(targetTown)
}

module.exports = cityF
// require('fs').writeFileSync('./cityF.json', JSON.stringify(cityF))

