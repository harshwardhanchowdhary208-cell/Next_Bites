import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
        padding: "0 1.5rem 2rem",
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
