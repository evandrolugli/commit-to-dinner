"use client";

export default function Step3({
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: any) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">When are you free? 📅</h1>

      <input
        type="date"
        className="text-black p-3 rounded-xl"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <select
        className="text-black p-3 rounded-xl block mx-auto"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        <option value="">Pick a time</option>
        <option>5 PM</option>
        <option>6 PM</option>
        <option>7 PM</option>
        <option>8 PM</option>
      </select>

      <button
        onClick={() => setStep(4)}
        className="bg-pink-500 px-6 py-3 rounded-xl font-bold"
      >
        next →
      </button>
    </div>
  );
}