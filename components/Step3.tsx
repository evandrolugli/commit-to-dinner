"use client";

export default function Step3({
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: any) {
  return (
    <div className="text-center space-y-8 text-white">
      <h1 className="text-3xl font-bold">So, when are you free?</h1>

      {/* CARD */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl space-y-6 max-w-md mx-auto">
        
        {/* DATE */}
        <div>
          <p className="font-semibold mb-2">Pick a date:</p>
          <input
            type="date"
            className="w-full p-3 rounded-xl text-black"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* TIME */}
        <div>
          <p className="font-semibold mb-2">What time?</p>

          <select
            className="w-full p-3 rounded-xl text-black"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Pick a time</option>

            <option value="5pm">5 PM - we are eating with the retirees 👴</option>
            <option value="6pm">6 PM - this is the right answer 😏</option>
            <option value="7pm">7 PM - you are making me hungry already 🍕</option>
            <option value="8pm">8 PM - we eating dinner or breakfast? 🤔</option>
          </select>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setStep(4)}
        disabled={!selectedDate || !selectedTime}
        className="bg-pink-500 px-6 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-pink-600 transition"
      >
        set the date →
      </button>
    </div>
  );
}