/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="text-3xl grid grid-cols-4 place-items-center gap-5 uppercase text-center">
      <div className="h-full w-full">
        <div className="py-3 border border-blue-gray-100 flex justify-center items-center">
          <Typography variant="h2">{days}</Typography>
        </div>
        <Typography className="mt-3">Days</Typography>
      </div>
      <div className="h-full w-full">
        <div className="py-3 border border-blue-gray-100 flex justify-center items-center">
          <Typography variant="h2">{hours}</Typography>
        </div>
        <Typography className="mt-3">Hours</Typography>
      </div>
      <div className="h-full w-full">
        <div className="py-3 border border-blue-gray-100 flex justify-center items-center">
          <Typography variant="h2">{minutes}</Typography>
        </div>
        <Typography className="mt-3">Minutes</Typography>
      </div>
      <div className="h-full w-full">
        <div className="py-3 border border-blue-gray-100 flex justify-center items-center">
          <Typography variant="h2">{seconds}</Typography>
        </div>
        <Typography className="mt-3">Seconds</Typography>
      </div>
    </div>
  );
}
