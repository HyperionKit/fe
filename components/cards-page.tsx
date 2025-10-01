export default function CardPage() {
  return (
    <div className="min-h-screen bg-black p-2">
      <div className="grid grid-cols-3 grid-rows-2 h-screen gap-0">
        {/* Left column - spans 2 rows */}
        <div className="bg-cyan-300 col-span-1 row-span-2"></div>
        
        {/* Top middle */}
        <div className="bg-sky-400 col-span-1 row-span-1"></div>
        
        {/* Top right */}
        <div className="bg-blue-500 col-span-1 row-span-1"></div>
        
        {/* Bottom right - spans 2 columns */}
        <div className="bg-blue-600 col-span-2 row-span-1"></div>
      </div>
    </div>
  );
}