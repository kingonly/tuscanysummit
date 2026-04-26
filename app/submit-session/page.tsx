"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function SubmitSession() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [format, setFormat] = useState("talk");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/submit-session/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen relative">
      <div className="noise-overlay" />
      <Navigation />

      <section className="pt-40 pb-32 relative">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F4A524]/5 blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-[#F4A524] mb-4 block">
                Unconference
              </span>
              <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] mb-6">
                Propose a <span className="italic text-gradient-warm">Session</span>
              </h1>
              <p className="text-lg text-[#F5F0E8]/60 leading-relaxed max-w-lg mx-auto">
                Shape the afternoon unconference by proposing a session.
                Share what you&apos;re working on, spark a discussion, or lead a workshop.
              </p>
            </div>

            {status === "success" ? (
              <div className="card-glass p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F4A524] to-[#C75B39] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-editorial text-3xl text-[#F5F0E8] mb-4">
                  Session Submitted
                </h2>
                <p className="text-[#F5F0E8]/60 mb-8">
                  Thanks for your proposal! We&apos;ll review it and get back to you.
                </p>
                <Link href="/" className="btn-outline">
                  Back to Summit
                </Link>
              </div>
            ) : (
              <form
                name="session-submission"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="card-glass p-8 md:p-12 space-y-8"
              >
                <input type="hidden" name="form-name" value="session-submission" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wide text-[#F5F0E8]/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#0D0D0D]/60 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#F4A524]/50 transition-colors"
                    placeholder="e.g. Satoshi Nakamoto"
                  />
                </div>

                {/* Session Title */}
                <div>
                  <label htmlFor="title" className="block text-sm tracking-wide text-[#F5F0E8]/80 mb-2">
                    Session Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full bg-[#0D0D0D]/60 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#F4A524]/50 transition-colors"
                    placeholder="e.g. Channel Factories: Scaling Lightning 10x"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm tracking-wide text-[#F5F0E8]/80 mb-2">
                    Short Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full bg-[#0D0D0D]/60 border border-[#F5F0E8]/10 rounded-lg px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#F4A524]/50 transition-colors resize-none"
                    placeholder="Briefly describe your session — what will you cover and what should participants expect?"
                  />
                  <p className="text-xs text-[#F5F0E8]/30 mt-1">Max 500 characters</p>
                </div>

                {/* Format */}
                <fieldset>
                  <legend className="block text-sm tracking-wide text-[#F5F0E8]/80 mb-3">
                    Session Format
                  </legend>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "talk", label: "Talk", desc: "Present to an audience" },
                      { value: "workshop", label: "Workshop", desc: "Hands-on learning" },
                      { value: "discussion", label: "Discussion", desc: "Open group conversation" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex flex-col items-center text-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          format === option.value
                            ? "border-[#F4A524]/50 bg-[#F4A524]/5"
                            : "border-[#F5F0E8]/10 hover:border-[#F5F0E8]/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="format"
                          value={option.value}
                          checked={format === option.value}
                          onChange={(e) => setFormat(e.target.value)}
                          className="sr-only"
                        />
                        <span className={`text-sm font-semibold mb-1 ${
                          format === option.value ? "text-[#F4A524]" : "text-[#F5F0E8]/80"
                        }`}>
                          {option.label}
                        </span>
                        <span className="text-xs text-[#F5F0E8]/40">{option.desc}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Error message */}
                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Session Proposal"}
                </button>
              </form>
            )}
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
                &copy; 2026 Tuscany Lightning Summit
              </span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/#about" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                About
              </Link>
              <Link href="/#location" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                Location
              </Link>
              <Link href="/#apply" className="text-sm text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
                Waiting List
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
