"use client";
import { motion } from "framer-motion";
import PostList from "@/components/posts/post-list";
import SectionTitle from "./section-title";

const SectionLatestNews = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <SectionTitle
            subtitle="Here are the best features that makes Opeyn the most powerful, fast and
        user-friendly platform."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
            Latest News
          </SectionTitle>
          <PostList limit={3} showPagination={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionLatestNews;
