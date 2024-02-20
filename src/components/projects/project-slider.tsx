"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import ProjectCard from "./project-card";
import { useState, useEffect, useRef, useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { Skeleton } from "../ui/skeleton";
import { WP_REST_BASE_URL } from "@/config/site";

type ProjectSliderProps = {
  limit: number;
  swiperParams: SwiperOptions;
};

export default function ProjectSlider({
  limit,
  swiperParams,
}: ProjectSliderProps) {
  const sliderRef = useRef<any>(null);
  const [totalItems, setTotalItems] = useState<number | null>(null);

  const { data, isLoading } = useSWRInfinite(
    (index) =>
      totalItems !== null
        ? `${WP_REST_BASE_URL}/projects?_embed&per_page=${limit}`
        : null,
    (url: string) => fetcher(url),
  );

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
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  const projects = data ? [].concat(...data) : [];

  const content = (
    <>
      <div className="">
        {isLoading && (
          <div className="grid grid-cols-2 gap-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-[45.6rem] w-full" />
            ))}
          </div>
        )}

        <div className="projects-slider relative">
          <Swiper {...swiperParams} ref={sliderRef}>
            {projects.map((project: Post) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );

  return content;
}
