"use client";
import React, { useEffect } from "react";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/github-dark.css';


hljs.registerLanguage('javascript', javascript)


type Props = {
  content: string;
};

const PostContainer = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContainer;
