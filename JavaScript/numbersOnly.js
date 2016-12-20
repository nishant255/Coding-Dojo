function numbersOnly(Array) {
  var newArray = [];
  for(i = 0; i < Array.length; i++) {
    if(typeof Array[i] === "number") {
      newArray.push(Array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}
