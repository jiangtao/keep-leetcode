/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, cache = {}) {
  if (N === 0) return 0
  if (N === 1) return 1
  return cache[N] || (cache[N] = fib(N-1, cache) + fib(N-2, cache))
};
