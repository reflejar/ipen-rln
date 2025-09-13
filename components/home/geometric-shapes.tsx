export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Violet shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-violet-600/30 transform rotate-45"></div>
      <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-violet-400/25 rounded-full"></div>

      {/* Brown/Orange shapes */}
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-amber-700/20 transform rotate-12"></div>
      <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-orange-600/25 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-amber-800/30 transform rotate-45"></div>

      {/* Celeste/Blue shapes */}
      <div className="absolute bottom-40 left-1/2 w-36 h-36 bg-cyan-400/15 rounded-full"></div>
      <div className="absolute top-1/2 right-1/2 w-14 h-14 bg-sky-500/25 transform rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-22 h-22 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>

      {/* Additional floating shapes */}
      <div className="absolute top-10 right-1/2 w-8 h-8 bg-pink-400/30 rounded-full"></div>
      <div className="absolute bottom-10 left-1/2 w-6 h-6 bg-yellow-400/40 transform rotate-45"></div>
      <div className="absolute top-1/2 left-10 w-10 h-10 bg-green-400/25 rounded-full"></div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-100/30 via-transparent to-cyan-100/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/20 via-transparent to-transparent"></div>
    </div>
  );
}
