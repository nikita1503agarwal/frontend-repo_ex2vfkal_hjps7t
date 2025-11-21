import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[82vh] md:h-[92vh] overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast - allow clicks to reach Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 bg-white/10 border border-white/10 px-3 py-1 rounded-full backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Launch your content engine in days, not months
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Train to create content super fast
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 text-transparent bg-clip-text">with an all-in-one playbook</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              Learn the exact systems we use to ideate, script, design, and publish at lightning speed. Includes a ready-to-use content bank and AI workflows for viral reach.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition">
                Get the Program
              </a>
              <a href="#details" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium backdrop-blur transition">
                See What’s Inside
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-emerald-400/30 border border-white/20" />
                <span className="w-8 h-8 rounded-full bg-cyan-400/30 border border-white/20" />
                <span className="w-8 h-8 rounded-full bg-blue-400/30 border border-white/20" />
              </div>
              <p>2,300+ creators trained • 4.9/5 average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
