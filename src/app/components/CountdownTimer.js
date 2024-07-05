export default function CountdownTimer() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-primary rounded-lg p-4 flex flex-col items-center">
        <span className="text-4xl font-bold text-primary-foreground">14</span>
        <span className="text-sm text-primary-foreground">Days</span>
      </div>
      <div className="bg-secondary rounded-lg p-4 flex flex-col items-center">
        <span className="text-4xl font-bold text-secondary-foreground">08</span>
        <span className="text-sm text-secondary-foreground">Hours</span>
      </div>
      <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
        <span className="text-4xl font-bold text-muted-foreground">42</span>
        <span className="text-sm text-muted-foreground">Minutes</span>
      </div>
      <div className="bg-accent rounded-lg p-4 flex flex-col items-center">
        <span className="text-4xl font-bold text-accent-foreground">17</span>
        <span className="text-sm text-accent-foreground">Seconds</span>
      </div>
    </div>
  );
}
