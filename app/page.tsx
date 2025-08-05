import AssetCategories from "@/components/home/asset-categories";
import AssetListing from "@/components/home/asset-listing";
import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
export default function Home() {
  return (
    <div className="font-sans bg-black text-white">
      <main className="min-h-screen max-w-7xl mx-auto">
        <Hero />
        <Info />
        <AssetListing />
        <Features />
        <AssetCategories />
        <CTA />
      </main>
    </div>
  );
}
