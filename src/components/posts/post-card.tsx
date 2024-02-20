import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { getDateDay, getDateMonth } from "@/lib/utils";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImageSizes = featuredMedia?.["media_details"]?.sizes;
  const categories = post._embedded?.["wp:term"]?.[0];

  return (
    <article
      className="hover-shadow overflow-hidden rounded-lg bg-white dark:bg-slate-850"
      itemType="https://schema.org/Article"
    >
      <figure className="after: relative overflow-hidden">
        <Link href={`/posts/${post.slug}`} className="group">
          {featuredMedia && featuredImageSizes && (
            <Image
              src={featuredImageSizes.medium_large["source_url"]}
              alt={featuredMedia.alt_text}
              width={featuredImageSizes.medium_large.width}
              height={featuredImageSizes.medium_large.height}
              className="transition-transform duration-1600 will-change-transform group-hover:scale-105"
            />
          )}
          {post.modified && (
            <div className="pointer-events-none absolute left-4 top-4 rounded bg-white px-4 py-3 text-center font-medium leading-none text-foreground">
              <span className="block text-md">{getDateDay(post.modified)}</span>
              <span className="text-[0.625rem] uppercase tracking-wider">
                {getDateMonth(post.modified)}
              </span>
            </div>
          )}
        </Link>
      </figure>
      <div className="rounded-b-lg p-10">
        <h2 className="mb-4 text-xl font-bold">
          <Link
            className="hover:text-primary"
            href={`/projects/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
        </h2>
        {categories && categories[0].id !== 1 && (
          <>
            <div className="mb-5 flex">
              <BookmarkIcon width={15} className="mr-1 stroke-primary" />
              <div className="space-x-2 text-xs font-medium text-foreground dark:text-white">
                {categories.map((category) => {
                  return category.id !== 1 ? (
                    <span key={category.id}>{category.name}</span>
                  ) : null;
                })}
              </div>
            </div>
          </>
        )}

        {post?.excerpt?.rendered && (
          <div
            dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          ></div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
