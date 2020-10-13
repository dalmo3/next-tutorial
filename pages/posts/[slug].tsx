import { GetStaticPaths, GetStaticPathsResult } from 'next';
import {
  getAllPostParams,
  getPostData,
  PostData,
  PostParams
} from 'lib/postsUtils';
import Link from 'next/link';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface PostProp {
  postData: PostData;
}

export default function Post({ postData }: PostProp) {
  return (
    <>
      <Head>
        <title>{postData.meta.title}</title>
      </Head>
      <article>
        <h1>{postData.meta.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getAllPostParams();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: PostParams) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData
    }
  };
}
