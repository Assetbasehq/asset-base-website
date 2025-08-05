import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import heroBackground from "@/public/images/hero-background.svg"; // Adjust the path as necessary
import heroBackground2 from "@/public/images/hero-background2.svg"; // Adjust the path as necessary

export default function Hero() {
  return (
    <section className="relative w-full px-4">
      <Image
        src={heroBackground}
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute z-30 -top-30 sm:top-10 2xl:top-1 right-0 2xl:-right-20 w-full h-full object-contain bg-black mask-b-from-0% mask-b-to-50% "
      />

      <Image
        src={heroBackground2}
        alt="Hero background"
        width={1920}
        height={1080}
        className="hidden 2xl:block absolute z-10 top-20 right-10 bottom-0 w-full h-full object-contain opacity-70 mask-b-from-0% mask-b-to-50%"
      />

      <div className="relative z-40 flex flex-col gap-8 items-center text-center pt-52 md:pt-64 py-32">
        <h1 className=" text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center max-w-4xl mx-auto">
          Get <span className="text-custom-orange">exclusive access</span> to
          alternative investments
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Assetbase offers a selection of highly vetted private investment
          opportunities that were previously only available to institutions and
          the ultra wealthy.
        </p>
        <Link href="/">
          <Button className="rounded-full px-6 py-6 bg-custom-orange shadow-lg shadow-orange-500/50">
            Start Investing
          </Button>
        </Link>
      </div>
    </section>
  );
}
