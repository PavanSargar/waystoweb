import { getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  return {
    title: post.title,
    description: post?.excerpt ?? "",
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div
      className={`${markdownStyles.container} container py-12  lg:px-48 sm:px-24 px-12`}
    >
      <main className="">
        <div className="w-full h-auto text-white">
          <p className="text-2xl text-black font-bold ">{post.title}</p>
          <p className="text-gray-500">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
