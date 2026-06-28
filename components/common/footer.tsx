"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-background border-t border-gray-2 pt-16 font-sans">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-6 pb-6 lg:pb-12">
          <div className="md:col-span-4 space-y-3">
            <Link
              href={"/#hero"}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                className="size-16 lg:size-22"
                width={48}
                height={46}
                src={"/logo.svg"}
                alt="Connecto Ventures Logo"
              />
            </Link>

            <p className="text-muted md:text-base font-light leading-relaxed max-w-sm">
              Connecto Ventures is an incubator and accelerator platform
              designed to support startups from ideation to growth.
            </p>

            <a
              className="text-muted md:text-base font-light leading-relaxed"
              href="mailto:contact@connectoventures.com"
            >
              contact@connectoventures.com
            </a>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                aria-label="Follow Connecto Ventures on X platform"
                className="size-10 rounded-full bg-gray-2 hover:bg-brand transition-colors flex items-center justify-center text-foreground/80 hover:text-black"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow Connecto Ventures on Facebook profile"
                className="size-10 rounded-full bg-gray-2 hover:bg-brand transition-colors flex items-center justify-center text-foreground/80 hover:text-black"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow Connecto Ventures on Instagram profile"
                className="size-10 rounded-full bg-gray-2 hover:bg-brand transition-colors flex items-center justify-center text-foreground/80 hover:text-black"
              >
                <svg
                  className="size-4 stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Connecto Ventures on LinkedIn"
                className="size-10 rounded-full bg-gray-2 hover:bg-brand transition-colors flex items-center justify-center text-foreground/80 hover:text-black"
              >
                <svg
                  className="size-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05c.53-1.01 1.84-2.08 3.79-2.08C19.23 8.11 21 10.29 21 14.26V24h-4v-8.36c0-1.99-.04-4.55-2.77-4.55-2.78 0-3.2 2.17-3.2 4.41V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-foreground tracking-wide">
              Company
            </h4>
            <ul className="space-y-3.5 text-base text-muted font-normal">
              <li>
                <a
                  href="/for-investor"
                  className="hover:text-brand transition-colors"
                >
                  For Investors
                </a>
              </li>
              <li>
                <a
                  href="/for-founder"
                  className="hover:text-brand transition-colors"
                >
                  For Founder
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-brand transition-colors"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-foreground tracking-wide">
              Help
            </h4>
            <ul className="space-y-3.5 text-base text-muted font-normal">
              <li>
                <a
                  href="/customer-support"
                  className="hover:text-brand transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policies"
                  className="hover:text-brand transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-foreground">
              Subscribe to Connecto Ventures
            </h4>

            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch w-full max-w-md rounded-lg overflow-hidden border border-gray-2 bg-gray-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3 bg-transparent text-foreground font-light placeholder:text-muted/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand text-background font-bold px-6 py-3 transition-opacity hover:opacity-90 cursor-pointer active:scale-[0.99] whitespace-nowrap"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-2/40 p-8 text-center">
          <p className="text-xs text-muted leading-normal">
            &copy; 2026 Connecto Ventures LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
