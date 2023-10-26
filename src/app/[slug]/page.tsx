import DateFormatter from "@/components/DateFormatter";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

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
  const post = getPostBySlug(params.slug, ["title", "author", "date", "content"]);

  const content = await markdownToHtml(post.content || "");


  return (
    <div className={`${markdownStyles.container}`}>
      <main className="">
        <div className="w-full h-auto text-white">
          <p className="text-2xl text-black font-bold ">{post.title}</p>
          <p className="text-gray-500">{post.author}</p>
          <DateFormatter dateString={post.date} />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
