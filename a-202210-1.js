// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'getItems' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts 2D_STRING_ARRAY entries as parameter.
 */

// p: arr
// r: arr

function getItems(entries) {
  let result = [];
  let map = {};
  let all = [];

  //  arr  0       1       2
  // ["INSERT", "fries", "4"],

  //   {
  //     '1': [ 'cookie' ],
  //     '2': [ 'soda' ],
  //     '4': [ 'fries', 'nuggets' ],
  //     '5': [ 'hamburger' ]
  //   }

  //   [
  //     [ 'fries', '4' ],
  //     [ 'soda', '2' ],
  //     [ 'hamburger', '5' ],
  //     [ 'nuggets', '4' ],
  //     [ 'cookie', '1' ]
  //   ]

  for (let arr of entries) {
    if (arr[0] === "INSERT") {
    } else {
    }
  }

  return result;
}

// time limit
// function getItems(entries) {
//   console.log(entries);
//   let result = [];
//   let all = [];
//   let viewCount = 0;

//   for (let arr of entries) {
//     if (arr[0] === "INSERT") {
//       all.push([arr[1], arr[2]]);
//     } else {
//       all.sort((a, b) => +a[1] - +b[1] || a[0].localeCompare(b[0]));

//       result.push(all[viewCount][0]);
//       viewCount++;
//     }
//   }

//   return result;
// }
//  4 6 8  2 5   1 5 2 1 5 5 5 6 5 9  2 0
const entries = [
  ["INSERT", "fries", "4"], /////// => [fries]
  ["INSERT", "soda", "2"], //////// => [fries, soda]
  ["VIEW", "-", "-"], ///////////// => v1 => soda
  ["VIEW", "-", "-"], ///////////// => v2 => fries
  ["INSERT", "hamburger", "5"], /// => [fries, soda, hamburger]
  ["VIEW", "-", "-"], ///////////// => v3 => fries
  ["INSERT", "nuggets", "4"], ///// => [fries, soda, hamburger, nuggets]
  ["INSERT", "cookie", "1"], ////// => [fries, soda, hamburger, nuggets, cookie]
  ["VIEW", "-", "-"], ///////////// => v4 => fries
  ["VIEW", "-", "-"], ///////////// => v5 => fries
]; // [soda, fries, hamburger, nuggets, hamburger]
console.log(getItems(entries));

// #include<bits/stdc++.h>
// using namespace std;

// #define int long long
// #define fast_io ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0)

// vector<string> solve(vector<vector<string>> &entries, int n) {
//     priority_queue<pair<int, string>> maxHeap; // max-heap
//     priority_queue<pair<int, string>, vector<pair<int, string>>, greater<pair<int, string>>> minHeap;   // min-heap
//     vector<string> ans; // to store result
//     int k = 1;  // query count

//     for (vector<string> entry : entries) {
//         string a = entry[0], b = entry[1], c = entry[2];
//         if (a == "VIEW") {
//             // return the top of max heap
//             ans.push_back(maxHeap.top().second);
//             k++; // increment query count
//             if (!minHeap.empty()) { // add one element from min-heap
//                 pair<int, string> t = minHeap.top();
//                 minHeap.pop();
//                 maxHeap.push(t);
//             }
//         }
//         else {
//             // if size is equal to kth query insert the value in min-heap
//             if (maxHeap.size() == k) {
//                 minHeap.push({stoi(c), b});
//             }
//             else {
//                 // else insert the value in max-heap
//                 maxHeap.push({stoi(c), b});
//             }
//         }

//         // if value at top of min-heap is less the value at top of max-heap then swap the values
//         if (!minHeap.empty() && ((minHeap.top().first == maxHeap.top().first && minHeap.top().second < maxHeap.top().second) || minHeap.top().first < maxHeap.top().first)) {
//             pair<int, string> minTop = minHeap.top();
//             pair<int, string> maxTop = maxHeap.top();
//             minHeap.pop();
//             maxHeap.pop();
//             minHeap.push(maxTop);
//             maxHeap.push(minTop);
//         }
//     }
//     return ans;
// }

// int32_t main() {
//     fast_io;
//     int t; // number of test cases
//     cin >> t;
//     while (t--) {
//         int n; //  number of entries
//         cin >> n;
//         vector<vector<string>> entries(n);
//         for (int i = 0; i < n; i++) {   // input
//             string a, b, c;
//             cin >> a >> b >> c;
//             entries[i].push_back(a);
//             entries[i].push_back(b);
//             entries[i].push_back(c);
//         }
//         vector<string> result = solve(entries, n);
//         for (string s : result)
//             cout << s << endl;
//         cout << endl;
//     }
//     return 0;
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const entriesRows = parseInt(readLine().trim(), 10);

