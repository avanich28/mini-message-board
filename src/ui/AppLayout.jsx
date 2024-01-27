import Footer from "./Footer";
import Header from "./Header";
import MessageBoard from "./MessageBoard";

function AppLayout() {
  return (
    <div className="flex flex-col items-center pb-5 pt-16 bg-neutral-50 px-5 text-zinc-900 h-screen min-h-[600px] gap-2">
      <Header />
      <MessageBoard />
      <Footer />
    </div>
  );
}

export default AppLayout;
