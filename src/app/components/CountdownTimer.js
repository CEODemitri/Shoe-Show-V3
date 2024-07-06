export default function CountdownTimer() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="bg-[#111a3e] rounded-lg p-4 flex flex-col items-center">
        <span className="text-3xl font-bold text-[#EEF1FC]" id="days">
          14
        </span>
        <span className="text-sm text-[#EEF1FC]">Days</span>
      </div>
      <div className="bg-[#EEF1FC] rounded-lg p-4 flex flex-col items-center">
        <span
          className="text-3xl font-bold text-secondary-foreground"
          id="hours"
        >
          08
        </span>
        <span className="text-sm text-secondary-foreground">Hours</span>
      </div>
      <div className="bg-[#EEF1FC] rounded-lg p-4 flex flex-col items-center">
        <span className="text-3xl font-bold text-muted-foreground" id="minutes">
          42
        </span>
        <span className="text-sm text-muted-foreground">Minutes</span>
      </div>
      <div className="bg-[#EEF1FC] rounded-lg p-4 flex flex-col items-center">
        <span
          className="text-3xl font-bold text-accent-foreground"
          id="seconds"
        >
          17
        </span>
        <span className="text-sm text-accent-foreground">Seconds</span>
      </div>
    </div>
  );
}
