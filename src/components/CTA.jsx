export default function CTA() {
  return (
    <section id="buy" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Start creating at hyperspeed</h2>
          <p className="mt-4 text-white/75">Enroll now to get lifetime access to the training, the full content bank, Canva Pro bonus, and AI workflows for virality.</p>
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a href="https://buy.stripe.com/test_4gwbML0bI6clf0c4gg" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition">
              Buy Now
            </a>
            <p className="text-white/60 text-sm">Secure checkout • 14-day guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
