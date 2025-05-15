import Brands from "../components/Brands";
import { CarouselWithContent } from "../components/Carousel";
import Categories from "../components/Categories";
import CategoryCards from "../components/CategoryCards";
import Deal from "../components/Deal";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="min-h-[50vh]">
      <CarouselWithContent />
      <CategoryCards />
      <Products />
      <Categories />
      <Deal />
      <Brands />
    </div>
  );
}
