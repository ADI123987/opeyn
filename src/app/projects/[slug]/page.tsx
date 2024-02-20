import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPosts, getPost } from "@/lib/wordpress";
import Image from "next/image";
import { Metadata } from "next";
import SectionQuotation from "@/components/sections/section-quotation";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const post = await getPost(slug, "projects");

  return {
    title: post?.title.rendered,
    description: post?.yoast_head_json?.description,
  };
}

export default async function ProjectPage({ params: { slug } }: Params) {
  const post = await getPost(slug, "projects");
  if (!post) return "No content found";

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImageSizes = featuredMedia?.["media_details"]?.sizes;

  const content = (
    <>
      <Header />
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="relative flex h-96 flex-col items-center justify-center px-4 py-16 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 lg:h-[30rem]">
          {featuredMedia && featuredImageSizes && (
            <Image
              src={featuredImageSizes.full["source_url"]}
              alt={featuredMedia.alt_text}
              fill
              className="mb-6 object-cover"
            />
          )}
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1
              className="mb-5 text-white lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
          </div>
        </div>

        {(post?.acf?.project_feature_1_number ||
          post?.acf?.project_feature_1_text ||
          post?.acf?.project_feature_2_number ||
          post?.acf?.project_feature_2_text ||
          post?.acf?.project_feature_3_number ||
          post?.acf?.project_feature_3_text) && (
          <div className="relative z-[1] -m-20 mx-auto mb-5 flex max-w-[50rem] flex-wrap items-center space-y-5 lg:flex-nowrap lg:space-x-10 lg:space-y-0">
            {post?.acf?.project_feature_1_number ||
            post?.acf?.project_feature_1_text ? (
              <div className="w-full rounded bg-white p-12 shadow-sm dark:bg-slate-800 dark:shadow-slate-950/20 lg:flex-1">
                {post?.acf?.project_feature_1_number && (
                  <span className="mb-4 block text-2xl font-bold text-green lg:text-[2.25rem]">
                    {post?.acf?.project_feature_1_number}
                  </span>
                )}
                {post?.acf?.project_feature_1_text && (
                  <span className="text-[1.0625rem] font-bold text-foreground dark:text-slate-400">
                    {post?.acf?.project_feature_1_text}
                  </span>
                )}
              </div>
            ) : null}

            {post?.acf?.project_feature_2_number ||
            post?.acf?.project_feature_2_text ? (
              <div className="w-full rounded bg-white p-12 shadow-sm dark:bg-slate-800 dark:shadow-slate-950/20 lg:flex-1">
                {post?.acf?.project_feature_2_number && (
                  <span className="mb-4 block text-2xl font-bold text-green lg:text-[2.25rem]">
                    {post?.acf?.project_feature_2_number}
                  </span>
                )}
                {post?.acf?.project_feature_2_text && (
                  <span className="text-[1.0625rem] font-bold text-foreground dark:text-slate-400">
                    {post?.acf?.project_feature_2_text}
                  </span>
                )}
              </div>
            ) : null}

            {post?.acf?.project_feature_3_number ||
            post?.acf?.project_feature_3_text ? (
              <div className="w-full rounded bg-white p-12 shadow-sm dark:bg-slate-800 dark:shadow-slate-950/20 lg:flex-1">
                {post?.acf?.project_feature_3_number && (
                  <span className="mb-4 block text-2xl font-bold text-green lg:text-[2.25rem]">
                    {post?.acf?.project_feature_3_number}
                  </span>
                )}
                {post?.acf?.project_feature_3_text && (
                  <span className="text-[1.0625rem] font-bold text-foreground dark:text-slate-400">
                    {post?.acf?.project_feature_3_text}
                  </span>
                )}
              </div>
            ) : null}
          </div>
        )}

        <section className="pb-24 pt-16">
          <div className="container">
            <article
              className="prose prose-lg mx-auto max-w-[50rem] dark:prose-invert prose-headings:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></article>
          </div>
        </section>
        <SectionQuotation />
      </main>
      <Footer />
    </>
  );

  return content;
}

export async function generateStaticParams() {
  const postsData: Promise<Post[]> = getPosts("100", undefined, "projects");
  const posts = await postsData;

  return posts.map((post) => ({ slug: post.slug }));
}
