"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "./common/badge";
import { Group, ArrowRight, Sparkles } from "lucide-react";
import { TEAM_MEMBERS } from "@/utils/our-team";
import LeadershipIllustration from "@/constants/leadership";

export default function LeadershipTeam() {
  return (
    <section
      id="team"
      className="w-full scroll-mt-32 space-y-4 lg:space-y-6 pb-30 relative overflow-hidden container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 bg-gray-1 border border-gray-2 rounded-2xl p-5 lg:p-10 items-center">
        <div className="lg:col-span-7 space-y-4 md:pr-4">
          <Badge icon={<Group size={16} />} text="Team" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our Leadership Team
          </h2>
          <p className="text-muted text-sm md:text-base font-light leading-relaxed">
            The Connecto Ventures leadership team brings together a unique blend
            of enterprise leadership, startup building, investment expertise,
            and operational execution. With experience spanning global
            technology organizations, fintech, startup fundraising, product
            development, and alternative investments, we offer founders
            strategic vision coupled with hands-on execution capability.
          </p>
        </div>

        <div className="lg:col-span-5 w-full h-65 md:h-100 relative rounded-2xl overflow-hidden">
          <LeadershipIllustration />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={idx}
            transition={{ duration: 0.25 }}
            className="bg-gray-1 border border-gray-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
          >
            <div className="w-full aspect-4/3 relative bg-[#1c1c1e] overflow-hidden">
              <img
                src={member.imgSrc}
                alt={member.name}
                sizes="(max-width: 768px) 100vw, 32vw"
                className="object-cover object-top group-hover:scale-110 transition-all duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {member.name}
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed line-clamp-3">
                  {member.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-brand font-medium text-sm md:text-base tracking-wide">
                  {member.role}
                </span>
                <Link
                  href={`/our-team/${member.id}`}
                  className="inline-flex items-center gap-1 text-sm md:text-base font-semibold text-brand hover:text-brand/70 transition-colors shrink-0"
                >
                  Read More <ArrowRight className="size-6 -rotate-45" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Join Our Team CTA Card */}
        <motion.div
          transition={{ duration: 0.25 }}
          className="bg-gray-1 border border-gray-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
        >
          <div className="w-full aspect-4/3 relative bg-gradient-to-br from-brand/20 via-[#1c1c1e] to-[#1c1c1e] overflow-hidden flex items-center justify-center">
            {/* decorative glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/25 rounded-full blur-3xl group-hover:bg-brand/35 transition-all duration-500" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand/15 rounded-full blur-3xl" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand/15 border border-brand/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
              <Sparkles className="size-8 text-brand" />
            </div>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Join Our Team
              </h3>
              <p className="text-muted text-sm font-light leading-relaxed line-clamp-3">
                We&apos;re always looking for driven, talented people to help
                shape the future of Connecto Ventures. If you&apos;re passionate
                about building great companies, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1">
              <span className="text-brand font-medium text-sm md:text-base tracking-wide">
                Get in Touch
              </span>
              <Link
                href="/customer-support"
                className="inline-flex items-center gap-1 text-sm md:text-base font-semibold text-brand hover:text-brand/70 transition-colors shrink-0"
              >
                Read More <ArrowRight className="size-6 -rotate-45" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
