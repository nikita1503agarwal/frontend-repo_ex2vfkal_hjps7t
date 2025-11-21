import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for contrast and premium glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(800px_300px_at_10%_0%,rgba(16,185,129,0.2),transparent),radial-gradient(800px_300px_at_90%_10%,rgba(59,130,246,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10 pt-28 pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Enrollment open — limited spots
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Build a content machine that prints attention
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 text-transparent bg-clip-text">in days, not months</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              HyperContent Lab shows you the exact systems to ideate, script, design, and publish at hyperspeed — with AI workflows and a plug-and-play content bank.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(16,185,129,.25)] transition">
                Get the Program
              </a>
              <a href="#details" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium backdrop-blur transition">
                See What’s Inside
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">2,300+</p>
                <p className="text-white/70 text-sm">Creators trained</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-white/70 text-sm">Average rating</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">60 min</p>
                <p className="text-white/70 text-sm">Idea ➜ Published</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating preview cards */}
        <div className="pointer-events-none relative container mx-auto px-6 md:px-10 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {['Hooks Lab','Script Forge','Idea Matrix','Repurpose OS','Title/Thumb','Analytics','Brand Kits','Templates'].map((x) => (
              <div key={x} className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 text-sm">
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
