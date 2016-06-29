
export function randomId() {
  let length = 16
  let hexDigits = '0123456789abcdef'
  let s = parseInt(String(Math.random())
    .slice(2))
    .toString('16')
    .split('')
    .slice(0, length)

  s[length - 3] = hexDigits.substr((s[length - 3] & 0x3) | 0x8, 1)

  return s.join('')
}
