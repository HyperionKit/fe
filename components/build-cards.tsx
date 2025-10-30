"use client";

export default function Home() {
  return (
    <main className="flex flex-col h-auto w-auto">
      {/* Top Section */}
      <div className="relative flex-1 bg-[#3B82F6]">
        {/* Small rectangle (top-right) */}
        <div className="absolute bottom-[40px] right-[40px] h-[24px] w-[96px] bg-[#A5F3FC]" />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-1">
        {/* Bottom Left */}
        <div className="relative flex-1 bg-[#A5F3FC]">
          <div className="absolute bottom-[40px] left-[40px] h-[24px] w-[96px] bg-[#38BDF8]" />
        </div>

        {/* Bottom Right */}
        <div className="relative flex-1 bg-[#001F7A]">
          <div className="absolute bottom-[40px] right-[40px] h-[24px] w-[96px] bg-[#A5F3FC]" />
        </div>
      </div>
    </main>
  );
}
