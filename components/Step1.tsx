"use client";

import { useState } from "react";

export default function Step1({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    setPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="text-center relative">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Q3eG1zdXJ5Y2s5eWVyd2J3cXZ6dDV6Y2g3b3l2bjA2dDY0djFkMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l49JHLpRSLhecYEmI/giphy.gif"
        alt="cat"
        className="w-52 mx-auto mb-6 rounded-2xl"
      />

      <h1 className="text-5xl font-bold mb-10">
        Will you go on a date with me?
      </h1>

      <div className="flex gap-6 justify-center">
        <button
          onClick={() => setStep(2)}
          className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl text-2xl font-bold transition"
        >
          YES 💖
        </button>

        <button
          onMouseEnter={moveButton}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="bg-gray-700 px-8 py-4 rounded-2xl text-2xl font-bold absolute transition-all duration-200"
        >
          NO 😈
        </button>
      </div>
    </div>
  );
}