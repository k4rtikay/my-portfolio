export function Bento() {
  return (
    <section className="mb-16">
      <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-6">
        Bento
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[120px] sm:auto-rows-[140px] gap-4">
        <div className="sm:col-span-3 sm:row-span-1 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground">Music widget</p>
          <p className="text-xs text-muted-foreground mt-1">Featured player</p>
        </div>
        <div className="sm:col-span-3 sm:row-span-1 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground">Time + weather</p>
          <p className="text-xs text-muted-foreground mt-1">At-a-glance</p>
        </div>
        <div className="sm:col-span-2 sm:row-span-1 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground">Tools</p>
          <p className="text-xs text-muted-foreground mt-1">Daily stack</p>
        </div>
        <div className="sm:col-span-2 sm:row-span-1 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground">Word / quote</p>
          <p className="text-xs text-muted-foreground mt-1">Idea of the day</p>
        </div>
        <div className="sm:col-span-2 sm:row-span-1 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <p className="text-sm font-medium text-foreground">Reading</p>
          <p className="text-xs text-muted-foreground mt-1">Current book</p>
        </div>
      </div>
    </section>
  );
}