/* eslint-disable react/no-unescaped-entities */
import {
  GlobeAsiaAustraliaIcon,
  LockClosedIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Brands from "../components/Brands";
import { CarouselWithContent } from "../components/Carousel";
import Categories from "../components/Categories";
import Deal from "../components/Deal";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="min-h-[50vh]">
      <CarouselWithContent />
      <div className="max-w-screen-2xl w-11/12 mx-auto grid lg:grid-cols-3 gap-5 mt-20">
        <div className="flex items-center gap-3 ">
          <div className="h-24 aspect-square bg-red-100 place-content-center place-items-center">
            <GlobeAsiaAustraliaIcon className="size-10 stroke-1 text-red-900" />
          </div>
          <div>
            <Typography
              variant="h5"
              className="mb-3"
            >
              Worldwide Shipping
            </Typography>
            <Typography variant="paragraph">
              Doesn't matter wherever you are, <br /> you will always get your
              order
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="h-24 aspect-square bg-red-100 place-content-center place-items-center">
            <TruckIcon className="size-10 stroke-1 text-red-900" />
          </div>
          <div>
            <Typography variant="h5">Free Delivery</Typography>
            <Typography variant="paragraph">
              No more additional fees other than <br /> what you pay for what
              you want
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="h-24 aspect-square bg-red-100 place-content-center place-items-center">
            <LockClosedIcon className="size-10 stroke-1 text-red-900" />
          </div>
          <div>
            <Typography variant="h5">Secure Transaction</Typography>
            <Typography variant="paragraph">
              We are a verified marketplace <br /> since 2018. Safety
              guaranteed.
            </Typography>
          </div>
        </div>
      </div>

      <Products />
      <Categories />
      <Deal />
      <Brands />
    </div>
  );
}
