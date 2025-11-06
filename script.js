// Grab elements
const pantryInput = document.getElementById('pantry');
const moodSelect = document.getElementById('mood');
const makeLunchBtn = document.getElementById('makeLunch');
const outputDiv = document.getElementById('output');

// Some sample funny recipes and story templates
const recipes = [
  "a delicious {items} stir-fry",
  "a crazy {items} sandwich tower",
  "a magical {items} soup that talks to you",
  "a secret {items} pizza masterpiece",
  "a mysterious {items} salad of destiny"
];

const stories = [
  "Once upon a time, your {items} came alive and danced around the kitchen. Mood: {mood}.",
  "Your {items} decided to throw a tiny party while you weren't looking. Mood: {mood}.",
  "Legend says eating {items} today will make you {mood} for the rest of the day.",
  "The {items} whispered secrets only a {mood} chef could understand.",
  "Suddenly, your {items} transformed into a superhero meal! Mood: {mood}."
];

// Helper function to pick random item from array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Button click event
makeLunchBtn.addEventListener('click', () => {
  const pantryItems = pantryInput.value.trim();
  const mood = moodSelect.value;

  if (!pantryItems) {
    outputDiv.innerHTML = "Please enter some pantry items!";
    return;
  }

  // Generate random recipe and story
  const recipeTemplate = randomChoice(recipes);
  const storyTemplate = randomChoice(stories);

  const recipe = recipeTemplate.replace("{items}", pantryItems);
  const story = storyTemplate.replace("{items}", pantryItems).replace("{mood}", mood);

  outputDiv.innerHTML = `<strong>Recipe:</strong> ${recipe}<br><br><strong>Story:</strong> ${story}`;
});
