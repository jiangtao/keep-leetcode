var isPalindrome = function(x) {
  if (x < 0) return false
  var s = String(x)
  var i = 0
  while(i <= s.length - 1 - i) {
    if (s[i] !== s[s.length - 1 - i]) return false
    i++
  }
  return true
};
