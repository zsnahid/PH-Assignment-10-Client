import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input, Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);
  const cancelToken = useRef(null);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced search with axios
  useEffect(() => {
    // Cancel previous request
    if (cancelToken.current) {
      cancelToken.current.cancel("Operation canceled due to new request.");
    }

    // Clear results if search query is empty
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      setError(null);

      // Create new cancel token
      cancelToken.current = axios.CancelToken.source();

      try {
        const response = await axios.get(
          `https://ph-assignment-10-server-rosy.vercel.app/equipments/search`,
          {
            params: { q: searchQuery },
            cancelToken: cancelToken.current.token,
          }
        );

        setSearchResults(response.data.data);
        setShowResults(true);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Search failed:", error);
          setError("Failed to perform search");
        }
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      if (cancelToken.current) {
        cancelToken.current.cancel("Operation canceled due to cleanup.");
      }
    };
  }, [searchQuery]);

  return (
    <div className="relative w-full max-w-[400px]" ref={searchRef}>
      <Input
        type="search"
        placeholder="Search equipments..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="!border-gray-700 focus:!border-gray-600 bg-gray-800/50 text-gray-200 placeholder-gray-400"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{
          className: "min-w-[100px]",
        }}
        icon={
          isSearching ? (
            <Spinner className="h-4 w-4 text-gray-400" />
          ) : (
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          )
        }
      />

      {showResults && (searchResults.length > 0 || error) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-md shadow-lg z-50">
          {error ? (
            <div className="p-3 text-red-400 text-sm">{error}</div>
          ) : (
            <ul className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
              {searchResults.map((result) => (
                <li key={result._id}>
                  <Link
                    to={`/dashboard/update/${result._id}`}
                    className="flex items-center gap-3 p-2 hover:bg-red-900/20 transition-colors"
                    onClick={() => setShowResults(false)}
                  >
                    <img
                      src={result.image}
                      alt={result.item}
                      className="h-10 w-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-200 truncate">{result.item}</p>
                      <p className="text-gray-400 text-sm">
                        ${result.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
