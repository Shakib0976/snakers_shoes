import DiscountBanner from "@/components/Home/DiscountBanner";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import HeroSection from "@/components/Home/HeroSection";
import TrendingSneakers from "@/components/Home/TrendingSneakers";

const page = () => {
  return (
    <div className="bg-secondary ">
       <HeroSection></HeroSection>
       <FeaturedCollections></FeaturedCollections>
       <DiscountBanner></DiscountBanner>
       <TrendingSneakers></TrendingSneakers>
    </div>
  );
};

export default page;