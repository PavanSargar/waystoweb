import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";
import Link from "next/link";
import AllPosts from "@/components/AllPosts";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  // console.log(posts);
  // const recentPosts = posts.slice(1);
  return (
    <div className="containe mx-auto lg:px-48 sm:px-24 px-12">
      <main>
        <div className="space-y-4"></div>

        <div className="h-12"></div>

        <PostHero />

        <div className="h-16"></div>

        <p className="text-3xl mb-6">Recent Posts</p>

        <AllPosts posts={posts} />
      </main>
    </div>
  );
}
