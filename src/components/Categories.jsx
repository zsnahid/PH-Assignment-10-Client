import { Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import gymAnimation from "/src/assets/gym.json";
import shoeAnimation from "/src/assets/shoe.json";
import sportsAnimation from "/src/assets/sports.json";
import wearAnimation from "/src/assets/wear.json";

export default function Categories() {
  return (
    <div className="mt-20 max-w-screen-2xl w-11/12 mx-auto">
      <Typography
        variant="h3"
        className="pl-3 mb-10 border-l-4 border-l-red-900"
      >
        Categories
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center flex-wrap gap-x-12 gap-y-16">
        <div>
          <Lottie
            animationData={sportsAnimation}
            className="size-72 bg-red-900"
          ></Lottie>
          <Typography
            variant="h4"
            className="text-center mt-3"
          >
            Sports
          </Typography>
        </div>
        <div>
          <Lottie
            animationData={shoeAnimation}
            className="size-72 bg-red-900"
          ></Lottie>
          <Typography
            variant="h4"
            className="text-center mt-3 lg:w-auto lg:h-auto"
          >
            Shoes
          </Typography>
        </div>
        <div>
          <Lottie
            animationData={wearAnimation}
            className="size-72 bg-red-900"
          ></Lottie>
          <Typography
            variant="h4"
            className="text-center mt-3"
          >
            Sports Wear
          </Typography>
        </div>
        <div>
          <Lottie
            animationData={gymAnimation}
            className="size-72 bg-red-900"
          ></Lottie>
          <Typography
            variant="h4"
            className="text-center mt-3"
          >
            Gym Equipments
          </Typography>
        </div>
      </div>
    </div>
  );
}
