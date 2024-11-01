document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const recipeSelector = document.getElementById('recipeSelector');
    const selectedRecipe = recipeSelector.value;
    const recipeOutput = document.getElementById('recipeOutput');

    // Sample recipes (you can fetch these from your PHP backend instead)
    const recipes = {
        '1': 'Smoothie Recipe: Blend banana, spinach, and chia seeds with almond milk for a nutritious start.',
        '2': 'Yogurt Parfait: Layer yogurt with berries and granola for a delicious and healthy treat.',
        '3': 'Overnight Oats: Combine oats with almond milk and let sit overnight; top with fruits in the morning.',
        '4': 'Avocado Toast: Smash avocado on whole grain toast and top with cherry tomatoes and a sprinkle of salt.',
        '5': 'Breakfast Quesadilla: Fill a tortilla with eggs and cheese, cook until golden, and enjoy!',
    };

    // Display the selected recipe
    recipeOutput.innerHTML = `<h3>Recipe:</h3><p>${recipes[selectedRecipe]}</p>`;
});
