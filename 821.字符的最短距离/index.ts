/**
 * 821.字符最短距离
 * 
 */
function shortestToChar(s: string, c: string): number[] {
  let res: number[] = Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) continue;

    let l: number = i;
    let r: number = i;
    let shortest: number= Infinity;

    while (l >= 0) {
      if (s[l] === c) {
        shortest = Math.min(shortest, i - l);
        break;
      }
      l--;
    }

    while (r<s.length) {
      if (s[r] === c) {
        shortest = Math.min(shortest, r - i);
        break;
      }
      r++;
    }

    res[i] = shortest;
  }

  return res;
};
const s: string = 'loveleetcode';
console.log(shortestToChar(s, 'e'));