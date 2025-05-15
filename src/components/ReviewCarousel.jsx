import {
  Carousel,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
          "https://ph-assignment-10-server-rosy.vercel.app/reviews"
        );
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Typography color="gray">Loading reviews...</Typography>
      </div>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 max-w-screen-2xl w-11/12 mx-auto mb-20">
      <Typography
        variant="h3"
        className="pl-3 mb-10 border-l-4 border-red-600 dark:border-red-500 text-gray-900 dark:text-gray-100"
      >
        Customer Reviews
      </Typography>

      <Carousel
        className="rounded-xl"
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-red-500" : "w-4 bg-red-500/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="red"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="red"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {reviews.map((item, index) => (
          <div key={index} className="relative h-[400px] w-full">
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/90">
              <div className="w-3/4 text-center md:w-2/4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-4 text-xl md:text-3xl lg:text-4xl"
                >
                  {item.review.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 opacity-80"
                >
                  {item.review.comment}
                </Typography>
                <Rating
                  value={item.review.rating}
                  readonly
                  className="justify-center mb-4"
                />
                <div className="flex items-center justify-center gap-2 text-white">
                  <Typography variant="small" className="font-medium">
                    {item.review.user}
                  </Typography>
                  <Typography variant="small" className="opacity-50">
                    |
                  </Typography>
                  <Typography variant="small" className="opacity-50">
                    {new Date(item.review.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="white"
                  className="opacity-50 mt-2"
                >
                  {item.product} - {item.brand}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
