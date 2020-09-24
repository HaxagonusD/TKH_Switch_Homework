const switchSomething = () => {
  const answer = prompt("What is the menu item?");
  switch (answer) {
    case "Burger":
      console.log("$10");
      break;
    case "Steak ":
      console.log("$25");
      break;
    case "Salmon ":
      console.log("$20");
      break;
    case "Shrimp ":
      console.log("$20");
      break;
    case "Shrimp ":
      console.log("$20");
      break;
    case "Chicken":
      console.log("$15");
      break;
    default:
      console.log("Not available");
      break;
  }
};

switchSomething();
