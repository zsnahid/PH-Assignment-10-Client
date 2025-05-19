import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://ph-assignment-10-server-rosy.vercel.app/blog-posts"
        );
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Typography color="gray">Loading blog posts...</Typography>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 dark:bg-gray-900">
      <Typography variant="h2" className="mb-8 dark:text-gray-100">
        Sports & Fitness Blog
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post._id}
            className="overflow-hidden flex flex-col dark:bg-black"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Chip
                  value={post.category}
                  size="sm"
                  variant="ghost"
                  color="red"
                  className="rounded-full"
                />
                <Typography className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
              </div>

              <Typography
                variant="h5"
                className="mb-2 line-clamp-2 dark:text-gray-200"
              >
                {post.title}
              </Typography>

              <Typography
                color="gray"
                className="flex-grow mb-4 line-clamp-2 dark:text-gray-500"
              >
                {post.summary}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="text-sm  text-gray-600 dark:text-gray-400">
                  By {post.author}
                </Typography>
                <Link to={`/blog/${post._id}`}>
                  <Button
                    size="sm"
                    variant="outlined"
                    className="dark:text-white dark:border-white"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
