"use client";
import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PostPreview from "./PostPreview";

interface Props {
  posts: any[];
}

const AllPosts = ({ posts }: Props) => {
  const [sliceStart, setSliceStart] = useState<number>(0);
  const [sliceEnd, setSliceEnd] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = () => {
    setSliceStart(sliceStart + 10);
    setSliceEnd(sliceEnd + 10);
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setSliceStart(sliceStart - 10);
    setSliceEnd(sliceEnd - 10);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
        {posts?.slice(sliceStart, sliceEnd).map((post) => (
          <div key={post.title}>
            <PostPreview post={post} />
          </div>
        ))}
      </div>
      <div className="my-10 mb-16 flex items-center justify-between">
        {sliceStart >= 10 && (
          <button
            className="flex items-center px-4 py-2 border-gray-500 border hover:bg-gray-300"
            onClick={prevPage}
          >
            <FaAngleLeft /> Previous Page
          </button>
        )}
        {sliceEnd < posts.length && (
          <button
            className="flex items-center px-4 py-2 border-gray-500 border hover:bg-gray-300"
            onClick={nextPage}
          >
            Next Page
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
