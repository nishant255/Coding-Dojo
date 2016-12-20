var money = 10000;
var bonus = 0.01;

for (var i = 1; i <=30; i++) {
  money = money + bonus;
  bonus += bonus;
}

console.log("Total Reward after 30 days is: $" + money);