//   const entriesColumns = parseInt(readLine().trim(), 10);

//   let entries = Array(entriesRows);

//   for (let i = 0; i < entriesRows; i++) {
//     entries[i] = readLine().replace(/\s+$/g, "").split(" ");
//   }

//   const result = getItems(entries);

//   ws.write(result.join("\n") + "\n");

//   ws.end();
// }

// ws.write(result.join('\n') + '\n');
// s

// [
//     [ 'INSERT', 'fries', '4' ],
//     [ 'INSERT', 'soda', '2' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'hamburger', '5' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'nuggets', '4' ],
//     [ 'INSERT', 'cookie', '1' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ]
//   ]

//   [
//     [ 'INSERT', 'ruler', '4' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'notecards', '2' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'notebook', '9' ],
//     [ 'INSERT', 'backpack', '10' ],
//     [ 'INSERT', 'pens', '6' ],
//     [ 'INSERT', 'pencils', '5' ],
//     [ 'VIEW', '-', '-' ]
//   ]

//   [ [ 'INSERT', 'salad', '9' ], [ 'VIEW', '-', '-' ] ]

//   [
//     [ 'INSERT', 'tevqnf', '4' ],
//     [ 'INSERT', 'uywhflblr', '6' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'munenlcqs', '7' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'qfhsbq', '1' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'ytpjmqol', '7' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'itjdg', '4' ],
//     [ 'INSERT', 'exdivsh', '10' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'rrxxjm', '9' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'zxetw', '2' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'lhsmr', '3' ],
//     [ 'INSERT', 'icmqyvro', '10' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'hopauezd', '5' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'qlcupbrw', '8' ]
//   ]

//   [
//     [ 'INSERT', 'eyllddteak', '82' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'xwpwtw', '27' ],
//     [ 'INSERT', 'uiqli', '79' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'hkxjl', '79' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'szppfdzxfr', '72' ],
//     [ 'INSERT', 'zidiacbip', '71' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'esivhpoq', '11' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'qdsuoas', '24' ],
//     [ 'INSERT', 'pvnnkmodu', '42' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'pfwqyllqjc', '51' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'maqkoa', '96' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'firgdz', '29' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'akopqm', '82' ],
//     [ 'INSERT', 'lqjyyfrg', '79' ],
//     [ 'INSERT', 'nqwdxqu', '22' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'tgeamuk', '36' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'gwcgwhjyy', '12' ],
//     [ 'VIEW', '-', '-' ],
//     [ 'INSERT', 'vnmniy', '79' ],
//     [ 'VIEW', '{-truncated-}

//     [
//         [ 'INSERT', 'ilvda', '6919' ],
//         [ 'VIEW', '-', '-' ],
//         [ 'INSERT', 'snahmyfyif', '1351' ],
//         [ 'INSERT', 'kchocfy', '7661' ],
//         [ 'INSERT', 'myamkuhgn', '1938' ],
//         [ 'INSERT', 'klqxchvvjr', '5847' ],
//         [ 'INSERT', 'agjvovnbr', '1903' ],
//         [ 'VIEW', '-', '-' ],
//         [ 'INSERT', 'rpfncsg', '6975' ],
//         [ 'INSERT', 'oodyglyb', '1935' ],
//         [ 'INSERT', 'adjpqolh', '9186' ],
//         [ 'INSERT', 'ehjiy', '9894' ],
//         [ 'INSERT', 'adiusyi', '2935' ],
//         [ 'INSERT', 'blwab', '948' ],
//         [ 'INSERT', 'dgcbvglqq', '2686' ],
//         [ 'INSERT', 'knynm', '9748' ],
//         [ 'INSERT', 'czblg', '6249' ],
//         [ 'INSERT', 'qiwfcbhs', '8663' ],
//         [ 'INSERT', 'kubowxqr', '1903' ],
//         [ 'INSERT', 'hnbcruov', '516' ],
//         [ 'INSERT', 'grysihm', '2972' ],
//         [ 'INSERT', 'tixypexxoq', '5397' ],
//         [ 'INSERT', 'omchrh', '3087' ],
//         [ 'INSERT', 'bmvmygue', '1431' ],
//         [ 'INSERT', 'xmupiaee', '3208' ],
//         [ 'INSERT', 'vfcqkl', '9873' ],
//         [ 'INSERT', 'dztjeri', '8557' ],
//         [ 'INSERT', 'obosfasyv', '3174' ],
//         [ 'INSERT', 'rjhfrlndtg', '3801' ],
//         [ 'INSERT', 'xr{-truncated-}

