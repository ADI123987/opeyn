import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPosts, getPost } from "@/lib/wordpress";
import Image from "next/image";
import { Metadata } from "next";
import BlogComments from "@/components/blog-comments";
import { getDate } from "@/lib/utils";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faReddit,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "@/components/social-icon";
import { getBaseUrl } from '@/getBaseUrl.js';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const post = await getPost(slug, "posts");

  return {
    title: post?.title.rendered,
    description: post?.yoast_head_json?.og_description,
  };
}

export default async function PostPage({ params: { slug } }: Params) {
  const post = await getPost(slug, "posts");
  const postURL =
    new URL(getBaseUrl() as string) + `posts/${slug}`;
  if (!post) return "No content found";

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImageSizes = featuredMedia?.["media_details"]?.sizes;
  const categories = post._embedded?.["wp:term"]?.[0]?.[0]?.name;
  const author = post._embedded?.["author"]?.[0];

  const content = (
    <>
      <Header />
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="relative flex flex-col items-center justify-center px-4 py-20 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 sm:h-96 lg:h-[30rem]">
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
            {author && (
              <div className="inline-flex flex-nowrap items-center text-base font-medium text-white lg:text-md">
                <Image
                  src={author.avatar_urls[48]}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="mr-4 rounded-full"
                />
                <span itemProp="author" itemType="https://schema.org/Person">
                  {"by "}
                  {author.name}
                </span>
                <span className="block">
                  <span className="mx-2 inline-block">-</span>
                  {getDate(post.modified)}
                </span>
              </div>
            )}
          </div>
        </div>
        <section className="border-b pb-24 pt-16">
          <div className="container">
            <div className="mx-auto max-w-[50rem]">
              <div className="mb-4 flex items-center">
                <span className="mb-2 mr-3 inline-block text-sm font-medium">
                  Share:
                </span>
                <div className="flex space-x-1">
                  <SocialIcon
                    icon={faXTwitter}
                    url={`https://twitter.com/intent/tweet?url=${postURL}&text=${encodeURI(
                      post.title.rendered,
                    )}`}
                  />
                  <SocialIcon
                    icon={faFacebook}
                    url={`https://www.facebook.com/sharer.php?u=${postURL}`}
                    className="bg-[#324e8c]"
                  />
                  <SocialIcon
                    icon={faLinkedin}
                    url={`https://www.linkedin.com/shareArticle?mini=true&url=${postURL}`}
                    className="bg-[#0a66c2]"
                  />
                  <SocialIcon
                    icon={faReddit}
                    url={`https://www.reddit.com/submit?url=${postURL}`}
                    className="bg-[#ff4500]"
                  />
                  <SocialIcon
                    icon={faWhatsapp}
                    url={`whatsapp://send?text=${postURL}`}
                    className="bg-[#25d366]"
                  />
                  <SocialIcon
                    icon={faEnvelope}
                    url={`mailto:?subject=${post.title.rendered}&body=${postURL}`}
                    className="bg-slate-500"
                  />
                </div>
              </div>
            </div>
            <article
              className="post-content prose prose-lg mx-auto max-w-[50rem] dark:prose-invert prose-headings:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></article>

            <div className="color-scheme-initial mx-auto mt-12 max-w-[50rem]">
              <BlogComments post={post} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

  return content;
}

export async function generateStaticParams() {
  const postsData: Promise<Post[]> = getPosts("100", undefined, "posts");
  const posts = await postsData;

  return posts.map((post: Post) => ({ slug: post.slug }));
}
