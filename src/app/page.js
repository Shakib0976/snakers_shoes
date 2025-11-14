import DiscountBanner from "@/components/Home/DiscountBanner";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import HeroSection from "@/components/Home/HeroSection";

const page = () => {
  return (
    <div className="bg-dark">
       <HeroSection></HeroSection>
       <FeaturedCollections></FeaturedCollections>
       <DiscountBanner></DiscountBanner>
    </div>
  );
};

export default page;