"use client";

import Image from "next/image";
import Link from "next/link";
import coinStack from "@/public/images/coin-stack.svg"; // Or use /images/... if in public
import { Separator } from "../ui/separator";
import ctaBackground from "@/public/images/cta-background.svg"; // Adjust the path as necessary
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-32 px-4 flex justify-center items-center overflow-hidden">
      <Separator className="absolute top-0 left-0 right-0 bg-primary" />
      <div className="absolute -top-50 left-0 right-0 flex justify-center items-center z-0">
        <div className="w-[600px] h-[300px] rounded-full bg-orange-500 blur-[160px] opacity-40 animate-pulse" />
      </div>
      {/* CTA Card */}
      <div
        style={{ backgroundImage: `url(${ctaBackground.src})` }}
        className={cn(
          `relative z-10 max-w-4xl w-full rounded-2xl bg-custom-orange px-12 py-12 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden`,
          `bg-cover bg-center`
        )}
      >
        <div className="text-white max-w-md text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Start Building Your <br /> Portfolio Today
          </h2>
          <Link
            href="/get-started"
            className="inline-block mt-2 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold transition hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side: Coin Image */}
        <div className="mt-6 md:mt-0 md:ml-6 absolute bottom-0 right-0">
          <Image
            src={coinStack}
            alt="Coin stack"
            width={250}
            height={180}
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
