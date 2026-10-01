import Image from "next/image"

function FirstPart() {
  return (
    <div className="container mx-auto flex justify-between items-center py-20" id="home">
      <section className="max-w-180" aria-labelledby="hero-title">
        <p className="animate-word-in mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#9bea7b] motion-reduce:animate-none">
          <span className="h-2.5 w-2.5 rounded-full bg-[#83d263]" />
          The young specialist
        </p>
        <h1 className="text-[44px] font-semibold leading-[1.08] text-white sm:text-[56px] xl:text-[68px]" id="hero-title">
          <span className="block">
            <span className="animate-word-in inline-block motion-reduce:animate-none">I’m</span>{" "}
            <span className="animate-word-in inline-block [animation-delay:120ms] motion-reduce:animate-none">a</span>{" "}
            <span className="animate-word-in inline-block [animation-delay:240ms] motion-reduce:animate-none">Frontend</span>{" "}
            <span className="animate-word-in inline-block [animation-delay:360ms] motion-reduce:animate-none">Developer</span>
          </span>
          <span className="mt-2 block text-[#83d263]">
            <span className="animate-word-in inline-block [animation-delay:520ms] motion-reduce:animate-none">Sh.</span>{" "}
            <span className="animate-word-in inline-block [animation-delay:640ms] motion-reduce:animate-none">Ubaydullayev</span>
          </span>
        </h1>
        <p className="animate-word-in mt-7 max-w-147.5 text-base leading-8 text-[#b8c0b7] [animation-delay:760ms] motion-reduce:animate-none sm:text-lg">
          I create thoughtful, responsive web experiences that make ideas feel
          simple. I care about accessible interfaces, careful details, and clean
          code that lasts.
        </p>
        <p className="animate-word-in mt-8 flex items-center gap-3 text-sm font-medium text-[#d5dfd2] [animation-delay:900ms] motion-reduce:animate-none">
          Thoughtful interfaces. Accessible by design. Built to perform.
        </p>
      </section>

      <div className="animate-word-in relative mx-auto flex aspect-[0.84] w-full max-w-105 items-center justify-center overflow-hidden border-2 border-[#83d263] bg-[#142018] p-2 lg:justify-self-end" aria-hidden="true">
        <Image className=" h-full w-full border border-[#b5ec99] object-cover [animation-delay:1.04s] motion-reduce:animate-none" src={"/image.png"} alt="It is me" width={500} height={600}/>
      </div>
    </div>
  )
}

export default FirstPart