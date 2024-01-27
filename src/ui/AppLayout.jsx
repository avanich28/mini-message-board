import Footer from "./Footer";
import Header from "./Header";
import MessageBoard from "./MessageBoard";

function AppLayout() {
  return (
    <div className="flex flex-col items-center justify-between h-screen pb-5 pt-20 bg-neutral-50 px-5 text-zinc-900 min-h-[600px]">
      <Header />
      <MessageBoard />
      <Footer />
    </div>
  );
}

export default AppLayout;
