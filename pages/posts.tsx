import {useEffect, useState} from "react";
import Head from "next/head";
import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import {NextPageContext} from "next";
import {MyPost} from "../interfaces/post";

interface PostsPageProps {
  posts: MyPost[],
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    !serverPosts && load();
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>Posts Page | Next practice</title>
      </Head>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {

  if (!req) return { posts: null };

  const response = await fetch('http://localhost:4200/posts');
  const posts: MyPost[] = await response.json();

  return { posts };
}
