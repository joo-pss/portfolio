export function Header() {
  return (
    <header className="flex items-center gap-6">
      <img
        src="https://github.com/joo-pss.png"
        className="h-20 w-20 rounded-full transition-transform hover:scale-[1.03] sm:h-24 sm:w-24"
      />
      <div>
        <h1 className="ml-[2.5px] text-xl font-medium text-zinc-50">
          João Silva
        </h1>
        <p>Solution-oriented Developer</p>
        <a
          href="https://github.com/joo-pss"
          target="_blank"
          className="hover:underline"
        >
          @joo-pss
        </a>
      </div>
    </header>
  );
}
