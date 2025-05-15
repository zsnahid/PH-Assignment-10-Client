import { Button, Chip, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://ph-assignment-10-server-rosy.vercel.app/blog-posts/${id}`
        );
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Typography color="gray">Loading blog post...</Typography>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <Typography variant="h4" color="blue-gray">
          Blog Post Not Found
        </Typography>
        <Link to="/blog">
          <Button color="red">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-16">
      <Link to="/blog">
        <Button
          color="red"
          variant="text"
          className="flex items-center gap-2 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Blog
        </Button>
      </Link>

      <div className="mb-8">
        <div className="h-[400px] w-full overflow-hidden rounded-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Chip
          value={post.category}
          color="red"
          variant="ghost"
          className="rounded-full"
        />
        <Typography color="gray">
          {new Date(post.publishDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </div>

      <Typography variant="h2" color="blue-gray" className="mb-4">
        {post.title}
      </Typography>

      <Typography color="gray" className="mb-6 italic">
        By {post.author}
      </Typography>

      <Typography variant="lead" className="mb-6">
        {post.summary}
      </Typography>

      <Typography className="whitespace-pre-line">{post.content}</Typography>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <Chip
            key={index}
            value={`#${tag}`}
            variant="outlined"
            color="blue-gray"
          />
        ))}
      </div>
    </div>
  );
}
