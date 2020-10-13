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
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
interface PostProps {
  source: any;
  postData: PostData;
}

export default function Post({ source, postData }: PostProps) {
  const content = hydrate(source, { components: { Link } });
  return (
    <>
      <Head>
        <title>{postData.meta.title}</title>
      </Head>
      <h1>{postData.meta.title}</h1>
      {content}
      {/* <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article> */}
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

export async function getStaticProps({
  params
}: PostParams): Promise<{ props: PostProps }> {
  const postData = await getPostData(params.slug);
  const source = await renderToString(postData.content, {
    components: { Link }
  });
  console.log(source);
  return {
    props: {
      source,
      postData
    }
  };
}
