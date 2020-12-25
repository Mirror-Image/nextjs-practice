import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Next Practice</title>
        <meta name="keywords" content="next,javascript,nextjs,react"/>
        <meta name="description" content="A Next.js practice page"/>
        <meta charSet="utf-8"/>
      </Head>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
        }
        
        nav a {
          color: white;
          text-decoration: none;
        }
        
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
