import React from "react";
import Image from "next/image";
import startupImage from "@/public/images/startup.svg";
import artImage from "@/public/images/art.svg";
import commoditiesImage from "@/public/images/commodities.svg";
import charitiesImage from "@/public/images/charities.svg";
import realEstateImage from "@/public/images/real-estate.svg";
import debtsAndBondsImage from "@/public/images/debt-bond.svg";
import cryptoImage from "@/public/images/crypto.svg";
import privateBusinessImage from "@/public/images/private-business.svg";
import othersImage from "@/public/images/others.svg";

export default function AssetCategories() {
  const categories = [
    { id: 1, name: "Startup", image: startupImage },
    { id: 2, name: "Art", image: artImage },
    { id: 3, name: "Commodities", image: commoditiesImage },
    { id: 4, name: "Charities", image: charitiesImage },
    { id: 5, name: "Real Estate", image: realEstateImage },
    { id: 6, name: "Debts & Bonds", image: debtsAndBondsImage },
    { id: 7, name: "Crypto", image: cryptoImage },
    { id: 8, name: "Private Business", image: privateBusinessImage },
    { id: 9, name: "Others", image: othersImage },
  ];

  return (
    <div className="bg-black py-24 px-4 z-20 text-center">
      <h2 className="text-3xl text-white font-semibold mb-8">
        Asset Categories
      </h2>

      <div className="flex gap-18 gap-y-4 flex-wrap justify-center mt-12 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center mt-4">
            <Image
              src={category.image}
              alt={category.name}
              width={50}
              height={50}
              className="mr-4"
            />
            <p className="text-white font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
