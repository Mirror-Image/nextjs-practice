import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {MainLayout} from "../../components/MainLayout";
import {MyPost, PostNextPageContext} from "../../interfaces/post";

interface PostPageProps {
  post: MyPost,
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data);
    }

    !serverPost && load();
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <article>{post.body}</article>
      <hr />
      <Link href={'/posts'}><a>Back to all posts</a></Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) return { post: null };

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: MyPost = await response.json();

  return { post };
}

// export async function getServerSideProps({ query }) {
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//
//   return { props: { post } };
// }
