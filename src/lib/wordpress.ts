import { WP_REST_BASE_URL } from "@/config/site";

export async function getPosts(limit?: string, page?: string, type?: string) {
  const queryParams = new URLSearchParams({
    _embed: "1",
  });

  if (limit) {
    queryParams.append("per_page", limit);
  }

  if (page) {
    queryParams.append("page", page);
  }

  const res = await fetch(`${WP_REST_BASE_URL}/${type}?${queryParams}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPost(slug: string, type: string) {
  const postsData: Promise<Post[]> = getPosts("100", undefined, type);
  const posts = await postsData;
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getPostsSearchResults(searchTerm: string) {
  const res = await fetch(
    `${WP_REST_BASE_URL}/posts?search=${searchTerm}&_embed`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getProjectsSearchResults(searchTerm: string) {
  const res = await fetch(
    `${WP_REST_BASE_URL}/projects?search=${searchTerm}&_embed`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
