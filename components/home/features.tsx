"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "motion/react";
import gridLines from "@/public/images/grid-lines.svg"; // Adjust the path as necessary
import Image from "next/image";
import trackingIcon from "@/public/images/tracking-icon.svg";
import coinIcon from "@/public/images/coin-icon.svg";
import walletIcon from "@/public/images/wallet-icon.svg";
import peopleIcon from "@/public/images/people-icon.svg";

const options = [
  { id: "issuers", label: "For Issuers" },
  { id: "investors", label: "For Investors" },
];

const content = {
  issuers: [
    {
      id: "1",
      image: trackingIcon,
      title: "Real-time tracking of funding progress",
      description:
        "Monitor your fundraising campaign's performance with live updates and comprehensive analytics.",
    },
    {
      id: "2",
      image: coinIcon,
      title: "Low fundraising fees",
      description:
        "Maximize your capital efficiency with our competitive fee structure designed specifically for African markets",
    },
    {
      id: "3",
      image: walletIcon,
      title: "No legal fees",
      description:
        "Eliminate costly legal expenses with our pre-approved, standardized investment documentation.",
    },
    {
      id: "4",
      image: peopleIcon,
      title: "Access to a larger investor pool of HNIs and Diaspora Africans",
      description:
        "We connect you with qualified investors who understand the African market landscape and support local business growth.",
    },
  ],
  investors: [
    {
      id: "1",
      image: trackingIcon,
      title: "Access to highly vetted startups",
      description:
        "Discover high-potential startups and established businesses seeking funding in Africa.",
    },
    {
      id: "2",
      image: coinIcon,
      title: "Real-time tracking of your portfolio performance",
      description:
        "Monitor your investments with live updates and detailed analytics to make informed decisions.",
    },
    {
      id: "3",
      image: walletIcon,
      title: "Low fees and no legal costs",
      description:
        "Enjoy a cost-effective investment experience with minimal fees and no legal expenses.",
    },
    {
      id: "4",
      image: peopleIcon,
      title: "Diversify your portfolio with African assets",
      description:
        "Gain exposure to a wide range of investment opportunities across various sectors in Africa.",
    },
  ],
};

export default function Features() {
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof content>("issuers");

  return (
    <div className="py-14 px-4">
      <div className="py-14 flex items-center justify-between max-w-3xl mx-auto border border-muted-foreground/10 rounded">
        <h2 className="text-4xl font-semibold text-center">
          <span className="text-primary">5x</span> faster to raise funding for
          their businesses compared to traditional VCs
        </h2>
      </div>

      <div className="flex items-center justify-center gap-8 max-w-fit mx-auto mt-10 border-b border-muted-foreground/10">
        {options.map((option) => {
          return (
            <motion.div
              key={option.id}
              onClick={() =>
                setSelectedOption(option.id as keyof typeof content)
              }
              className="relative cursor-pointer transition-all duration-300"
            >
              {/* Animated background */}
              {selectedOption === option.id && (
                <motion.div
                  layoutId="features"
                  className="absolute border-b border-primary inset-0 z-0"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <div
                className={cn(
                  `py-2 text-xl cursor-pointer border-muted-foreground/10`,
                  {
                    "text-primary": selectedOption === option.id,
                    "text-muted-foreground": selectedOption !== option.id,
                  }
                )}
              >
                {option.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative overflow-hidden border black-orange-border py-18">
        <Image
          src={gridLines}
          alt="Grid lines"
          width={1920}
          height={1080}
          className="absolute -top-20 z-10 w-full h-full object-cover mask-b-from-20% mask-b-to-80%"
        />
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {content[selectedOption]?.map((item: any) => (
            <div
              key={item.id}
              className=" flex flex-col items-center text-center sm:flex-row sm:text-start md:flex-col md:items-start gap-4 p-4"
            >
              <Image src={item.image} alt={item.title} width={60} height={60} />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-[450px] -right-[550px] flex justify-center items-center z-0">
          <div className="w-[600px] h-[600px] rounded-full bg-orange-500 blur-[160px] opacity-40" />
        </div>
      </div>
    </div>
  );
}
