"use client";

import { useState } from "react";

export default function Step1({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    setPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="text-center">
      {/* Cute cat */}
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9tZ3R0b2J2eWZ6c2Z5cGZqZ2V2b3Z5d2R0cGZ6Z2V5Z2V0b2V0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ICOgUNjpvO0PC/giphy.gif"
        alt="cute cat"
        className="w-60 mx-auto mb-6 rounded-2xl"
      />

      <h1 className="text-5xl font-bold mb-10">
        Will you go on a date with me? 💖
      </h1>

      {/* BUTTON AREA */}
      <div className="relative flex justify-center items-center gap-6 h-40">
        {/* YES BUTTON */}
        <button
          onClick={() => setStep(2)}
          className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl text-2xl font-bold transition z-10"
        >
          YES 💖
        </button>

        {/* NO BUTTON */}
        <button
          onMouseEnter={moveButton}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="bg-gray-700 px-8 py-4 rounded-2xl text-2xl font-bold transition-all duration-200"
        >
          NO 😈
        </button>
      </div>
    </div>
  );
}