//         [
//             [ 'INSERT', 'xqrabko', '834' ],
//             [ 'INSERT', 'cthcvc', '1877' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSERT', 'lxoyrsf', '1938' ],
//             [ 'INSERT', 'fznqidirkd', '1334' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSERT', 'kvmgflvk', '4276' ],
//             [ 'INSERT', 'cnfauda', '9574' ],
//             [ 'INSERT', 'mwhmfk', '420' ],
//             [ 'INSERT', 'csdkqb', '9158' ],
//             [ 'INSERT', 'dteqfjjbr', '5846' ],
//             [ 'INSERT', 'lpksccohx', '4850' ],
//             [ 'INSERT', 'ocuujq', '199' ],
//             [ 'INSERT', 'tliapgt', '9828' ],
//             [ 'INSERT', 'iahfgmxab', '2681' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSERT', 'ogbwb', '2149' ],
//             [ 'INSERT', 'lhxazfwue', '2650' ],
//             [ 'INSERT', 'xauavbcn', '3834' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSERT', 'quopzb', '3151' ],
//             [ 'INSERT', 'gcsnwapxe', '8506' ],
//             [ 'INSERT', 'fusvnrj', '7104' ],
//             [ 'INSERT', 'kylwnk', '9980' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSERT', 'vikdfr', '1254' ],
//             [ 'INSERT', 'nxnpj', '7438' ],
//             [ 'INSERT', 'sibicueg', '9727' ],
//             [ 'INSERT', 'mmfdasfwxe', '4942' ],
//             [ 'VIEW', '-', '-' ],
//             [ 'INSER{-truncated-}

//             [
//                 [ 'INSERT', 'mhamfnoyb', '6009' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'buoihy', '2335' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'enbmjfkltw', '9761' ],
//                 [ 'INSERT', 'ygpaits', '2285' ],
//                 [ 'INSERT', 'gocebnyebj', '5746' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'szyhudss', '3275' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'xwnclokej', '8348' ],
//                 [ 'INSERT', 'zipvzz', '2305' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'yoabbezq', '7870' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'dvlha', '8856' ],
//                 [ 'INSERT', 'yiwvgnm', '3532' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'exyulwt', '796' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'glevceln', '8881' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'cyfomk', '8622' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'fajrtd', '3811' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'hptittcrfr', '2366' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT', 'xungdx', '4122' ],
//                 [ 'VIEW', '-', '-' ],
//                 [ 'INSERT'{-truncated-}

//                 [
//                     [ 'INSERT', 'zfxou', '927270' ],
//                     [ 'INSERT', 'jklakhe', '821309' ],
//                     [ 'INSERT', 'mksvloszi', '924530' ],
//                     [ 'VIEW', '-', '-' ],
//                     [ 'INSERT', 'crpgggbzxb', '24567' ],
//                     [ 'INSERT', 'jscesvnal', '186168' ],
//                     [ 'INSERT', 'tlvqkedz', '39606' ],
//                     [ 'INSERT', 'tffum', '632830' ],
//                     [ 'INSERT', 'ooztp', '400282' ],
//                     [ 'INSERT', 'uhazso', '998929' ],
//                     [ 'VIEW', '-', '-' ],
//                     [ 'INSERT', 'grxsuv', '530784' ],
//                     [ 'INSERT', 'uzwvli', '909778' ],
//                     [ 'INSERT', 'uiletfhu', '913252' ],
//                     [ 'INSERT', 'fscdnuqz', '622586' ],
//                     [ 'INSERT', 'hysdtpw', '239603' ],
//                     [ 'INSERT', 'qrxxtmw', '537852' ],
//                     [ 'INSERT', 'iakwsuyyn', '58005' ],
//                     [ 'INSERT', 'lmyigd', '624048' ],
//                     [ 'VIEW', '-', '-' ],
//                     [ 'INSERT', 'cvwdc', '400060' ],
//                     [ 'INSERT', 'amvegf', '543863' ],
//                     [ 'INSERT', 'maupxa', '134354' ],
//                     [ 'INSERT', 'rbbjgat', '173308' ],
//                     [ 'INSERT', 'ouhyo', '918785' ],
//                     [ 'INSERT', 'wzqippu', '821849' ],
//                     [ 'INSERT', 'aduoxzyesx', '402554' ],
//                     [ 'INSERT', 'ergouq', '771890' ],
//                     [ 'INSERT', 'mkott', '5655' ]{-truncated-}

