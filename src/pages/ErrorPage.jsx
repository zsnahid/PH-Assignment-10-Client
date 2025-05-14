/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import errorImg from "/src/assets/error.png";
export default function ErrorPage() {
  return (
    <div className="h-screen w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <Typography
          variant="h2"
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Oops!
        </Typography>
        <Typography variant="h4" className="text-3xl text-gray-600 mb-6">
          We can't seem to find the page you're looking for.
        </Typography>
        <div>
          <Typography variant="paragraph" className="text-gray-600 mb-4">
            Return home:
          </Typography>
          <ul className="text-red-900 space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={errorImg} />
      </div>
    </div>
  );
}
