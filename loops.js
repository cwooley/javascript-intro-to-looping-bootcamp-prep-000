function forLoop(arr){

  for (var i = 0; i < 25; i++){
    arr.push("I am ${i} strange loops.")
  }
  return arr

}

function whileLoop(i){
  while (i > 0) {
    i--;
    console.log(i);
  }
  return 'done'
}

function doWhileLoop(arr){

  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
  console.log('doo-bee-doo-bee-doo')
     } while (maybeTrue());


  do {
    console.log(arr.pop());
  } while(arr.length > 0 && maybeTrue());
  return arr
}
