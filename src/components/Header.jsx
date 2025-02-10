import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Header = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      id="header"
      className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] flex justify-center items-center text-blue-400 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/honeycomb-3.jpg')" }}
    >
      {/* Confetti effect for first 5 seconds */}
      {showConfetti && <Confetti className="absolute top-0 left-0 w-full h-full" />}

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center drop-shadow-lg px-4">
        Welcome
        <span className="inline-block mx-2 animate-bounce">💻</span>
        Nazim Khan Portfolio
      </h1>
    </header>
  );
}

export default Header;
