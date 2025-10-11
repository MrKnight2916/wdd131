const recipes = [
    { type: "breakfast", name: "Pancakes", ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder", "Salt", "Butter", "Fruit to your liking"], steps: ["Mix dry ingredients in a bowl", "Add milk and eggs", "Whisk until smooth", "Cook on a buttered skillet until golden", "Serve with fruit or syrup"], image: "../images/pancakes.jpg" },
    { type: "breakfast", name: "Omelette", ingredients: ["Eggs", "Milk", "Salt", "Pepper", "Cheese", "Vegetables (optional)"], steps: ["Beat eggs with milk, salt, and pepper", "Pour into a hot non-stick skillet", "Add cheese and vegetables", "Fold omelette and cook until set", "Serve hot"], image: "../images/omelette.jpg" },
    { type: "breakfast", name: "French Toast", ingredients: ["Bread", "Eggs", "Milk", "Sugar", "Cinnamon", "Butter", "Maple Syrup"], steps: ["Mix eggs, milk, sugar, and cinnamon", "Dip bread slices in mixture", "Cook on a buttered skillet until golden brown", "Serve with maple syrup"], image: "../images/french_toast.jpg" },

    { type: "lunch", name: "Grilled Cheese", ingredients: ["Bread", "Cheese", "Butter"], steps: ["Butter the bread slices", "Place cheese between slices", "Grill on a skillet until golden brown", "Serve immediately"], image: "../images/grilled_cheese.jpg" },
    { type: "lunch", name: "Caesar Salad", ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing", "Chicken (optional)"], steps: ["Chop lettuce", "Add croutons and cheese", "Add dressing and toss", "Top with grilled chicken if desired", "Serve chilled"], image: "../images/caesar_salad.jpg" },
    { type: "lunch", name: "Veggie Wrap", ingredients: ["Tortilla", "Hummus", "Lettuce", "Tomato", "Cucumber", "Avocado"], steps: ["Spread hummus on tortilla", "Add vegetables", "Roll tightly", "Slice and serve"], image: "../images/veggie_wrap.jpg" },

    { type: "dinner", name: "Spaghetti", ingredients: ["Spaghetti Pasta", "Tomato Sauce", "Olive Oil", "Garlic", "Salt", "Pepper", "Parmesan Cheese"], steps: ["Boil pasta according to package instructions", "Prepare sauce with olive oil and garlic", "Mix pasta with sauce", "Top with parmesan cheese", "Serve hot"], image: "../images/spaghetti.jpg" },
    { type: "dinner", name: "Chicken Stir Fry", ingredients: ["Chicken breast", "Mixed vegetables", "Soy Sauce", "Garlic", "Ginger", "Oil"], steps: ["Cut chicken into strips", "Stir fry garlic and ginger in oil", "Add chicken and cook until done", "Add vegetables and soy sauce", "Cook until veggies are tender", "Serve hot with rice"], image: "../images/chicken_stir_fry.jpg" },
    { type: "dinner", name: "Beef Tacos", ingredients: ["Taco shells", "Ground beef", "Lettuce", "Cheese", "Tomato", "Salsa"], steps: ["Cook ground beef with seasoning", "Fill taco shells with beef", "Add lettuce, cheese, and tomato", "Top with salsa", "Serve immediately"], image: "../images/beef_tacos.jpg" },

    { type: "dessert", name: "Chocolate Cake", ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Milk", "Baking Powder", "Vanilla Extract"], steps: ["Preheat oven to 350°F (175°C)", "Mix dry ingredients", "Add wet ingredients and mix until smooth", "Pour batter into greased pan", "Bake for 30-35 minutes", "Cool and serve"], image: "../images/chocolate_cake.jpg" },
    { type: "dessert", name: "Fruit Parfait", ingredients: ["Yogurt", "Granola", "Mixed Fruits", "Honey (optional)"], steps: ["Layer yogurt in a glass", "Add granola on top", "Add a layer of mixed fruits", "Repeat layers if desired", "Drizzle with honey and serve chilled"], image: "../images/fruit_parfait.jpg" },
    { type: "dessert", name: "Banana Smoothie", ingredients: ["Banana", "Milk", "Honey", "Ice Cubes", "Vanilla Extract"], steps: ["Blend all ingredients until smooth", "Pour into glass", "Serve immediately"], image: "../images/banana_smoothie.jpg" }
];

let activeCategories = new Set(["all"]);

function displayRecipes() {
    const container = document.getElementById('recipesContainer');
    container.innerHTML = '';
    let filteredRecipes = [];

    if (activeCategories.has("all") || activeCategories.size === 0) {
        filteredRecipes = recipes;
    } else {
        recipes.forEach(r => { if (activeCategories.has(r.type)) filteredRecipes.push(r); });
    }

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <button id="btn-ing-${recipe.name.replace(/\s+/g,'')}" onclick="toggleIngredients('ingredients-${recipe.name.replace(/\s+/g,'')}')">Show Ingredients</button>
            <ul class="ingredients" id="ingredients-${recipe.name.replace(/\s+/g,'')}" style="display:none;">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
            <button id="btn-steps-${recipe.name.replace(/\s+/g,'')}" onclick="toggleSteps('steps-${recipe.name.replace(/\s+/g,'')}')">Show Steps</button>
            <ol class="steps" id="steps-${recipe.name.replace(/\s+/g,'')}" style="display:none;">
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
        `;
        container.appendChild(card);
    });
}

function toggleCategory(category) {
    if (category === "all") {
        activeCategories = new Set(["all"]);
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn[onclick="toggleCategory(\'all\')"]').classList.add('active');
    } else {
        activeCategories.delete("all");
        if (activeCategories.has(category)) {
            activeCategories.delete(category);
            event.target.classList.remove('active');
        } else {
            activeCategories.add(category);
            event.target.classList.add('active');
        }
        if (activeCategories.size === 0) activeCategories.add("all");
        document.querySelector('.category-btn[onclick="toggleCategory(\'all\')"]').classList.remove('active');
    }
    displayRecipes();
}

function toggleIngredients(id) {
    const ul = document.getElementById(id);
    const btn = document.getElementById("btn-ing-" + id.replace("ingredients-", ""));
    if (ul.style.display === "none") {
        ul.style.display = "block";
        btn.textContent = "Hide Ingredients";
    } else {
        ul.style.display = "none";
        btn.textContent = "Show Ingredients";
    }
}

function toggleSteps(id) {
    const ol = document.getElementById(id);
    const btn = document.getElementById("btn-steps-" + id.replace("steps-", ""));
    if (ol.style.display === "none") {
        ol.style.display = "block";
        btn.textContent = "Hide Steps";
    } else {
        ol.style.display = "none";
        btn.textContent = "Show Steps";
    }
}

displayRecipes();
