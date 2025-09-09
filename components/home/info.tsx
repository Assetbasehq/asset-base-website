import Image from "next/image";
import React, { Fragment } from "react";
import teslaImage from "@/public/images/tesla.svg";
import gridLines from "@/public/images/grid-lines.svg"; // Adjust the path as necessary
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const metrics = [
  { id: 1, label: "Total Trading Volume", value: "$476B" },
  { id: 2, label: "Total Raised", value: "$276B" },
  { id: 3, label: "Users", value: "6M" },
  { id: 4, label: "TVL", value: "$176B" },
];

export default function Info() {
  return (
    <section className="relative w-full bg-black py-22 px-4 flex flex-col gap-18 justify-center items-center overflow-hidden">
      <div className="absolute -top-50 left-0 right-0 flex justify-center items-center z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-orange-500 blur-[160px] opacity-40" />
      </div>

      <Image
        src={gridLines}
        alt="Grid lines"
        width={1920}
        height={1080}
        className="absolute -top-65 z-10 w-full h-full object-cover"
      />

      <Image
        src={teslaImage}
        alt="Hero background"
        width={1920}
        height={1080}
        className="relative z-20 w-full max-w-3xl "
      />

      <div className="grid grid-cols-2 md:flex w-full md:flex-row md:h-40 items-center justify-center max-w-5xl space-x-4 text-sm border-b border-muted-foreground/30 py-8">
        {metrics.map((metric, index) => {
          const islastMetric = index === metrics.length - 1;
          const isFirstInLine = index % 2 !== 0;

          console.log({
            islastMetric,
            isFirstInLine,
          });

          return (
            <Fragment key={index}>
              <div
                key={index}
                className={cn(
                  `flex w-full gap-2 items-center justify-between mb-4 p-6 relative`
                )}
              >
                <div className="flex flex-col gap-2 items-center w-full">
                  <p className="text-4xl font-semibold">{metric.value}</p>
                  <p className="text-sm font-semibold text-muted-foreground text-center">
                    {metric.label}
                  </p>
                </div>
                {!isFirstInLine && (
                  <Separator
                    orientation="vertical"
                    className="!h-15 bg-muted-foreground/30 absolute right-0 md:hidden"
                  />
                )}
              </div>
              {!islastMetric && (
                <Separator
                  orientation="vertical"
                  className="!h-15 w-full bg-muted-foreground/30 hidden md:block"
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
