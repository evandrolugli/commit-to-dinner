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
<img
  src="/sponge-bob.jpeg"
  alt="spongebob meme"
  className="w-60 mx-auto mb-6 rounded-2xl"
/>

      <h1 className="text-5xl font-bold mb-10">
        Tami Tami, will you go on a date with me? 💖
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