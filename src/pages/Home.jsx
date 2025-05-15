import { CarouselWithContent } from "../components/Carousel";
import CategoryCards from "../components/CategoryCards";
import FeaturedItems from "../components/FeaturedItems";
import OfferSection from "../components/OfferSection";
import ReviewCarousel from "../components/ReviewCarousel";
import SecondHero from "../components/SecondHero";

export default function Home() {
  return (
    <div className="min-h-[50vh]">
      <CarouselWithContent />
      <CategoryCards />
      <SecondHero />
      <FeaturedItems />
      <OfferSection />
      <ReviewCarousel />
    </div>
  );
}
