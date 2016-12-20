var hour = 8;
var minute = 15;
var period = "PM";

if (period === "AM") {
  if (minute > 0 && minute <= 30) {
    console.log("It's just after " + hour + " in the morning.");
    return;
  }
  else if (minute > 30 && minute <= 60) {
    console.log("It's almost " + hour + " in the morning.");
    return;
  }
  else {
    console.log("Invalid Time");
    return;
  }
}
else if (period === "PM") {
  if (minute > 0 && minute <= 30) {
    console.log("It's just after " + hour + " in the evening.");
    return;
  }
  else if (minute > 30 && minute <= 60) {
    console.log("It's almost " + hour + " in the evening.");
    return;
  }
  else {
    console.log("Invalid Time");
    return;
  }
}
else {
  console.log("Invalid Time");
  return;
}