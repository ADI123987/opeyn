"use client";
import { DiscussionEmbed } from "disqus-react";

type BlogCommentsProps = {
  post: Post;
};

const BlogComments = ({ post }: BlogCommentsProps) => {
  const pageURL = typeof window !== "undefined" ? window.location.href : "";

  return (
    <DiscussionEmbed
      shortname="deothemes"
      config={{
        url: pageURL,
        identifier: post.id.toString(),
        title: post.title.rendered,
      }}
    />
  );
};

export default BlogComments;
