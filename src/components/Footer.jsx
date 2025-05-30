import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const LINKS = [
  {
    title: "Quick Links",
    items: [
      { name: "Home", path: "/" },
      { name: "All Products", path: "/products" },
      { name: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Categories",
    items: [
      { name: "Sports Equipment", path: "/category/sports-equipment" },
      { name: "Fitness Gear", path: "/category/fitness-gear" },
      { name: "Athletic Wear", path: "/category/athletic-wear" },
    ],
  },
  {
    title: "Customer Service",
    items: [
      { name: "Add Equipment", path: "/dashboard/add-equipment" },
      { name: "My Equipment", path: "/dashboard/all-equipments" },
      { name: "Login", path: "/login" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full bg-gray-900 dark:bg-gray-950 px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/">
              <Typography variant="h4" className="text-gray-50">
                <span className="text-red-500">Sportify</span>
              </Typography>
            </Link>
            <Typography
              variant="small"
              className="mt-4 text-gray-400 leading-relaxed"
            >
              Your one-stop destination for premium sports equipment and fitness
              gear. Quality products for athletes of all levels.
            </Typography>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-3">
                <Typography
                  variant="small"
                  className="mb-4 font-medium text-gray-200 uppercase tracking-wider"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <Typography className="py-1 font-normal text-gray-400 hover:text-red-400 transition-colors inline-block">
                        {link.name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-4 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography
            variant="small"
            className="text-center font-normal text-gray-400"
          >
            &copy; {currentYear} Sportify. All Rights Reserved.
          </Typography>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
