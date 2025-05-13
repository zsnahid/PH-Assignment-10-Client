import { Typography } from "@material-tailwind/react";
import logo1 from "/src/assets/logo1.webp";
import logo2 from "/src/assets/logo2.webp";
import logo3 from "/src/assets/logo3.webp";
import logo4 from "/src/assets/logo4.png";

export default function Brands() {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-20">
      <Typography
        variant="h5"
        className="text-center uppercase text-red-900 tracking-widest"
      >
        Brands
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
      </div>
    </div>
  );
}
