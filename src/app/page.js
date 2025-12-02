import DiscountBanner from "@/components/Home/DiscountBanner";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import HeroSection from "@/components/Home/HeroSection";
import HowtoBooking from "@/components/Home/HowToBooking";
import TrendingSneakers from "@/components/Home/TrendingSneakers";

const page = () => {
  return (
    <div className="bg-secondary ">
       <HeroSection></HeroSection>
       <FeaturedCollections></FeaturedCollections>
       <DiscountBanner></DiscountBanner>
       <TrendingSneakers></TrendingSneakers>
       <HowtoBooking></HowtoBooking>
    </div>
  );
};

export default page;