function palindromeIndex(s) {
  // create array sArrReverse of s
  const sArrReverse = s.split("").reverse();

  if (s === sArrReverse.join("")) {
    console.log(-1);
    return -1;
  }
  // loop through sArr
  for (let i = 0; i < s.length; i++) {
    ////  remove each i of sArr
    let sClone = s.slice(0, i) + s.slice(i + 1);
    // sArrClone.splice(i, 1);
    // console.log(sArrClone);
    const sArrReverseClone = [...sArrReverse];
    //// create string sNew after removing char
    // const sNew = sArrClone.join("");

    //// find index of the char backward in sArrReverse
    const indexOfCharInsArrReverse = sArrReverseClone.length - 1 - i;
    //// remove  this char out of sArrReverse
    sArrReverseClone.splice(indexOfCharInsArrReverse, 1);

    //// create a string from sArrReverse
    const sReverse = sArrReverseClone.join("");

    // if sArrReverse === sArr => return the char
    if (sClone === sReverse) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

palindromeIndex(
  //   "racecaar"
  //   "bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb"
  //   "racecar"
  "nylsjxeiyadwscfmipfsxjqoovgbalppkdkvcoebojbjlgwvyeowpfneethghaxsfjqhaxlrhobvwarvgjuwqidwfldmnchsnydnyofifhecjyyqivpbfsykgewtgfpvgskfjpnoyuqjtrceorhvmggtnfpvmhssadalsqaultehninecuaoeikrodnbkgunlwyfncabxgklqaqsxsjecwvqalrmuoagmcncepgcvspotihtctxeqvusjofeeinskbwqrfspykfstomvimabiwtrlcyrkmkwpknjpiaoshjovxkhkmkujhnxlopvbdsqngbdqdujmgykflrryfnkodiaryxucqlryowptrbgycrgolxpslahqjhikfdoxrgyifqfxulywfflrfbkteukpevakbqksymeefjcawdxdklwqnjkteujjsjvucipbwvfdfkdfndkyphrfscyayijsthpvrfypcesjoxqfebgvkxbeccebmpviylgqtfgxlbhdayigcqcnoftshatvrsgsemjatsxftgkvhucllebcjwuswpqqkwjolvrfopnivxffthrhoukasftrwkjhkuyvqqefgtoftvmpfgxvciwupqmndxwntxmkqqsakhhgftwmdujfdgcuyokcpksjifvcxockxjqdfnsiicpnirljjvlygekrlgtjvvvthnamdsvowlehgpqpmcoujymwhgjdefalscbywwntkrdsitiwxyrjahhinqnuvpgrrhqoggktxnmihxhiyarahykwratoqbiikbathkphyesieaqeajgjkqjdsdrjgcutdunmhftgjmponisprbcdtngmsaycctvhqltxqphcfwquhlmamqfgenvanucroxbflufcmmerlxmtjavyqbhxodxexcxocbtnxarkmxdbvruitqhlrqliujosloinpednguxvsdwrvrapkjdcaomwadsnrbdhhguobumwyjqwdqoncsrejgckjuabxeihkfxoaknbvexywnoyiiftojgxghygljoxommrxcstgtvdjmetvmnkvwjfeklrwapnpffnhbjquftesbaqpnblkmsqafiwhbkwgskntwgqebwyewptmrhagdqgicdpdqpjjcyfygvejufprvjepsgxvxfgakydboomqnrstpyfkeuecgltcrsxrxhrkgwmwlynativlhcwoydqgonihgiygptqxqfufhlfbtdmchlshpjpeyanfipnblfbemwjtiqueukiexbnnndumdkuocirnpssdpewavufshnwfrltfqqrwdmlgxfvnxqqqvqsrlaksqjxiutnomhlquywsesiekawiqqaesmwjvwrttfigpvykuvfyrpfepdoivomqdlbblswfbfnqbndxlkyfaflskadiqqyteavpvswyblrebudmhesjjecvhgexygsdiqvglsfogwvhtbwdfrnpxpnfxueybyflpbsdvasfxomtplxwdnocfdhexlfbmkmcnhimidritgclscivpxxvbicbvhejuqnkbvwjyqrsxvgsbpoqnpoqxqttbxdxqrirpgdrwukwtrpujhnwwdpuvjqyhwwaogsgovxntllpfdkokxnhddecovbxubxjhsrxrqlncydjdnxpnnatsevhcyhwchilbbjstxgxwjhcyhsousinygwcigbknkwonijhgrfgdoicvdtsveixnfcvldiyphqdqamystfviobgruyqyhomoqkavvcmdspvufvpybmirnomkqdjxtynmlpkhtwlmpjkufatjmebcvnomsbkoaadnqovknhadsmxymukcylgucvhwwuoyurmnikbwtdcnpdmcxygymnuoleokydlwwamilnffqjsimhnmgtmtjjkwnyhpesmctykfprkidgrqnhfudrqnbbkrbuhhntjjuvokpcvtinmxursxmjnpnbhqvoxjkktiikuyoquwejxbdqcrdriqsrjojhbttwcdjaeyqbxxkvyppdisvslqkwitelqbiueruksmlrkxplnfpxanqneekoxraoskkyffjxtwreukqkpilsveicitthntxgfkhkqqkkpdrmnkyfskaqpjsadohsjibqsiblbnyqqqdgbcovpomhxhhdwrvgawyshchipgbjwgpajevbvkitrrxojvwlvvhdxomounatuptgwrjsctovlolxnkjjjqmhfyxcpxvmqrupleknxyklqxjeitntmacsccwtdtgvndlahvphwcunaftlbhfnkjioogitaqpnvdpfbgmaihqjokwpueehomvfsgyuyqlutbawhowqxncnybfvfjdtyybthapgqbdmcdjmthdtuhjviprpbukatnudomjhnmurreenljijsrfdjatluglrtiuiuhqktndorjcgvmpqfwuqwocuwqmqyjcwquhnimccwgiutalbairywuttninmspjlmryuebwdkiaeimhiubkuxeqlpeyivktievflydojlrpvgwhbbrxyxrlnvkxuwufcqlnpqecevracrjgsbgrcxdpwporpjyrckhrdlthkoioitubveuxcbpysesipscrfjmjxiqiwbwhvuitygtdhjdcqvlgonbuxngvxwgvbffycosdwohexkgqgtaxibuiqbgoammbrsawjuaglhmkrudbpdyaetkwuqmufbywtbvfywlkexwyvbalebnlwxitowqtypsurpbsmmdsnbrlctwiukvrkhlyedufsnbmfeftslnimhtqcqywdxrpfdojglrcauqhyyerkrbybwpdqqdvoumtabghnxlpseytfdnrwqqyoiefchbsenpfrvofvcwqgvkmaxgyrxxgidnkmoerftywrpeprbgaysobsvbktbqeeeptvvnbrmxlccbvfhvgalkujlgfmyjtgbpcwddqrdcvhdrokpwmdhimsqtipeevftxfydvqiympeggrxeecloqhflrvpxtwtucsxbljcxbggixemfiavahclbadytcsoflpiwykwasfktmyyuauwjyklbnmvqgmxtegtdssgnyqhlqiisggcfqphhdfaltxfygbebumoteyhwhrrnavvrmfbrkbdeykfhmkihwyddxmcgetvhqryfwcwjdcqemvlygvigunjtaochkxodspirrhcwjsbwqmxxijgfwrbagdhrexuwngqhnsexnhwftwfegllgdngmqneunbtdhlkvgqvwxuctrjabulhaypmsfspsukvcxiagyxdyshunquqniaokpdduwsnrflvftymuyrvuaqksnbhvbxisblnahdtmossithfsybnbrxuhbcfccowfamijpcwgurqobvkawxeqyyxadefhscmupufhaeowxfoycybbyfsxesbjwgqrkepabukbbyyyepxiobknhdonxpxvvopgufjyctcdsdcyscihesxlxmyvcytxqkgnrrmulpxgubiodqvjltulgwjkxgkoqrfkltfxjeghhovmftwsotgwqqkrwuiponabigytmhbtwwgerdaixghqwrivnrnchqdpweklmnfllnpfrpprywixptufnkjubnlatxlilqtyfkgycvqbtbalwwqkhcgjptlmtxufqphxcnwgkpigtkrqjkesmmcfgorcoohfeqeifbprtaxnmrgvekoswtafkthyjpepikynoofiofxbyeydpnwohwurrcsdtasdkrsbiylwgjagoyjgpiuwiprcumfomxraslbbmnbuybbpdnvsxtrgljigypvlqpnjdrmrhnngrowueupdqhjdtujsmhgfawqdoevvtjeladifyxkpgvuaqhugoblqxduojsmderpeualtyvmhshhlqetghgyiltwuokaseraysnvrmkyfrisjonrvvqgjnegeqgauyavrprlccmjwwdilscjquqakwgppopmnrihhdukhhtggyqrrsekqukdtssjikvxegimldytnsctutooosafpmljgeuqrsqvbyinfjjsdlmahbowvoelcpwkwtdomtmqtveyhptkdgklkciiqouuhtfeoiuddhtyfaanrvavcnhoprxggucnqjtfsolxwhyckbrcwsxbgfsxyqegnivesqmnfxnehojtpbwotwrcfkaedhkqrjvmaicfipkpgtmxwlmtihvpryuvihoaqknqspydilvohinetcxejwuexpcgyqgqcvjwokbyvwpdhdkbiifrhaxfralrrukvstshhviduyjeetfmenhopftkgicadovxkqirpqvmphrudyjjoqxhyurhdvhikfguxqnpildaswwxvhhlaisydmgiipsswbpvsdnbqqblpyjmitaicuihhqprhkmglceeishylllcmwquqsfunncwhtqqedwqfcwnufnisbkfxbcrvhmjxpifjyvocshkuexrlnbeonjppnhnvtatliyxkwmopvynaahonisfwfwosgcqcckonlmaibobwqoysvnihhngomuhsyyvelmrayticilybaxtyodivsokiltbkuyojlijmcronenqgonhdqpblgntrjxdfwtojfxxjrnyxdqfreowwfailnfgxdjfaftlktkulatmdmrxqiuppvyclekjhtqjbkxmgijuifhnsblljjcahdesjofskvcljaapkjkurtjmuwafgcfphljsaqlkoqxasysekfbcamqukrasvhjeuuwunlhccgdwfxdrdfudrlyedbxcljggeferqlvutbsyyxrddogxchcijckwlsdpxhjrvgopjjrjilmnauledqmosylhroysyjkurbkblcmvnbjpwvucojqjjcqdsqvrciovkcyxemtunfmmbjortfcfjsiflfwnpolaqlawavtnchdfqrxmaarlsbqhiqwxfjbxwduwapmewpjpkjdkjuxfxpmigjjnuklrpgopxcvutgnepqqcnphofvwnhgbdsmujumbtqxqkgepxwgclvjadhyqpgtubgrmeeoxuooiwvxwsgaeflgitgcloxgrhxflfvjcmakjvkiprivwufhqnlcekkvrkbdpwoulofulqedkoyjleqctfgxrqujexotxdqjtwhhpnkccmlosesnjalbsimwhbtfgkobjvkylvboiofbtxodadftlrqsvkxevphhnshaokqyavctvrywwgqibhewuebstjakehkuudtwyvsuprrmyixascwngagdlgnpqakndgkedfyuwtivegxwkwmqxuvlcjeulqkoxwsdcuxyoixsqvsbtfutbqffbjcmbmebjyentcmklmgcjygfgbyjrgousskvfowqndekftwsidxreeylfxwwhmuaffxntugjxnvfhtypwwkedjrikohtdctjjrydofposltchuuhthlwsdhdrrwvvshgmildnbtjponwlkeirrhlupqpjqnflwlyfxeubygqpuqdfwlaptlkjccssrafomgvmmtplajdwahfysfomscxuesqytxnigmwsgofgxigaplajsoxlqwixrbwnymvfbuyhkgoiowlhilsdcsqvryvkbuxcjwilrjscpjnggypqkitockktmggnbfrlcawvlrybcmkilacxjvmnjxjvgqlkxdxagwvrowvqjgcwggupeifniplogybedyglveflcbenhilooigtsmjbevskwtqctynrftfjumxfultmvcipqrquplfngxpcwgtfaaowmmcjaxvwdemtyfporweavucubvadxrcmefwhfugicufbaurtrytptvnwupcuheiolfxrceceyhhbeavyypquogtlyvgicowovwiybmfcwnebpaaqrtngahryfyijphxofinivuluirvaryqlsgsupmuunfhgmhutqkfofqjqkhqeikpdqkyhatenyntnvqkobpfjiqasxswjfmmyaliahongdkwydhpfwuohlqajlwurliqltylcnckqohrrqhypcpwngwasvumkddvackcrmoldydupnwipmhgvhiqdddnjgmlkwnclcpobtlthkeyxlfvsnmytpmfxbqkagmlkfcoyqiibohbapwtfjsybhgylyjlfyasechfurnwgwxgmxcujuvlfdmqcyckacfghmlcgbbmacupaxklugwclmsqlxdncitluhqdktpkvmaxkmkivjkhvgxjgbwklqyixplijdviqxidlsljfyqdhrnpsmchebpeqcpdfnlvltcypniwoaaxtnnobqvhtmnlofqvseufawgrmpoerpclfsaglypfleqcjjxfnukqrsihixlcnnpsgscrrtxfxqhkdhpqdchwuqegqpkeedymvdhpxhuxxekdlcuqeeocwsknlwtravexynpwukvvoiydlvtrbkvaggqrgmjgiphkewjbkfwbqyecubtxlqyryrlfguopnvctuluftuhktnmqoipdyqwyijgqguitskpqwnvqifdevpumxmpadnbnwhfffnaayrsxfrqpwtvujtijgxlknmxmwfsetueumasurjkqdhmobuahsmtjbuvxaocvjjqyjltduetangqqbrbwgughrcistkofviehtxkrfhrunjmrdnqjkwqdbyvwmmdkwhsriflpodkdowwrmnbxmubntylinqtlxofivsxlvlqnknfxdjxpeyfaasjnjfbkvisrbtfahvnrlupoenekomlofwfrcicatwtwsayavosikkyqyecpqnhxmopqwrqsrkqkkrljhgttqskrwmkpcrooggffyxyqjrdvjqfqwykquxirmukpmbgshobioabxrfudvcwvehmyhwsuudmhgsdojewygbyagvdebacfkqerqwmldbsjwxageahkbjkjfqngssnfjrxarmnwojilhltmlewonkxudnexgresmcugqjfhsnuayromvoblbyiepocxjgqxkmeexllqyhsbbipywrkxsuekmijvratcoaimlufmeypfjgeiaqgunmgaupxmrrrhtavhwcubdmimsouuhdqxrwxmmwceqtnlvkstopwtdgixwftfkkfcjdovcscvmqjldcftucpakxaidtppgurpaindcqbqjkcoohkjmalwamhfiyurtmjwuxayqdqcnuscffothaqhobmxahruvbrsbtstwlxmiqonvdhfebmscbseikbgosapoumngkaoerfauoibruwtwrbhfcotxqlolxdtlfkpypruhaxyvuvunwcsysoylaowbtsmyeebvvvdwvfsrbphatcbnsbyupyvjrkkvoluljxkgddagujgolieelgybfxkykwxajsnuqxbwdbdxmmmxwteiagjfeveoueqgwgcqefnjjshvhwugsboshaxnxeftjvaideyjkottkdptcmbuopnvsnmqurmgnpostqfgfbareqmjfngtdwsxmfphwcnmtfiqvpwdqxxwqkgvxpsdmlcbstjrxygseojcegiugguwsbvqsovhcajuvsmutspbkbdqjnostjromnhgeepggydftraolrpxuuqejfyforuefckmiasrcwwvoymcsccnattjytqqlnusshfdjbwlxtkouwtncxbcrvntrekfuhxnogsxhqmhmwvitrvxqxaivnepuqupxsfmyaniqcpeymmugitwivigkoxfgsweoetpehyvlockdohkydjkatskjrrpkqtyunrywqwkfyulpfvpihcicuslmmbxdwyanqamjyxrbudqayijikrkgnxscysgyugolibxkbplwscwtlicxbpgqnaspubopkdeugcfitqfmveijnkhqaojoqcengugqaklgotoikvwidfrqrcjsssjjwpydkfvkrkqieisogpxjwrcptlimgtxejxjtdggxqwguhaloplxneddxonnvhlcqjlmprsnkrvfavtqofqeltjmjyahgljyxwnprgfcabkaaesolkuxeekpfkynxkmviclaiqeiuoluuelhqghxmtprepfectdkvqmgktqfieagjnpcvwaiqqcwihbkdgxyxkhiexnpdpvodlqyktjbmlauudfakdbiqiqwggmlvkcbxvckplneynyvrgvekwmdffanlpcjcekdamnracvbrwwleupqrevyjxmwnqgsxsvxhlshnqkiqjtueknvqjubhkaxdhsbcockcutsnfbeoubthqrycpcmacmflfhovjyxgsqtatbppelyvdxauamwdydogkdctedcxvxaqyrigdhejgeeitcluhdcrignnjpninnypihvnqawwgeiaitvpyajigwxsmlbabcrjlnxcnwcwdkwnesdgumoclowxaxbdcspnjppyorvsctgjompkbgonulnwloankrdthsuwlrrplxycmqmoydetqrqcjtrvnupvqmueemtrmvucojsonwieqcjaxdvlbnjrbgvfspxinumdefrtccysgkvenrsqicijjeqewqomnbpsgjmkmneuxaaotsfcwqniuhptaehoiyjolxaamgumiubcpjhnawxwgnrjsbxbcjrnhtntajjkgknyvwmvvmtdbnmvqmysvqjflycnklyrxoqunfqjtkouabqqppknjvtwuvkghlafasapatatgophsixibkykgsheqtmaiohihkbjebdkrurmgsxjdwtmrdqiyfihtrsdctmiwrvoppcxiahmydyqgryhwjpqdiviekqbcmrtfvrnxbcwebnmuoutakkeuimysfcxutraqmnonqostchrtcltoyajhmkbsoynjspcfdsvvhqqmxigbvcrudedroekefapxrrgvmcruskhquptrrmmuqrnhvandddcuwismmnhfaoxvespxfetxwjfujtyoydkyndlaquhrlfprxhpfljfkslifhjtimghckuedplwbqmurvlykufwqsfxaoridyshlplqiwolqdhkasjmpqjijpglgbwkcrrphggrdwevblgdgspvlyhvonjvqgiuxckiiraooekrrtuxmmwamevdtibnojipotxwnxlefywwstxhhuhvbgyuobkdmtsdnsbdrohyngvidtpmqaitghrukcaavvflogoixyhnhgwkcowvofpuphrcksegqkuhsjqqkafsiedlsbhiiydahvdtqhahrwolhherklkspqejtnrcnwdwuiqlrsukqmxatereqfagxeprujvihbfcjxqcqnohaohwscdjjdqhkiyfsupawweiuwkllyvlnfijhosqrjxcuyjnuyptxtcurnhdofqfkcosqhlitknolyegbtcypfujueojlgqvkfqbpdllpbcbbikccmdttaeoesbpbtolcfotibfacjcfrojvbnpxntmuppmqkbfmjtirwnucywhqnroqheowbetqthjgkqutldoisjmriukvobmvgeuhipaeyjnjbigoouyhgmcojomxqbvyfsiniiuhtitwqanhwnrdctrlkgldhjcnckdnuxupgqmaqdhnqyquukggqtlbdoohbtuwsqmbhbbbejowkirguaomtapyqghsacruugwfhxgojwnuhiddirrfthelnngpqxlngispgbesyunidqllkdsemaranaqgacugmpwsrdlsxbbbtnpesklgkdgygyfgdcnpsklkpwfobgrutjanulvhqcgweoehstxlgjxvidmlmfhiqjvnwtvnwcndstkmnkavtbrfghqsmacfjatgupwttkwngjcvuerqflvospjhplpaojilyffureixnmvirnaycxpwnahglwgcgonhwscqwnrncnxteavgylfolmuajdcruqbrlgijtcyvqwsuxqdycinqvlqhosajlddxjojfqiejfwefpherqskogbvuwxhieminbrvucaeiylposuilptavuystwadbnlrqgnninssogjdyellvhnrfmkymnepbsjtywihmddbjmgksuxocmihbsjpgnijgrgfropgtsidhqpaloqodyxethwdvfoeyumsjcafwkkgbbinpyesaeyvmxykfoofjbavfabekmkopsefriatmbqbaplhgdosepomprqdgcrvuvdpgdluhcwjukqbngtuvkjndaqlekiciltorfmbilkfvbgmhdjfnstsumhaxpcg"
);
// function palindromeIndex(s) {
//     const sArrReverse = s.split("").reverse();
//     // Write your code here
//     if (s === sArrReverse.join("")) {
//       console.log(-1);
//       return -1;
//     }

//     // loop through sArr
//     for (let i = 0; i < s.length; i++) {
//       // put all char of s in array: sArr
//       let sArr = s.split("");
//       // console.log(sArr.join(""));

//       // create array sArrReverse of s
//       const sArrReverseClone = [...sArrReverse];
//       // console.log(sArrReverse);

//       //// create string sNew after removing char
//       let sNew = sArr.join("");
//       console.log(sNew);

//       //// find index of the char backward in sArrReverse
//       const indexOfCharInsArrReverse = sArrReverseClone.length - 1 - i;
//       // console.log(indexOfCharInsArrReverse);
//       // sArrReverse = sArrReverse.replace(sArrReverse[sArrReverse.indexOf(charRemoved)], "");
//       // sArrReverse = sArrReverse.replace(sArrReverse[indexOfCharInsArrReverse], "");
//       //// remove  this char out of sArrReverse
//       sArrReverseClone.splice(indexOfCharInsArrReverse, 1);
//       //// create a string from sArrReverse
//       const sReverse = sArrReverseClone.join("");
//       console.log(sReverse);

//       // if sArrReverse === sArr => return the char
//       if (sNew === sReverse) {
//         console.log(i);
//         return i;
//       }
//       console.log("---------------------------");
//     }
//   }

/// WORKING BUT TIMED OUT

// function palindromeIndex(s) {
//     // put all char of s in array: sArr
//     const sArr = s.split("");
//     // create array sArrReverse of s
//     const sArrReverse = s.split("").reverse();

//     // Write your code here
//     if (s === sArrReverse.join("")) {
//       console.log(-1);
//       return -1;
//     }
//     //   console.log(s);
//     // loop through sArr
//     for (let i = 0; i < s.length; i++) {
//       // clone sArr for loop
//       const sArrClone = [...sArr];
//       ////  remove each i of sArr
//       sArrClone.splice(i, 1);
//       console.log(sArrClone);
//       const sArrReverseClone = [...sArrReverse];
//       //// create string sNew after removing char
//       const sNew = sArrClone.join("");

//       //// find index of the char backward in sArrReverse
//       const indexOfCharInsArrReverse = sArrReverseClone.length - 1 - i;
//       //// remove  this char out of sArrReverse
//       sArrReverseClone.splice(indexOfCharInsArrReverse, 1);

//       //// create a string from sArrReverse
//       const sReverse = sArrReverseClone.join("");

//       // if sArrReverse === sArr => return the char
//       if (sNew === sReverse) {
//         console.log(i);

//         return i;
//       }
//     }
//     console.log(-1);
//     return -1;
//   }
