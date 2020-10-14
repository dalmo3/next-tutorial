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
  compDesc: string[][];
  source: any;
  postData: PostData;
}
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { FC } from 'react';
// const components = {
//   Link
// };

const getComponents = (path) => ({
  Link: dynamic(()=>import(path))
})

const Post: FC<PostProps> = ({ source, postData }) => {
  // const Link = getComponents('next/link').Link
  
  const components = {
    // Link: dynamic(()=>import('next/link'))
    Link
  }
  // console.log('comps', getComponents('next/link'))
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
  const compDesc = [['Link','../../node_modules/next/link']]
  
  const components = {
  }
  compDesc.forEach(desc => {
    components[desc[0]] = dynamic(()=>import(desc[1]))
  })
  console.log(components)
  const source = await renderToString(postData.content, {
    components
  });
  return {
    props: {
      compDesc,
      source,
      postData
    }
  };
}
