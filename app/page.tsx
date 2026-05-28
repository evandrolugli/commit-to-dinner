"use client";

import { useState } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import Step5 from "@/components/Step5";

export default function Home() {
  const [step, setStep] = useState(1);
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedFood, setSelectedFood] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {step === 1 && <Step1 setStep={setStep} />}

      {step === 2 && <Step2 setStep={setStep} />}

      {step === 3 && (
        <Step3
          setStep={setStep}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}

      {step === 4 && (
        <Step4
          setStep={setStep}
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
        />
      )}

      {step === 5 && (
        <Step5
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedFood={selectedFood}
        />
      )}
    </main>
  );
}