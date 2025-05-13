import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Timer from "./Timer";
import shoe from "/src/assets/shoe.png";

export default function Deal() {
  const [offerItem, setOfferItem] = useState(null);
  const [itemLoading, setItemLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://ph-assignment-10-server-rosy.vercel.app/equipments/67716c7b463d615b7fb20ebc"
    )
      .then((res) => res.json())
      .then((data) => {
        setOfferItem(data);
        setItemLoading(false);
      });
  }, []);

  if (itemLoading) {
    return (
      <div className="mt-20 h-96 max-w-screen-2xl w-11/12 mx-auto">
        <Typography
          variant="h3"
          className="mb-10 pl-3 border-l-4 border-l-red-900 uppercase"
        >
          Deal of The Day
        </Typography>
        <Spinner className="h-12 w-12 mx-auto text-red-900" />
      </div>
    );
  }

  // console.log(offerItem);

  const { image, item, category, price } = offerItem;

  const time = new Date();
  time.setSeconds(time.getSeconds() + 172800); // 2 days timer

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto mt-20">
      <Typography
        variant="h3"
        className="mb-10 pl-3 border-l-4 border-l-red-900 uppercase"
      >
        Deal of The Day
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <Slide
              direction="left"
              delay={200}
              duration={1000}
              fraction={0.5}
              triggerOnce
            >
              <img
                src={image}
                className="h-96 w-auto object-cover"
              />
            </Slide>
            <div className="flex flex-col justify-between gap-5">
              <div>
                <Typography
                  variant="h6"
                  className="tracking-widest"
                >
                  {category}
                </Typography>
                <Typography
                  variant="h3"
                  className="my-3"
                >
                  {item}
                </Typography>
                <div className="flex items-center gap-3">
                  <Typography
                    variant="h5"
                    className="text-red-900"
                  >
                    {"৳"}
                    {price}
                  </Typography>
                  <Typography
                    variant="small"
                    className="line-through"
                  >
                    {"৳"}
                    17000
                  </Typography>
                </div>
              </div>
              {/* Timer */}
              <div>
                <Typography className="mb-3">Sale ends in:</Typography>
                <Timer expiryTimestamp={time} />
              </div>
              <div>
                <Button
                  variant="filled"
                  fullWidth
                  className="rounded-none bg-red-900"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* EID PROMO */}
        <div className="lg:col-span-4 h-96 bg-gray-200 relative overflow-hidden">
          <div className="p-10">
            <Typography
              variant="h6"
              className="tracking-widest text-red-900"
            >
              PROMO
            </Typography>
            <Typography
              variant="h3"
              className="my-5 dark:text-black"
            >
              EID DISCOUNT
            </Typography>
            <Typography className="tracking-widest dark:text-black">
              Get 15% off on running shoes
            </Typography>
            <Typography className="mt-5 font-semibold flex items-center gap-1 dark:text-black">
              Shop Now
              <span>
                <ArrowRightIcon className="size-5 text-red-900" />
              </span>
            </Typography>
          </div>
          <img
            src={shoe}
            className="lg:-rotate-45 rotate-45 transform -scale-x-100 lg:scale-x-100 absolute lg:-bottom-[40%] -bottom-[50%] lg:-left-[30%] right-0 translate-x-[30%] lg:translate-x-0"
          />
        </div>
      </div>
    </div>
  );
}
