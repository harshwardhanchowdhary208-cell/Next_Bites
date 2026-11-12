// app/components/RecipeCard.tsx
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="card"
      style={{
        display: "block",
        padding: "1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{recipe.title}</h3>
      <p style={{ margin: 0, color: "#4b5563" }}>{recipe.cuisine}</p>
      <p style={{ margin: "0.75rem 0 0", color: "#111827" }}>
        {recipe.ingredients.length} ingredients · {recipe.steps.length} steps
      </p>
    </Link>
  );
}