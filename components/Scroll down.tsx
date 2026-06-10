"use client";

export default function ScrollDown() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

      <div className="flex flex-col items-center">

        <span className="text-xs tracking-[4px] text-white">
          SCROLL
        </span>

        <div className="mt-3 h-10 w-[2px] bg-[#D4AF37]" />

      </div>

    </div>
  );
}
