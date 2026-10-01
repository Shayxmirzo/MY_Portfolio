'use client';

import usePost from '../../hooks/Usepost';

const contactEmail = 'ubaydullayevshayxmirxo@gmail.com';

export default function Footer() {
  const { handleSubmit, isSubmitting, status } = usePost();

  return (
    <footer id="contact" className="w-full">
      <section className="bg-[linear-gradient(120deg,#83D263_0%,#96DE7B_48%,#63AD44_100%)] px-5 py-16 text-[#101b3b] md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#29675c]">
              Get in touch
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              If not now! When?
              <br />
              Let`s work together!
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#344360]">
              Tell me a little about what you have in mind. I`d love to hear from you.
            </p>
           
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              required
              className="min-h-12 w-full border border-[#233858]/15 bg-[#080d2b] px-4 py-3 text-[white] outline-none transition-colors placeholder:text-[#61708a] focus:border-[#29675c] focus:bg-[#0f1849]"
            />
            <label className="sr-only " htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              required
              className="min-h-12 w-full border border-[#233858]/15 bg-[#080d2b] px-4 py-3 text-[white] outline-none transition-colors placeholder:text-[#61708a] focus:border-[#29675c] focus:bg-[#0f1849]"
            />
            <label className="sr-only" htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full resize-y border border-[#233858]/15 bg-[#080d2b] px-4 py-3 text-[white] outline-none transition-colors placeholder:text-[#61708a] focus:border-[#29675c] focus:bg-[#0f1849]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-h-12 w-full bg-[#080d2b] px-5 py-3 font-semibold text-[#a8e875] transition-colors hover:bg-[#101b3b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101b3b]"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            <p aria-live="polite" className="min-h-6 text-sm text-[#101b3b]">
              {status === 'success' && 'Your message has been sent.'}
              {status === 'error' && 'Message could not be sent. Please try again.'}
            </p>
          </form>
        </div>
      </section>

      <section className="bg-[#080d2b] px-5 py-12 text-center text-white md:px-8 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <div className="mb-5 flex items-center gap-2.5 text-sm font-bold tracking-[0.16em]">
            <span aria-hidden="true" className="size-4 rotate-12 bg-[#a8e875]" />
            PORTFOLIO
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="text-2xl font-semibold transition-colors hover:text-[#b9ef8a] md:text-3xl"
          >
            {contactEmail}
          </a>
          <p className='text-[gray] pt-2'>Uzbekistan, Toshkent</p>
          <div className="mt-12 flex w-full flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}