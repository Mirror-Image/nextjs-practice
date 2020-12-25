import NextNProgress from "nextjs-progressbar";
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
      />
      {/*<style jsx global>{`*/}
      {/*  body {*/}
      {/*    font-family: 'Roboto', sans-serif;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  );
}
