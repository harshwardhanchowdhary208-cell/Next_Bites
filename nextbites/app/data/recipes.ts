// app/data/recipes.ts

export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  // ... any other fields from Part 1 ...
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Sea salt",
    ],
    steps: [
      "Stretch the dough into a thin round base.",
      "Spread the tomato sauce evenly and add mozzarella.",
      "Bake in a hot oven until the crust is golden and blistered.",
      "Finish with basil, olive oil, and a pinch of sea salt.",
    ],
  },
  {
    id: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    ingredients: [
      "Chicken breast",
      "Greek yogurt",
      "Garam masala",
      "Garlic",
      "Ginger",
      "Tomatoes",
      "Cream",
      "Cilantro",
    ],
    steps: [
      "Marinate the chicken in yogurt, garlic, ginger, and garam masala.",
      "Roast or pan-sear the chicken until lightly charred.",
      "Simmer tomatoes and spices until thick and fragrant.",
      "Fold in the chicken and cream, then garnish with cilantro.",
    ],
  },
  {
    id: "tofu-buddha-bowl",
    title: "Tofu Buddha Bowl",
    cuisine: "Japanese-inspired",
    ingredients: [
      "Firm tofu",
      "Brown rice",
      "Avocado",
      "Edamame",
      "Carrots",
      "Cucumber",
      "Sesame seeds",
      "Soy-ginger dressing",
    ],
    steps: [
      "Bake or pan-fry the tofu until crisp on the edges.",
      "Cook the rice and prep the vegetables.",
      "Assemble the bowl with rice, tofu, and fresh vegetables.",
      "Finish with sesame seeds and soy-ginger dressing.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}