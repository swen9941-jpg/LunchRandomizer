// Grab elements
const pantryInput = document.getElementById('pantry');
const moodSelect = document.getElementById('mood');
const makeLunchBtn = document.getElementById('makeLunch');
const outputDiv = document.getElementById('output');

// Sample recipes and stories
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

// Emojis by mood
const moodEmojis = {
  happy: "😄🍉🍕",
  lazy: "😴🍩🍔",
  adventurous: "🗺️🌶️🥑"
};

// Helper functions
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomColor() {
  const colors = ["#fff3e6", "#e6fff2", "#fff0f5", "#f0f8ff", "#fffbe6"];
  return randomChoice(colors);
}

// Load saved recipes from localStorage
function loadFavorites() {
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  return saved;
}

function saveFavorite(recipeStory) {
  const favorites = loadFavorites();
  favorites.push(recipeStory);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Button click event
makeLunchBtn.addEventListener('click', () => {
  const pantryItems = pantryInput.value.trim();
  const mood = moodSelect.value;

  if (!pantryItems) {
    outputDiv.innerHTML = "Please enter some pantry items!";
    return;
  }

  // Generate random recipe + story
  const recipeTemplate = randomChoice(recipes);
  const storyTemplate = randomChoice(stories);
  const recipe = recipeTemplate.replace("{items}", pantryItems);
  const story = storyTemplate.replace("{items}", pantryItems).replace("{mood}", mood);

  // Add emoji and random background
  const emoji = moodEmojis[mood];
  outputDiv.style.backgroundColor = randomColor();
  outputDiv.innerHTML = `<strong>Recipe:</strong> ${recipe} ${emoji}<br><br><strong>Story:</strong> ${story}`;

  // Save to favorites
  saveFavorite({recipe, story, emoji, mood, date: new Date().toLocaleString()});
});

// Optional: Log all favorites to console (you can make a Favorites page later)
console.log("Saved Recipes:", loadFavorites());
