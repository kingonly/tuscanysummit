import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/background.png"
        >
          <source src="/2023.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-[#0D0D0D]/60" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#C75B39]/50 to-transparent animate-lightning" />
        <div className="absolute top-1/3 right-20 w-px h-32 bg-gradient-to-b from-transparent via-[#F4A524]/50 to-transparent animate-lightning delay-500" />
        
        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Eyebrow */}
          <div className="animate-fade-up mb-8">
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-[#F5F0E8]/60 border border-[#F5F0E8]/20">
              Viareggio, Italy — May 12-13
            </span>
          </div>
          
          {/* Main title */}
          <h1 className="font-editorial animate-fade-up delay-200">
            <span className="block text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-[#F5F0E8]">
              Tuscany
            </span>
            <span className="block text-[clamp(2rem,6vw,5rem)] leading-[1.1] tracking-[-0.01em] italic text-gradient-fire mt-2">
              Lightning Summit
            </span>
          </h1>
          
          {/* Year */}
          <div className="animate-fade-up delay-300 mt-6 mb-12">
            <span className="font-editorial text-[clamp(1.5rem,4vw,2.5rem)] text-[#F5F0E8]/40">
              2026
            </span>
          </div>
          
          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://luma.com/fcp4ov95"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply for Invitation
            </Link>
            <Link href="#about" className="btn-outline">
              Discover More
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/40">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F5F0E8]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 bg-[#C75B39] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-[#0D0D0D] font-medium text-sm tracking-widest uppercase">
              <span>Lightning</span>
              <span className="text-[#0D0D0D]/50">✦</span>
              <span>Spark</span>
              <span className="text-[#0D0D0D]/50">✦</span>
              <span>Ark</span>
              <span className="text-[#0D0D0D]/50">✦</span>
              <span>RGB</span>
              <span className="text-[#0D0D0D]/50">✦</span>
              <span>Bitcoin Layer 2</span>
              <span className="text-[#0D0D0D]/50">✦</span>
              <span>Innovation</span>
              <span className="text-[#0D0D0D]/50">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative tuscan-pattern" id="about">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Large number decoration */}
            <div className="relative">
              <span className="display-number absolute -top-20 -left-10 select-none pointer-events-none">
                26
              </span>
              <div className="relative z-10 animate-slide-left">
                <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
                  About the Summit
                </span>
                <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.1] mb-8">
                  Where Bitcoin&apos;s <br />
                  <span className="italic text-gradient-warm">brightest minds</span><br />
                  converge
                </h2>
              </div>
            </div>
            
            {/* Right - Description */}
            <div className="animate-slide-right delay-200">
              <div className="space-y-6 text-lg text-[#F5F0E8]/70 leading-relaxed">
                <p>
                  The Tuscany Lightning Summit is an exclusive gathering of the most innovative 
                  companies and leaders shaping Bitcoin&apos;s Layer-2 ecosystem.
                </p>
                <p>
                  Set against the stunning backdrop of Viareggio on the Tuscan coast, this summit 
                  provides an intimate setting for meaningful discussions, deep collaboration, 
                  and genuine connections among industry pioneers.
                </p>
              </div>
              
              <hr className="hr-gradient my-10" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-editorial text-4xl text-[#F4A524]">2</span>
                  <p className="text-sm text-[#F5F0E8]/50 mt-1">Days of Summit</p>
                </div>
                <div>
                  <span className="font-editorial text-4xl text-[#F4A524]">∞</span>
                  <p className="text-sm text-[#F5F0E8]/50 mt-1">Possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates Section - Editorial Style */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-[#C75B39] to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
              Mark Your Calendar
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl text-[#F5F0E8]">
              The Dates
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Day 1 */}
            <div className="text-center group">
              <div className="relative inline-block">
                <span className="font-editorial text-[8rem] md:text-[12rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,240,232,0.2)] group-hover:[-webkit-text-stroke:1px_#C75B39] transition-all duration-500">
                  12
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-editorial text-[8rem] md:text-[12rem] leading-none text-[#C75B39]/20">
                    12
                  </span>
                </div>
              </div>
              <p className="text-[#F5F0E8]/60 tracking-widest uppercase text-sm mt-4">May 2026</p>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-[#F5F0E8]/20 to-transparent" />
            <div className="md:hidden h-px w-40 bg-gradient-to-r from-transparent via-[#F5F0E8]/20 to-transparent" />
            
            {/* Day 2 */}
            <div className="text-center group">
              <div className="relative inline-block">
                <span className="font-editorial text-[8rem] md:text-[12rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,240,232,0.2)] group-hover:[-webkit-text-stroke:1px_#F4A524] transition-all duration-500">
                  13
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-editorial text-[8rem] md:text-[12rem] leading-none text-[#F4A524]/20">
                    13
                  </span>
                </div>
              </div>
              <p className="text-[#F5F0E8]/60 tracking-widest uppercase text-sm mt-4">May 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 relative" id="location">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Location info */}
            <div className="lg:col-span-2">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
                Location
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl text-[#F5F0E8] mb-8">
                Principino<br />
                <span className="italic text-[#F5F0E8]/60">Eventi</span>
              </h2>
              
              <div className="space-y-4 text-[#F5F0E8]/70">
                <p>Viale G. Marconi 130</p>
                <p>55049 Viareggio (LU)</p>
                <p className="text-[#F4A524]">Tuscany, Italy</p>
              </div>
            </div>
            
            {/* Map placeholder / Description */}
            <div className="lg:col-span-3">
              <div className="card-glass p-8 md:p-12 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C75B39] to-[#F4A524] flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl text-[#F5F0E8] mb-4">
                      On the Tuscan Coast
                    </h3>
                    <p className="text-[#F5F0E8]/60 leading-relaxed">
                      Nestled along the beautiful Versilian coast, Principino offers the perfect 
                      blend of Italian elegance and modern conference facilities. The venue provides 
                      an inspiring atmosphere for breakthrough discussions and meaningful connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-32 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]" id="agenda">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
              What to Expect
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl text-[#F5F0E8]">
              Summit Format
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Morning Sessions */}
            <div className="card-glass p-8 group hover:border-[#C75B39]/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-editorial text-5xl text-[#C75B39]">AM</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C75B39]/50 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F0E8] mb-4">
                Structured Sessions
              </h3>
              <p className="text-[#F5F0E8]/50 mb-6">
                10:00 AM — 12:15 PM each day
              </p>
              <ul className="space-y-3">
                {['Keynote presentations', 'Expert panel discussions', 'Moderated Q&A sessions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#F5F0E8]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C75B39] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Afternoon Sessions */}
            <div className="card-glass p-8 group hover:border-[#F4A524]/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-editorial text-5xl text-[#F4A524]">PM</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#F4A524]/50 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F0E8] mb-4">
                Unconference Sessions
              </h3>
              <p className="text-[#F5F0E8]/50 mb-6">
                2:00 PM onwards each day
              </p>
              <ul className="space-y-3">
                {['Participant-led discussions', 'Open collaboration time', 'Networking opportunities'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#F5F0E8]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4A524] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center text-[#F5F0E8]/40 mt-12 text-sm tracking-wide">
            Detailed agenda will be announced closer to the event
          </p>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-32 relative overflow-hidden" id="apply">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C75B39]/10 blur-[150px]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
              Join Us
            </span>
            <h2 className="font-editorial text-4xl md:text-6xl text-[#F5F0E8] mb-8">
              Apply for <span className="italic">Invitation</span>
            </h2>
            
            <p className="text-xl text-[#F5F0E8]/60 leading-relaxed mb-12">
              The Tuscany Lightning Summit is an invite-only gathering. Complete our application 
              to request participation. All applications are carefully reviewed and subject to approval.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="https://luma.com/fcp4ov95"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-glow-pulse"
              >
                Submit Application
              </Link>
              
              <Link
                href="https://t.me/+UbF06va7Eic4ODBk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-32 bg-[#1A1A1A] border-t border-[#F5F0E8]/5" id="host">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C75B39] mb-4 block">
              Presented By
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl text-[#F5F0E8]">
              Our Host
            </h2>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://fulgur.ventures" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-[#C75B39]/0 via-[#C75B39]/10 to-[#C75B39]/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <div className="relative card-glass p-12 md:p-16 transition-all duration-500 group-hover:border-[#C75B39]/20">
                <Image 
                  src="/fulgur.svg" 
                  alt="Fulgur Ventures" 
                  width={300} 
                  height={100} 
                  className="h-16 md:h-20 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-[#0D0D0D] border-t border-[#F5F0E8]/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/tuscany.png"
                alt="Tuscany Lightning Summit"
                width={32}
                height={32}
                className="brightness-0 invert opacity-60"
              />
              <span className="text-sm text-[#F5F0E8]/40">
                © 2026 Tuscany Lightning Summit
              </span>
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="#about" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                About
              </Link>
              <Link href="#location" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                Location
              </Link>
              <Link href="#apply" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                Apply
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
