// p: string
// r: array
// e: x(mn)yz => [ 'xmyz', 'xnyz' ]
//
//                         (qr)ab(stu)c      [qr, ab(stu)c]
// qr                       q/          \r
//                          q             r
// a                      |              |
//                      qa               ra
//                        |               |
//                        qab               rab
// ...
//                    qab(stu)c         rab(stu)c
//                   /  \   \                   / \   \
//            qabsc  qabtc   qabuc        rabsc  rabtc  rabuc
//

const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [""];

  const result = [];
  const [first, second] = getPairs(s);
  const rest = parentheticalPossibilities(second);

  for (let c of first) {
    for (let i of rest) {
      result.push(c + i);
    }
  }

  return result;
};

const getPairs = (s) => {
  if (s[0] !== "(") return [s[0], s.slice(1)];
  const endOfFirst = s.indexOf(")");
  return [s.slice(1, endOfFirst), s.slice(endOfFirst + 1)];
};
