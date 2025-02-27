function generateRecipe(event) {
  event.preventDefault();
  let recipe = document.querySelector("#generatedRecipe");

  recipe.innerHTML = "please wait for the answer";

  let ingredientElement = document.querySelector("#ingredient");
  //let ingredient = ingredientElement.value;
  //console.log(ingredient);
  let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
  let context =
    "You are a great cook. Tell me the name of the Recepie in <strong> with a <br/> after and the display only the main ingredients. please display every ingredient in a separate line with a br/ in between, starting with the first ingredient.";
  let prompt = `Please give me a short recipe for ${ingredientElement.value} and follow the instructions.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
  new Typewriter("#generatedRecipe", {
    strings: (generatedRecipe.innerHTML = response.data.answer),
    autoStart: true,
  });
}

let formElement = document.querySelector("#recipeForm");

formElement.addEventListener("submit", generateRecipe);
