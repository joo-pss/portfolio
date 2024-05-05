import { Header } from "./components/Header";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Connect } from "./components/Connect";

export function App() {
  return (
    <div className="flex justify-center font-noto-sans text-sm text-zinc-400">
      <div className="max-w-lg px-4 py-28">
        <Header />
        <main>
          <About />
          <Work />
          <Connect />
        </main>
      </div>
    </div>
  );
}
