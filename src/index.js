function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#generatedRecipe", {
    strings: "Here is your new recipe: ",
    autoStart: true,
  });
}

let formElement = document.querySelector("#recipeForm");

formElement.addEventListener("submit", generateRecipe);
