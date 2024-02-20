import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import PostList from "@/components/posts/post-list";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Blog posts",
  description: "Blog posts page",
};

export default function BlogPostsPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle>Blog</SectionPageTitle>
        <section className="border-b py-24">
          <div className="container">
            <PostList limit={6} showPagination={true} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
