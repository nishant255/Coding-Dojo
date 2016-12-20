function birthdayCount(daysUntilmyBirthday) {


  for (var i = daysUntilmyBirthday; i >= 0; i--) {
    if (i > 30) {
      console.log(i + " days until my birthday. It's a long way to go! :( ");
    }
    else if (i <= 30 && i > 5) {
      console.log(i + " Days Until My Birthday. It's almost there! :) ");
    }
    else if (i > 1 && i <= 5) {
      console.log(i + " DAYS FOR MY BIRTHDAY!!!!!!!");
    }
    else if (i === 1) {
      console.log("TOMORROW IS MY BIRTHDAY!! YEYEYYEYEYE!!!!!!");
    }
    else if (i === 0) {
      console.log("TODAY IS MY BIRTHDAY YEYEYYEYEYE!!!!");
      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
      console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
      console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
    else {
      console.log("Uhhhh!! My birthday is passed! I have to wait until next year!!!");
    }
  }
}

console.log(birthdayCount(40));
