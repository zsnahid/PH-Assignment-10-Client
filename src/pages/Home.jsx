import Brands from "../components/Brands";
import { CarouselWithContent } from "../components/Carousel";
import CategoryCards from "../components/CategoryCards";
import FeaturedItems from "../components/FeaturedItems";
import SecondHero from "../components/SecondHero";

export default function Home() {
  return (
    <div className="min-h-[50vh]">
      <CarouselWithContent />
      <CategoryCards />
      <SecondHero />
      <FeaturedItems />
      <Brands />
    </div>
  );
}
