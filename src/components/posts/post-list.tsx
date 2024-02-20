"use client";

import PostCard from "@/components/posts/post-card";
import { useState, useEffect, useRef, useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { WP_REST_BASE_URL } from "@/config/site";
import { cn } from "@/lib/utils";

type PostListProps = {
  limit: number;
  showPagination: boolean;
  grid?: string;
};

export default function PostList({
  limit,
  grid,
  showPagination,
}: PostListProps) {
  const [_, setShowLoadMore] = useState(true);
  const [totalItems, setTotalItems] = useState<number | null>(null);

  const { data, size, setSize, isLoading } = useSWRInfinite(
    (index) =>
      totalItems !== null
        ? `${WP_REST_BASE_URL}/posts?_embed&per_page=${limit}&page=${index + 1}`
        : null,
    (url: string) => fetcher(url),
  );

  const getTotalItems = useCallback(async () => {
    try {
      const res = await fetch(`${WP_REST_BASE_URL}/posts?per_page=${limit}`);
      const total = Number(res.headers.get("X-WP-Total"));
      setTotalItems(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [limit]);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

  const sizeRef = useRef(size);

  async function fetcher(url: string) {
    try {
      const res = await fetch(url);

      if (res.status === 400) {
        setShowLoadMore(false);
        return;
      }

      if (totalItems !== null) {
        if (sizeRef.current >= totalItems) {
          setShowLoadMore(false);
        }
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  const posts = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachedEnd = posts.length === totalItems;

  const content = (
    <>
      <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-3", grid)}>
        {isLoading &&
          Array.from({ length: limit }).map((_, i) => (
            <Skeleton key={i} className="h-[33rem] w-full" />
          ))}

        {posts.map((post: Post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
      {posts.length && !isReachedEnd && showPagination ? (
        <div className="mt-10 text-center">
          <Button
            size={"lg"}
            disabled={isLoadingMore}
            onClick={() => {
              setSize((prevSize) => {
                const newSize = prevSize + 1;
                sizeRef.current = newSize;
                return newSize;
              });
            }}
          >
            {isLoadingMore ? "Loading..." : "Load more"}
          </Button>
        </div>
      ) : null}
    </>
  );

  return content;
}
