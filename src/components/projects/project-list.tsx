"use client";

import ProjectCard from "./project-card";
import { useState, useEffect, useRef, useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { WP_REST_BASE_URL } from "@/config/site";
import { cn } from "@/lib/utils";

type ProjectListProps = {
  limit: number;
  showPagination: boolean;
  grid?: string;
};

export default function ProjectList({
  limit,
  grid,
  showPagination,
}: ProjectListProps) {
  const [_, setShowLoadMore] = useState(true);
  const [totalItems, setTotalItems] = useState<number | null>(null);

  const { data, size, setSize, isLoading } = useSWRInfinite(
    (index) =>
      totalItems !== null
        ? `${WP_REST_BASE_URL}/projects?_embed&per_page=${limit}&page=${
            index + 1
          }`
        : null,
    (url: string) => fetcher(url),
  );

  const sizeRef = useRef(size);

  const getTotalItems = useCallback(async () => {
    try {
      const res = await fetch(`${WP_REST_BASE_URL}/projects?per_page=${limit}`);
      const total = Number(res.headers.get("X-WP-Total"));
      setTotalItems(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [limit]);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

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

  const projects = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachedEnd = projects.length === totalItems;

  const content = (
    <>
      <div
        className={cn(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          grid,
        )}
      >
        {isLoading &&
          Array.from({ length: limit }).map((_, i) => (
            <Skeleton key={i} className="h-[45.6rem] w-full" />
          ))}

        {projects.map((project: Post) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
      {projects.length && !isReachedEnd && showPagination ? (
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
