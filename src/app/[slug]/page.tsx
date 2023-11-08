import DateFormatter from "@/components/DateFormatter";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import PostContainer from "@/components/PostContainer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "coverImage",
    "excerpt",
  ]);
  return {
    title: post.title,
    description: post?.excerpt ?? "",
    openGraph: {
      title: post.title,
      images: {
        url: post.coverImage,
        alt: post.title,
      },
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "date",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className={`${markdownStyles.container}`}>
      <main className="">
        <div className="w-full h-auto text-white">
          <h1 className="text-4xl text-black font-bold  ">{post.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500">{post.author}</p>
            <p className="text-black">|</p>
            <DateFormatter dateString={post.date} />
          </div>

          <div className={markdownStyles["markdown"]}>
            <PostContainer content={content} />
          </div>
        </div>
      </main>
    </div>
  );
}
