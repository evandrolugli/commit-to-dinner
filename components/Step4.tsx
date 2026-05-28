"use client";

const foods = [
  { name: "Pizza 🍕" },
  { name: "Burger 🍔" },
  { name: "Sushi 🍣" },
  { name: "Ramen 🍜" },
  { name: "Tacos 🌮" },
  { name: "Pasta 🍝" },
];

export default function Step4({
  setStep,
  selectedFood,
  setSelectedFood,
}: any) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">What are we feeling? 😋</h1>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {foods.map((food) => (
          <button
            key={food.name}
            onClick={() => setSelectedFood(food.name)}
            className={`p-4 rounded-xl font-bold transition ${
              selectedFood === food.name
                ? "bg-pink-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {food.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => setStep(5)}
        className="bg-pink-500 px-6 py-3 rounded-xl font-bold"
      >
        this one →
      </button>
    </div>
  );
}