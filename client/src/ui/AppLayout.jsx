import ConfettiExplosion from "react-confetti-explosion";
import Footer from "./Footer";
import Header from "./Header";
import MessageBoard from "./MessageBoard";
import { useState } from "react";

function AppLayout() {
  const [showConfetti, setShowConfetti] = useState(false);

  function handleConfentti() {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  }

  return (
    <div className="flex flex-col items-center pb-5 pt-16 px-5 text-zinc-900  gap-2">
      {showConfetti && <ConfettiExplosion className="absolute" />}
      <Header />
      <MessageBoard onClick={handleConfentti} />
      <Footer />
    </div>
  );
}

export default AppLayout;
