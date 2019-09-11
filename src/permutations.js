// Heap's algorithm

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function permutations(arr, size = arr.length, cache = []) {
  if (size === 1) {
    cache.push(arr.slice());
    return;
  }

  permutations(arr, size - 1, cache);

  for (let i = 0; i < size - 1; i++) {
    if (i % 2 === 1) {
      swap(arr, 0, size - 1);
    } else {
      swap(arr, i, size - 1);
    }
    permutations(arr, size - 1, cache);
  }

  return cache;
}

module.exports = { permutations };
