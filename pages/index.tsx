import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';
import { getAllPostsData, PostData } from 'lib/postsUtils';
import React from 'react';
import { Box } from 'grommet';

export default function Home({ allPostsData, siteConfig }) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>

        {/* <title>{siteConfig.description}</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>
          Read my <Link href="/posts/first-post">First Post</Link>
        </h2>

        <div>
          {allPostsData.map((postData: PostData) => {
            return (
              <div key={postData.slug} className={styles.card}>
                <Link href={`/posts/${postData.slug}`}>
                  {postData.meta.title}
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPostsData();
  const siteConfig = (await import('../siteconfig.json')).default;
  // console.log(')
  return {
    props: {
      allPostsData,
      siteConfig: siteConfig
    }
  };
}
