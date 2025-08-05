"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "../ui/button";
import landmarkCover from "@/public/images/landmark-cover.svg";
import landmarklogo from "@/public/images/landmark-logo.svg";
import teslaCover from "@/public/images/tesla-cover.svg";
import teslaLogo from "@/public/images/tesla-logo.svg";
import tajBankCover from "@/public/images/tajbank-cover.svg";
import tajBankLogo from "@/public/images/tajbank-logo.svg";
import { motion } from "motion/react";
import Image from "next/image";
import { Progress } from "../ui/progress";

const assetTypes = [
  { id: "1", name: "New Funding Rounds", key: "new-funding-rounds" },
  { id: "2", name: "Most Trending", key: "most-trending" },
  { id: "3", name: "Upcoming Assets", key: "upcoming-assets" },
];

const assets = [
  {
    id: "1",
    name: "Landmark Realty Limited",
    acroynmy: "LARL",
    coverPhoto: landmarkCover,
    logo: landmarklogo,
    amount_raised: "$23,500",
    goal: "$1,200,000",
    round_closes: "15 days",
  },
  {
    id: "2",
    name: "Tesla",
    acroynmy: "TSLA",
    coverPhoto: teslaCover,
    logo: teslaLogo,
    amount_raised: "$23,500",
    goal: "$1,200,000",
    round_closes: "15 days",
  },
  {
    id: "3",
    name: "TajBank Mudarabah Sukuk",
    acroynmy: "TAJM",
    coverPhoto: tajBankCover,
    logo: tajBankLogo,
    amount_raised: "$23,500",
    goal: "$1,200,000",
    round_closes: "15 days",
  },
];

export default function AssetListing() {
  // const [assets, setAssets] = useState([]);
  const [selectedAssetType, setSelectedAssetType] =
    useState("new-funding-rounds");

  return (
    <div className="py-14 px-4">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold">Asset Listing</h2>
        <div className="relative flex gap-3 bg-navy-blue rounded-full text-xs sm:text-sm text-white px-4 py-2">
          {assetTypes.map((assetType) => (
            <motion.div
              key={assetType.id}
              className="relative cursor-pointer transition-all duration-300"
              onClick={() => setSelectedAssetType(assetType.key)}
            >
              {/* Animated background */}
              {selectedAssetType === assetType.key && (
                <motion.div
                  layoutId="assets"
                  className="absolute border border-primary inset-0 rounded-full z-0"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <motion.button
                className={cn(
                  "px-4 py-2 rounded-full border border-transparent cursor-pointer transition-all duration-300"
                )}
                data-category={assetType.key}
              >
                {assetType.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex gap-6 flex-wrap justify-center w-full my-14">
        {assets.map((asset) => {
          return (
            <div
              key={asset.id}
              className="relative p-4 bg-navy-blue/30 rounded-lg shadow-lg w-full max-w-sm"
            >
              <Image
                src={asset.coverPhoto}
                alt={`${asset.name}`}
                className="w-full rounded-lg"
                width={300}
                height={300}
              />
              <Image
                src={asset.logo}
                alt={`${asset.name}`}
                className="absolute top-16 right-10"
                width={50}
                height={50}
              />
              <div className="py-6 flex flex-col gap-2">
                <p>{asset.acroynmy}</p>
                <p>{asset.name}</p>
                <Progress value={20} className="bg-gray-300 my-3" />
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount Raised</span>
                    <span>{asset.amount_raised}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Goal</span>
                    <span>{asset.goal}</span>
                  </div>
                  <span className="flex justify-between">
                    <span className="text-muted-foreground">Round closes</span>
                    <span>
                      in <strong>{asset.round_closes}</strong>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Button className="bg-transparent border border-white rounded-full cursor-pointer">
          View All Assets
        </Button>
      </div>
    </div>
  );
}