//                     [
//                         [ 'INSERT', 'fepinielqp', '685990' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'INSERT', 'scbpgbpp', '127588' ],
//                         [ 'INSERT', 'kiyqascl', '807545' ],
//                         [ 'INSERT', 'hsqsuw', '327279' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'INSERT', 'cmdkysg', '539106' ],
//                         [ 'INSERT', 'lqyoxf', '496022' ],
//                         [ 'INSERT', 'zkiik', '455432' ],
//                         [ 'INSERT', 'zuyljne', '58975' ],
//                         [ 'INSERT', 'okprtu', '238394' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'INSERT', 'cqfdqhxmt', '714313' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'INSERT', 'peuziqguuf', '628632' ],
//                         [ 'INSERT', 'yrrzst', '826691' ],
//                         [ 'INSERT', 'gfffpu', '967554' ],
//                         [ 'INSERT', 'fzblmaeq', '398813' ],
//                         [ 'INSERT', 'qaqnlumwvz', '597657' ],
//                         [ 'INSERT', 'mhyrqfnkf', '544387' ],
//                         [ 'INSERT', 'zyfpqbk', '658994' ],
//                         [ 'INSERT', 'vopjkvj', '725994' ],
//                         [ 'INSERT', 'okgdfi', '359780' ],
//                         [ 'INSERT', 'xbjczkgso', '701437' ],
//                         [ 'INSERT', 'iblgt', '164777' ],
//                         [ 'INSERT', 'zkxinlk', '126984' ],
//                         [ 'VIEW', '-', '-' ],
//                         [ 'INSERT', 'qjsjfycm', '202072'{-truncated-}

//                         [
//                             [ 'INSERT', 'cmomfr', '6922708' ],
//                             [ 'INSERT', 'idwmsd', '7709931' ],
//                             [ 'INSERT', 'vxmhqlblt', '101685' ],
//                             [ 'INSERT', 'nlaut', '1197937' ],
//                             [ 'INSERT', 'zryszjayv', '1336192' ],
//                             [ 'INSERT', 'gmurmjiyp', '3840065' ],
//                             [ 'INSERT', 'vkvyciphh', '2787019' ],
//                             [ 'INSERT', 'yzpgdgj', '2691074' ],
//                             [ 'INSERT', 'jyxuqtry', '9087491' ],
//                             [ 'INSERT', 'cwqnelcu', '7251769' ],
//                             [ 'INSERT', 'gmnbpvka', '2443075' ],
//                             [ 'INSERT', 'batdpgapd', '8329391' ],
//                             [ 'INSERT', 'qnhxub', '7598287' ],
//                             [ 'INSERT', 'kubepeptp', '4256483' ],
//                             [ 'INSERT', 'mxweboydjs', '899926' ],
//                             [ 'INSERT', 'fhrwwd', '5886591' ],
//                             [ 'INSERT', 'jfcnbbj', '9938274' ],
//                             [ 'INSERT', 'ybpsf', '5775650' ],
//                             [ 'INSERT', 'tizczwvk', '7077318' ],
//                             [ 'INSERT', 'qdzqpgkfy', '5847638' ],
//                             [ 'INSERT', 'pmhxftb', '7310650' ],
//                             [ 'INSERT', 'ktzsnqs', '6493890' ],
//                             [ 'INSERT', 'zwvlhsa', '9452622' ],
//                             [ 'INSERT', 'laayforzn', '9954696' ],
//                             [ 'INSERT', 'mixyec', '9636207' ],
//                             [ 'INSERT', 'tzsojo', '6254809' ],
//                             [ 'INSERT', 'ogzunme',{-truncated-}

