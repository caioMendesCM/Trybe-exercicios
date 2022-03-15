function sum(...values) {
  if(values.length === 0){
    return 0;
  }

  return values.reduce((acc, curr) => acc + curr);
}

console.log(sum());