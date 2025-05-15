import { Button } from "@material-tailwind/react";
import image1 from "/src/assets/second_hero/image1.jpeg";
import image2 from "/src/assets/second_hero/image2.png";
import image3 from "/src/assets/second_hero/image3.png";

const SecondHero = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Product 1 */}
          <div className="relative h-screen md:h-[600px] overflow-hidden group">
            <img
              src={image1}
              alt="Gym Shorts Model 1"
              className="object-cover w-full h-full transition-transform duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity"></div>
          </div>

          {/* Center Product with Text Overlay */}
          <div className="relative h-screen md:h-[600px] overflow-hidden">
            <img
              src={image2}
              alt="Gym Shorts Model 2"
              className="object-cover w-full h-full"
            />
            {/* Dark overlay - sits below the text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  NEW SEASON = <br />
                  NEW SHORTS
                </h2>
                <p className="text-lg mb-6">
                  Let's be honest, it's always shorts season round here.
                </p>
                <Button
                  color="white"
                  ripple={false}
                  className="rounded-full cursor-default"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative h-screen md:h-[600px] overflow-hidden group">
            <img
              src={image3}
              alt="Gym Shorts Model 3"
              className="object-cover w-full h-full transition-transform duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
