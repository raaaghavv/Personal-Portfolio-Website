function GutterDiv() {
  return (
    <div
      className="relative flex h-8 w-full max-w-3xl mx-auto
      border-x border-[var(--popover-border)]
      before:absolute before:-left-[100vw] 
      before:-z-1 before:h-8 before:w-[200vw] 
      before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] 
      before:bg-size-[10px_10px] 
      before:[var(--pattern-foreground)] z-1 screen-line-after "
    ></div>
  );
}

export default GutterDiv;
