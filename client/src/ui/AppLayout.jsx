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
    <div className="flex flex-col items-center pb-5 pt-16 bg-neutral-50 px-5 text-zinc-900 h-screen min-h-[600px] gap-2">
      {showConfetti && <ConfettiExplosion className="absolute" />}
      <Header />
      <MessageBoard onClick={handleConfentti} />
      <Footer />
    </div>
  );
}

export default AppLayout;
