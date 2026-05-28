"use client";

import { motion } from "framer-motion";

export default function Step2({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <div className="text-center space-y-8">
      <motion.img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW5qZ3F5d2V1d2Y4bWJqZzR2eG9tZ3Z2Y2N2eGJ0b3V2dHk3eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif"
        className="w-64 mx-auto rounded-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        WAIT... YOU SAID YES 😳💖
      </motion.h1>

      <button
        onClick={() => setStep(3)}
        className="bg-pink-500 px-6 py-3 rounded-xl font-bold"
      >
        continue →
      </button>
    </div>
  );
}