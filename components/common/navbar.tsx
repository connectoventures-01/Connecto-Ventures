"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Problem Statement", href: "/problem-statement" },
  { label: "For Founders", href: "/for-founder" },
  { label: "For Investors", href: "/for-investor" },
  { label: "Our Team", href: "/our-team" },
];

const FOUNDER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1";
const INVESTOR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfp4ePohYQGlO4KQB4afsgKl2sX235-IKOHMK15mo0e3MsHww/viewform";

function ApplyModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-999 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      <motion.div
        key="modal"
        className="fixed z-1000 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-48px)] max-w-md"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-2xl border border-gray-1 bg-[#0F0F0F] p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white-pure text-xl font-semibold">
                Apply Now
              </h2>
              <p className="text-muted text-sm mt-0.5">
                Choose how you'd like to apply
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-white-pure p-1.5 rounded-lg border border-gray-1 bg-gray-2 transition-colors"
              aria-label="Close"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={FOUNDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center gap-4 rounded-xl border border-gray-1 bg-gray-2/40 hover:border-brand/60 hover:bg-gray-2/80 px-5 py-4 transition-all duration-200"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.96 2.91m0 0a14.926 14.926 0 01-5.96-5.96m5.96 5.96L9.63 8.41m-3.37 9.7L3 21l2.89-3.26m0 0A14.926 14.926 0 018.41 9.63"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white-pure font-medium text-sm">
                  I'm a Founder
                </p>
                <p className="text-muted text-xs mt-0.5">
                  Apply for funding and support
                </p>
              </div>
              <svg
                className="size-4 text-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href={INVESTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center gap-4 rounded-xl border border-gray-1 bg-gray-2/40 hover:border-brand/60 hover:bg-gray-2/80 px-5 py-4 transition-all duration-200"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white-pure font-medium text-sm">
                  I'm an Investor
                </p>
                <p className="text-muted text-xs mt-0.5">
                  Explore investment opportunities
                </p>
              </div>
              <svg
                className="size-4 text-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="relative z-999">
        <div className="container bg-background/75 backdrop-blur-md border rounded-xl border-gray-2/80 transition-all duration-300">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={48}
                height={48}
                className="size-16 lg:size-22"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-muted font-medium">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isActive ? "text-brand" : "hover:text-white-pure"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-brand rounded-full"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center">
              <Button
                variant="primary"
                className="px-5 py-2.5"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
              </Button>
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden text-muted hover:text-white-pure p-2 border bg-gray-2 border-gray-1 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed top-28 left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] z-100 rounded-xl border border-gray-1 bg-[#0F0F0F] px-5 py-5 shadow-xl"
            >
              <div className="flex flex-col gap-4 text-muted font-medium">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative py-2 transition-colors ${
                        isActive ? "text-brand" : "hover:text-brand"
                      }`}
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 h-[1.5px] bg-brand rounded-full"
                        initial={false}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      />
                    </Link>
                  );
                })}
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isModalOpen && <ApplyModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
