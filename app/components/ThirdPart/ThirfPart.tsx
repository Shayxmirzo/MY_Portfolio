import Image from "next/image"

function ThirfPart() {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89D467]">
            What I do
          </p>
          <h2 className="bg-linear-to-r from-[#89D467] via-[#C4F39A] to-[#6CBF50] bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
            Thoughtful design. Digital experiences that work.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            From the first sketch to the final screen, I create clear, engaging
            experiences shaped around real people and ambitious ideas.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <article className="group relative isolate flex min-h-120 flex-1 flex-col justify-center gap-4 overflow-hidden border border-[#83D263] bg-black p-7 before:absolute before:inset-0 before:z-0 before:origin-bottom before:scale-y-0 before:bg-white before:transition-transform before:duration-700 before:ease-out hover:before:scale-y-100 md:p-8">
              <div className="relative z-10 flex items-center justify-center">
                <Image src="/backend-code-settings-icon.svg" alt="Backend server and database" width={202} height={202}/>
              </div>
              <div className="relative z-10 flex flex-col text-center gap-4">
                <h3 className="bg-linear-to-r from-[#89D467] to-[#6a894b] bg-clip-text text-[32px] font-semibold text-transparent transition-colors duration-700 group-hover:bg-none group-hover:text-[#34432f]">
                  UI/UX Design
                </h3>
                <p className="leading-7 text-[21px] text-white/65 transition-colors duration-700 group-hover:text-[#465044]">
                  Intuitive interfaces and thoughtful user journeys, designed
                  to make every interaction feel natural.
                </p>
              </div>
          </article>

          <article className="group relative isolate flex min-h-120 flex-1 flex-col justify-center gap-4 overflow-hidden border border-[#83D263] bg-black p-7 before:absolute before:inset-0 before:z-0 before:origin-bottom before:scale-y-0 before:bg-white before:transition-transform before:duration-700 before:ease-out hover:before:scale-y-100 md:p-8">
              <div className="relative z-10 flex items-center justify-center">
               <Image src="/backend-server-database-icon.svg" alt="Backend server and database" width={202} height={202}/>
              </div>
              <div className="relative z-10 flex flex-col justify-center text-center gap-4">
                <h3 className="bg-linear-to-r from-[#89D467] to-[#c6f499] bg-clip-text text-[32px] font-semibold text-transparent transition-colors duration-700 group-hover:bg-none group-hover:text-[#34432f]">
                  Logical functional
                </h3>
                <p className="leading-7 text-[21px] text-white/65 transition-colors duration-700 group-hover:text-[#465044]">
                  Adding fuctions, sending messages to Telegram, works with API are posibble by me
                </p>
              </div>
          </article>

          <article className="group relative isolate flex min-h-120 flex-1 flex-col justify-center gap-4 overflow-hidden border border-[#83D263] bg-black p-7 before:absolute before:inset-0 before:z-0 before:origin-bottom before:scale-y-0 before:bg-white before:transition-transform before:duration-700 before:ease-out hover:before:scale-y-100 md:p-8">
              <div className="relative z-10 flex items-center justify-center">
                <Image src="/backend-cloud-api-icon.svg" alt="Backend server and database" width={202} height={202}/>
              </div>
              <div className="relative z-10 flex flex-col text-center gap-4">
                <h3 className="bg-linear-to-r from-[#89D467] to-[#c3e2a3] bg-clip-text text-[32px] font-semibold text-transparent transition-colors duration-700 group-hover:bg-none group-hover:text-[#34432f]">
                  Website Design
                </h3>
                <p className="leading-7 text-[21px] text-white/65 transition-colors duration-700 group-hover:text-[#465044]">
                  Responsive websites with a distinctive visual voice and a
                  smooth experience on every screen.
                </p>
              </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ThirfPart