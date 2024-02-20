import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostCard from "@/components/posts/post-card";
import {
  getPostsSearchResults,
  getProjectsSearchResults,
} from "@/lib/wordpress";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const postsSearchData: Promise<Post[]> = getPostsSearchResults(searchTerm);
  const projectsSearchData: Promise<Post[]> =
    getProjectsSearchResults(searchTerm);

  const [posts, projects] = await Promise.all([
    postsSearchData,
    projectsSearchData,
  ]);
  const data = [...posts, ...projects];

  const content =
    data.length > 0 ? (
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    ) : (
      <h2>{`${searchTerm} not found`}</h2>
    );
  return (
    <>
      <Header />
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <section className="bg-slate-50 py-24 dark:bg-slate-900">
          <div className="container">{content}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
