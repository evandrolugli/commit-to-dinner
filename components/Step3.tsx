"use client";

export default function Step3({
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: any) {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-3xl font-bold">So, when are you free? 📅</h1>

      {/* DATE PICKER */}
      <div className="space-y-2">
        <p className="text-lg font-semibold">Pick a date:</p>

        <input
          type="date"
          className="text-black p-3 rounded-xl"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* TIME PICKER */}
      <div className="space-y-2">
        <p className="text-lg font-semibold">What time?</p>

        <select
          className="text-black p-3 rounded-xl block mx-auto"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Pick a time</option>

          <option>5 PM - we are eating with the retirees 👴</option>

          <option>6 PM - this is the right answer 😏</option>

          <option>7 PM - you are making me hungry already 🍕</option>

          <option>8 PM - we eating dinner or breakfast? 🤔</option>
        </select>
      </div>

      {/* NEXT BUTTON */}
      <button
        onClick={() => setStep(4)}
        className="bg-pink-500 px-6 py-3 rounded-xl font-bold hover:bg-pink-600 transition"
      >
        next →
      </button>
    </div>
  );
}