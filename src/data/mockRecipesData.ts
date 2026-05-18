import mediterraneanLarge from "../assets/images/mediterranean-chickpea-salad-large.webp";
import mediterraneanSmall from "../assets/images/mediterranean-chickpea-salad-small.webp";

import avocadoLarge from "../assets/images/avocado-tomato-wholegrain-toast-large.webp";
import avocadoSmall from "../assets/images/avocado-tomato-wholegrain-toast-small.webp";

import salmonLarge from "../assets/images/salmon-asparagus-large.webp";
import salmonSmall from "../assets/images/salmon-asparagus-small.webp";

import quinoaLarge from "../assets/images/quinoa-veggie-bowl-large.webp";
import quinoaSmall from "../assets/images/quinoa-veggie-bowl-small.webp";

import tacosLarge from "../assets/images/sweet-potato-tacos-large.webp";
import tacosSmall from "../assets/images/sweet-potato-tacos-small.webp";

import yogurtLarge from "../assets/images/greek-yogurt-large.webp";
import yogurtSmall from "../assets/images/greek-yogurt-small.webp";

import soupLarge from "../assets/images/lentil-soup-large.webp";
import soupSmall from "../assets/images/lentil-soup-small.webp";
import pancakesLarge from "../assets/images/banana-pancakes-large.webp";
import pancakesSmall from "../assets/images/banana-pancakes-small.webp";
import type { Recipe } from "../interfaces/foodInterfaces";

export const recipesData: Recipe[] = [
  {
    id: 1,
    title: "Mediterranean Chickpea Salad",
    slug: "mediterranean-chickpea-salad",
    image: {
      large: mediterraneanLarge,
      small: mediterraneanSmall,
    },
    overview:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 0,
    ingredients: [
      "1 can (400 g) chickpeas, drained & rinsed",
      "1 small cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red bell pepper, diced",
      "1/4 red onion, finely chopped",
      "2 Tbsp fresh parsley, chopped",
      "2 Tbsp extra-virgin olive oil",
      "1 Tbsp fresh lemon juice",
      "Sea salt & black pepper to taste",
    ],
    instructions: [
      "In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper; toss to coat.",
      "Serve immediately or chill up to 2 days.",
    ],
  },

  {
    id: 2,
    title: "Avocado & Tomato Wholegrain Toast",
    slug: "avocado-tomato-wholegrain-toast",
    image: {
      large: avocadoLarge,
      small: avocadoSmall,
    },
    overview:
      "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prepMinutes: 5,
    cookMinutes: 5,
    ingredients: [
      "2 slices wholegrain bread",
      "1 ripe avocado",
      "6 cherry tomatoes, quartered",
      "1 tsp extra-virgin olive oil",
      "1 tsp fresh lemon juice",
      "Sea salt, black pepper, pinch chili flakes",
    ],
    instructions: [
      "Toast the bread to desired crispness.",
      "Mash avocado with lemon juice, salt and pepper.",
      "Spread avocado on toast and top with tomatoes.",
      "Drizzle olive oil and sprinkle chili flakes.",
    ],
  },

  {
    id: 3,
    title: "One-Pan Lemon Garlic Salmon with Asparagus",
    slug: "one-pan-lemon-garlic-salmon-with-asparagus",
    image: {
      large: salmonLarge,
      small: salmonSmall,
    },
    overview:
      "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prepMinutes: 5,
    cookMinutes: 12,
    ingredients: [
      "2 salmon fillets (125 g each)",
      "200 g asparagus spears, trimmed",
      "1 Tbsp extra-virgin olive oil",
      "2 garlic cloves, minced",
      "1/2 lemon, sliced",
      "Sea salt & black pepper",
    ],
    instructions: [
      "Heat a large skillet over medium-high with olive oil.",
      "Season salmon and asparagus with salt, pepper, and minced garlic.",
      "Place salmon skin-side down; arrange asparagus around.",
      "Cook 4 min, flip salmon, add lemon slices, cook 4–5 min more until salmon is opaque.",
      "Serve hot with pan juices.",
    ],
  },

  {
    id: 4,
    title: "Quinoa Veggie Power Bowl",
    slug: "quinoa-veggie-power-bowl",
    image: {
      large: quinoaLarge,
      small: quinoaSmall,
    },
    overview:
      "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 15,
    ingredients: [
      "1 cup cooked quinoa",
      "1 cup roasted sweet potato cubes",
      "1 cup baby spinach",
      "1/2 cup chickpeas",
      "1/2 avocado, sliced",
      "1 Tbsp pumpkin seeds",
      "1 Tbsp olive oil",
      "1 Tbsp lemon juice",
    ],
    instructions: [
      "Cook quinoa according to package.",
      "Layer spinach, quinoa, sweet potato and chickpeas.",
      "Top with avocado and pumpkin seeds.",
      "Drizzle dressing.",
    ],
  },

  {
    id: 5,
    title: "Sweet Potato Black Bean Tacos",
    slug: "sweet-potato-black-bean-tacos",
    image: {
      large: tacosLarge,
      small: tacosSmall,
    },
    overview:
      "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prepMinutes: 10,
    cookMinutes: 15,
    ingredients: [
      "6 small corn tortillas",
      "1 sweet potato",
      "1 cup black beans",
      "1 Tbsp olive oil",
      "1/2 tsp cumin",
      "1/2 tsp smoked paprika",
    ],
    instructions: [
      "Roast sweet potato.",
      "Warm tortillas.",
      "Assemble tacos.",
      "Add lime, salsa and cilantro.",
    ],
  },

  {
    id: 6,
    title: "Greek Yogurt Berry Parfait",
    slug: "greek-yogurt-berry-parfait",
    image: {
      large: yogurtLarge,
      small: yogurtSmall,
    },
    overview: "Layers of creamy yogurt, fresh berries and crunchy oats.",
    servings: 1,
    prepMinutes: 5,
    cookMinutes: 0,
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup berries",
      "2 Tbsp oats",
      "1 tsp honey",
      "1 tsp chia seeds",
    ],
    instructions: [
      "Layer yogurt, berries and oats.",
      "Repeat layers.",
      "Drizzle honey and serve.",
    ],
  },

  {
    id: 7,
    title: "Lentil & Spinach Soup",
    slug: "lentil-spinach-soup",
    image: {
      large: soupLarge,
      small: soupSmall,
    },
    overview: "A hearty soup rich in plant protein and iron.",
    servings: 4,
    prepMinutes: 10,
    cookMinutes: 20,
    ingredients: [
      "1 onion",
      "1 carrot",
      "1 celery stalk",
      "1 cup red lentils",
      "4 cups broth",
      "2 cups spinach",
    ],
    instructions: [
      "Sauté vegetables.",
      "Add lentils and broth.",
      "Simmer 15 min.",
      "Add spinach and serve.",
    ],
  },

  {
    id: 8,
    title: "Banana Oat Pancakes",
    slug: "banana-oat-pancakes",
    image: {
      large: pancakesLarge,
      small: pancakesSmall,
    },
    overview: "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prepMinutes: 5,
    cookMinutes: 10,
    ingredients: [
      "2 bananas",
      "1 cup oats",
      "2 eggs",
      "1 tsp baking powder",
      "1/2 tsp cinnamon",
    ],
    instructions: [
      "Blend ingredients.",
      "Cook on skillet.",
      "Flip until golden.",
      "Serve with fruit.",
    ],
  },
];
