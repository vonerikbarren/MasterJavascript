// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉
const logMessage = message => {
  message = message || "Hello World!";
  console.log(message);
};

logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = beenWorkingAllDay => {
  const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
  console.log(message);
};

logTired(true);


var age = 26;
const beverageChoice = (age) => {
  beverage = (age >= 21) ? "Beer" : "Juice";
  console.log(beverage);
}

beverageChoice(11);



let smashBattlespace = {
  normalDimensions: {
    yTop: 2160,
    yBottom: -2160,
    xLeft: -3840,
    xRight: 3840,
    zFront: -10,
    zBack: 10
  },
  largeDimensions: {
    yTop: -3360,
    yBottom: 3360,
    xLeft: -5840,
    xRight: 5840,
    zFront: -10,
    zBack: 10
  }
}

var yTop = smashBattlespace.normalDimensions.yTop;

const criticalDeathHitVertical = (damageVerticalHitCounter, yTop) => {
  hit = (damageVerticalHitCounter > yTop) ? "Stock minus 1" : "Stock Stays At 3"
  console.log(hit);
}

criticalDeathHitVertical(3000, yTop);

criticalDeathHitVertical(2000, yTop);




