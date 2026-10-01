function Header() {
  return (
    <header className="animate-header-in fixed inset-x-0 top-0 z-40 flex min-h-20 w-full items-center justify-between gap-4 bg-[#83d263] px-6 text-[#111710] motion-reduce:animate-none sm:px-10 lg:px-[7vw]">
      <a className="text-lg font-bold sm:text-xl" href="#home" aria-label="Sh. Ubaydullayev home">
        Sh. Ubaydullayev
      </a>
      <a
        className="inline-flex min-h-12 items-center gap-3 rounded bg-[black] px-5 text-sm font-semibold text-[#83d263] shadow-sm transition-colors hover:bg-black hover:text-[darkgreen] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        See my GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Header