//                             [
//                                 [ 'INSERT', 'jphvaxrkj', '88567197' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'vnubrha', '79739342' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'yxolxrw', '85344990' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'lrsjkjkv', '92098242' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'sukwlghu', '43994437' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'pavgpvzyg', '60130024' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'glscwlxitk', '63081674' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'uzwizwb', '66488880' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'epzshefln', '5876096' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'khijfcz', '29889661' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'ikocz', '78462862' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'ffksrqaxhf', '99799424' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'rcbpi', '80473868' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'hdukutw', '18491535' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'iarrywaby', '79296431' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ 'INSERT', 'awvqhr', '43898267' ],
//                                 [ 'VIEW', '-', '-' ],
//                                 [ '{-truncated-}

//                                 [
//                                     [ 'INSERT', 'ubdbs', '15596366' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'fnciilh', '10813571' ],
//                                     [ 'INSERT', 'nqfivc', '68807688' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'qnwtvo', '70697444' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'xgychmsgdu', '72659318' ],
//                                     [ 'INSERT', 'qtqyng', '67028594' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'udyyj', '45724203' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'ahhmpm', '21285122' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'yzscfdzh', '9652090' ],
//                                     [ 'INSERT', 'rjdbj', '46443916' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'yzhch', '62313451' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'tmyrbsubdo', '77384999' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'bjugxmh', '69059010' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'fwqktrnm', '80748068' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'koqajmgorb', '73067325' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'vbwedv', '79197532' ],
//                                     [ 'VIEW', '-', '-' ],
//                                     [ 'INSERT', 'stm{-truncated-}

//                                     [
//                                         [ 'INSERT', 'czzymginal', '324282538' ],
//                                         [ 'INSERT', 'rvkkvz', '935031861' ],
//                                         [ 'INSERT', 'iklbgtu', '436201013' ],
//                                         [ 'INSERT', 'olzsge', '572146542' ],
//                                         [ 'INSERT', 'zmlthwqar', '931931671' ],
//                                         [ 'INSERT', 'fxmznc', '76178344' ],
//                                         [ 'INSERT', 'duiazjtmco', '191561597' ],
//                                         [ 'INSERT', 'rdmlv', '202406036' ],
//                                         [ 'INSERT', 'fdammtlil', '65694091' ],
//                                         [ 'INSERT', 'rdsfcd', '424541858' ],
//                                         [ 'VIEW', '-', '-' ],
//                                         [ 'INSERT', 'tnzua', '177477176' ],
//                                         [ 'INSERT', 'nsheatmtsd', '636136931' ],
//                                         [ 'INSERT', 'ylqkkwdk', '417835797' ],
//                                         [ 'INSERT', 'duarxpyhkj', '35566830' ],
//                                         [ 'INSERT', 'gxqpy', '333393152' ],
//                                         [ 'INSERT', 'uemlrhf', '804386004' ],
//                                         [ 'VIEW', '-', '-' ],
//                                         [ 'INSERT', 'tpbpvdfn', '348987393' ],
//                                         [ 'INSERT', 'pshsgxss', '438550792' ],
//                                         [ 'VIEW', '-', '-' ],
//                                         [ 'INSERT', 'cvfihb', '346085662' ],
//                                         [ 'INSERT', 'nccsyzo', '207582457' ],
//                                         [ 'INSERT', 'vfyvmewp', '68887765' ],
//                                         [ 'INSERT', 'xleatvlsg', '482098872' ],
//                                         [ 'VIEW', '-', '-' ],
//                                         [ 'INSERT', 'cnyhzwc', '2983590' ],
//                                         {-truncated-}

//                                         [
//                                             [ 'INSERT', 'zsgfcfbaaw', '237420645' ],
//                                             [ 'INSERT', 'bptsraykk', '384556270' ],
//                                             [ 'INSERT', 'ffqqaygyn', '817633475' ],
//                                             [ 'INSERT', 'baewwyzqff', '383493672' ],
//                                             [ 'INSERT', 'eriojzdw', '26041213' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'pfybhmgzyn', '241720107' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'idniyge', '930609504' ],
//                                             [ 'INSERT', 'hmqspbeolu', '5844372' ],
//                                             [ 'INSERT', 'flgiabmzz', '839218037' ],
//                                             [ 'INSERT', 'fzyezr', '688319452' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'baareolxqb', '587383366' ],
//                                             [ 'INSERT', 'ygupaiq', '949860634' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'xaxbj', '295009804' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'eikpad', '122521259' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'jwkyqcvmfw', '25972770' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'qgcmt', '844201650' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'VIEW', '-', '-' ],
//                                             [ 'INSERT', 'dqnyzlyd', '97875{-truncated-}
