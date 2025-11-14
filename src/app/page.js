import FeaturedCollections from "@/components/Home/FeaturedCollections";
import HeroSection from "@/components/Home/HeroSection";

const page = () => {
  return (
    <div className="bg-dark">
       <HeroSection></HeroSection>
       <FeaturedCollections></FeaturedCollections>
    </div>
  );
};

export default page;