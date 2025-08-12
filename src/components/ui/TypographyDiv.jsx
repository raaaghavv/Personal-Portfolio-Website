import React from "react";

function TypographyDiv({ children }) {
  return (
    <div
      className="relative aspect-2/1 border-x border-[var(--popover-border)] sm:aspect-3/1 flex items-center justify-center 
      text-black dark:text-white screen-line-after before:-top-px after:-bottom-px 
      bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] 
      bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
    >
      <h1 className="font-PlayFair text-8xl text-center">{children}</h1>
    </div>
  );
}

export default TypographyDiv;
