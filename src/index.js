
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(typeof matrix === 'undefinied' || !matrix || matrix.length < 1)
    return [];
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 !== 0 && i != matrix.length)
      result += matrix[i].reverse();
    else 
      result += matrix[i];
    if(i !== matrix.length - 1)
      result += ','
  }
  return result.split(',');
}
