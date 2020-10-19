import { GetStaticPathsResult } from 'next';
import {
  getAllPostParams,
  getPostData,
  PostData,
  PostParams
} from 'lib/postsUtils';
import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
interface PostProps {
  source: any;
  postData: PostData;
}

import Link from 'components/Link';
// import Link from 'next/link';
import { FC } from 'react';

import Prism from '@theme-ui/prism';
const components = {
  Link,
  // pre: ({ children }) => <>{children}</>,
  // code: Prism
};

const Post: FC<PostProps> = ({ source, postData }) => {
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>{postData.meta.title}</title>
      </Head>
      <h1>{postData.meta.title}</h1>
      {content}
    </>
  );
};
export default Post;

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getAllPostParams();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({
  params
}: PostParams): Promise<{ props: PostProps }> {
  const postData = await getPostData(params.slug);
  const source = await renderToString(postData.content, {
    components
  });
  return {
    props: {
      source,
      postData
    }
  };
}
