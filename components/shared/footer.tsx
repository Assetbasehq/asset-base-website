import React from "react";
import assetBaseLogoSecondary from "@/public/images/asset-base-logo-secondary.svg"; // Or use /images/... if in public
import twitterIcon from "@/public/images/twitter-icon.svg";
import instagramIcom from "@/public/images/instagram-icon.svg";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="w-full px-4 py-4 bg-black text-white flex flex-col items-center justify-center gap-2">
      <div className="flex w-full flex-col md:flex-row md:justify-between gap-8 py-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex gap-2 text-muted-foreground">
            <Image
              src={assetBaseLogoSecondary}
              alt="Assetbase logo"
              width={30}
              height={30}
            />
            <p className="text-3xl font-semibold">Assetbase</p>
          </div>
          <div className="flex gap-2 h-5 items-center text-muted-foreground font-semibold">
            <Image
              src={twitterIcon}
              alt="Twitter icon"
              width={20}
              height={20}
            />
            <Image
              src={instagramIcom}
              alt="Instagram icon"
              width={20}
              height={20}
            />
            <Separator orientation="vertical" />
            <a href="mailto:hello@assetbase.capital">hello@assetbase.capital</a>
          </div>
        </div>

        <div className="text-center flex flex-col gap-4 md:flex-row md:gap-10 md:text-start">
          <ul className="flex flex-col gap-2">
            <h3 className="text-gray-400 font-semibold">Company</h3>
            <li className="text-sm text-muted-foreground font-semibold">
              About Us
            </li>
            <li className="text-sm text-muted-foreground font-semibold">
              Terms & Conditions
            </li>
            <li className="text-sm text-muted-foreground font-semibold">
              Privacy Policy
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-gray-400 font-semibold">Product</h3>
            <li className="text-sm text-muted-foreground font-semibold">
              Invest
            </li>
            <li className="text-sm text-muted-foreground font-semibold">
              Assets
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-gray-400 font-semibold">Resources</h3>
            <li className="text-sm text-muted-foreground font-semibold">
              FAQs
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-muted-foreground" />
      <div className="flex flex-col gap-1 text-gray-400 font-semibold py-8">
        <p>
          This site (the "Site" ) is owned and maintained by Assebase Inc.,
          Which has a U.S broker-dealer license through the Rise Vest Financials
          LLC registration. Assetbase Inc. does not give investment advice,
          endorsement, analysis or recommendations with respect to any
          securities. All securities listed here are being offered by, and all
          information included on this Site is the responsibility of, the
          applicable issuer of such securities. The intermediary facilitating
          the offering will be identified in such offering's documentation.
        </p>
        <p>
          All funding-portal activities are conducted by Assetbase LLC doing
          business as Assetbase, a subsidiary of Rise Vest Investments LLC,
          registered with the US Securities and Exchange Commission (SEC) as an
          investment adviser and is a member of the Financial Industry
          Regulatory Authority (FINRA). Rise Vest Investments LLC SEC
          registration documents can be found on SEC's website.
        </p>
        <p>
          All broker-dealer related securities activity is conducted by Hi2
          Securities Inc, an independent broker-dealer working with Assetbase
          LLC and Rise Vest Investments LLC, and a registered broker-dealer, and
          member of FINRA | SiPC, located at 747 3rd Avenue, 26th Floor, New
          York, NY 10017, and can be found on FINRA's BrockerCheck. Certain
          pages discussing the mechanics and providing educational materials
          regarding regulation crowdfunding offerings may refer to Assetbase Inc
          and Assetbase LLC collectively as “Assetbase”, solely for explanatory
          purposes.
        </p>

        <p>
          Neither Assetbase Inc., Assetbase LLC nor Rise Vest Investments LLC
          make investment recommendations and no communication, through this
          Site or in any other medium should be construed as a recommendation
          for any security offered on or off this investment platform.
          Investment opportunities posted on this Site are private placements of
          securities that are not publicly traded, involve a high degree of
          risk, may lose value, are subject to holding period requirements and
          are intended for investors who do not need a liquid investment. Past
          performance is not indicative of future results. Investors must be
          able to afford the loss of their entire investment. Only qualified
          investors, which may be restricted to only Accredited Investors or
          non-U.S. persons, may invest in offerings hosted on Assetbase.
        </p>

        <p>
          Neither Assetbase Inc., Assetbase LLC, Hi2 Securities Inc nor Rise
          Vest Investments LLC, nor any of their officers, directors, agents and
          employees makes any warranty, express or implied, of any kind
          whatsoever related to the adequacy, accuracy or completeness of any
          information on this Site or the use of information on this site.
          Offers to sell securities can only be made through official offering
          documents that contain important information about the investment and
          the issuers, including risks. Investors should carefully read the
          offering documents. Investors should conduct their own due diligence
          and are encouraged to consult with their tax, legal and financial
          advisors. Investments in private companies are particularly risky and
          may result in total loss of invested capital. Past performance of a
          security or a company does not guarantee future results or returns.
          Only investors who understand the risks of early stage investment may
          invest.
        </p>
        <p>
          To help the government fight the funding of terrorism and money
          laundering activities, Federal law requires all financial institutions
          to obtain, verify, and record information that identifies each person
          who opens an account. Therefore, when you use the Services we will ask
          for your name, address, date of birth, and other information that will
          allow us to identify you. We may also ask to see your driver's
          license, passport or other identifying documents. Assetbase and its
          affiliates are not and do not operate or act as a bank. Digital
          (crypto) assets and investment products are not insured by the FDIC,
          may lose value, and are not deposits or other obligations of Assetbase
          and are not guaranteed by Assetbase. Terms and conditions apply.
        </p>
      </div>

      <Separator className="bg-primary/20" />

      <div className="flex items-center justify-center md:justify-end py-6 w-full">
        <p className="text-muted-foreground text-sm md:pr-18">
          © Copyright {new Date().getFullYear()} Assetbase.africa. All rights
          reserved
        </p>
      </div>
    </div>
  );
}
