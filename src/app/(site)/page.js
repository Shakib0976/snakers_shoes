import DiscountBanner from "@/components/Home/DiscountBanner";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import HeroSection from "@/components/Home/HeroSection";
import HowtoBooking from "@/components/Home/HowToBooking";
import SneakerMosaicGallery from "@/components/Home/ModernGellary";
import ReviewsGrid from "@/components/Home/ReviewGrid";
import SnakersVideo from "@/components/Home/SnakersVideo";
import TrendingSneakers from "@/components/Home/TrendingSneakers";


const page = () => {
    return (
        <div className="bg-secondary ">
            <HeroSection></HeroSection>
            <SneakerMosaicGallery></SneakerMosaicGallery>
            <DiscountBanner></DiscountBanner>
            <FeaturedCollections></FeaturedCollections>
            <TrendingSneakers></TrendingSneakers>
            <SnakersVideo></SnakersVideo>
            <HowtoBooking></HowtoBooking>
            <ReviewsGrid></ReviewsGrid>
        </div>
    );
};

export default page;