function lottery (num){

   var chance = (Math.floor(Math.random()*101)+1);  //generate a random number between 1 and 100
   var reward = (Math.floor(Math.random()*51)+50); //generate a number between 50 and 100 as reward


 while (num>0){

   if (chance<1){
     num = num + reward;
     console.log("your reward is "+reward);
     console.log (num);
     break;
   }
    console.log(num+" try");

   if(num===1){
    console.log("Out of money!");
   }
   num--
}
}

lottery(900);
