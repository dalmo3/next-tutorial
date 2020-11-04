import React, { FC } from 'react';
import { GetStaticPathsResult } from 'next';
import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Divider, Styled } from 'theme-ui';
import Link from 'components/Link';
import {
  getAllPostParams,
  getPostData,
  PostData,
  PostParams,
} from 'lib/postsUtils';
import { ISiteConfig } from 'siteconfig';

interface PostProps {
  source: any;
  postData: PostData;
  siteConfig: ISiteConfig;
}

const components = {
  Link,
};

const Post: FC<PostProps> = ({ source, postData, siteConfig }) => {
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>
          {postData.meta.title} | {siteConfig.title}
        </title>
      </Head>

      <Styled.h1>{postData.meta.title}</Styled.h1>
      <Divider />
      {content}
    </>
  );
};
export default Post;

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getAllPostParams();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: PostParams): Promise<{ props: PostProps }> {
  const siteConfig = (await import('siteconfig')).default;
  const postData = await getPostData(params.slug);
  const source = await renderToString(postData.content, {
    components,
  });
  return {
    props: {
      source,
      postData,
      siteConfig,
    },
  };
}
