import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Header=()=> {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      id="header"
      className="relative h-[40vh] sm:h-[35vh] xs:h-[30vh] flex justify-center items-center text-blue-400 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/honeycomb-3.jpg')" }}
    >
      {/* Confetti effect for first 5 seconds */}
      {showConfetti && <Confetti className="absolute top-0 left-0 w-full h-full" />}

      <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold text-center drop-shadow-lg">
        Welcome
        <span className="inline-block mx-2 animate-bounce">💻</span>
        Nazim Khan Portfolio
      </h1>
    </header>
  );
}

export default Header;

