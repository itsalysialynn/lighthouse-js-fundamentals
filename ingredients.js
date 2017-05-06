var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


// A while loop that prints out the contents of ingredients:
var i = 0;

while (i < 8) {
  console.log(ingredients[i]);
  i++;
}

// A for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// A loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}