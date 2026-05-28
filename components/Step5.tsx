"use client";

import { useEffect, useState } from "react";

export default function Step5({
  selectedDate,
  selectedTime,
  selectedFood,
}: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Glad you did not say no, be ready by {selectedTime}!</h1>

      {show && (
        <div className="space-y-4">
          <p>Date: {selectedDate}</p>
          <p>Food: {selectedFood}</p>

          <h2 className="text-2xl font-bold mt-6">
            This is officially a date now 💘
          </h2>
        </div>
      )}

      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2t2Z2V5d2Z1b2J6d2Z0c3R5b3Z6ZzN1c2ZtYzF2dWZqZ2Q1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif"
        className="w-64 mx-auto rounded-2xl"
      />
    </div>
  );
}