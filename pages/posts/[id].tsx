import { GetStaticPaths, GetStaticPathsResult } from 'next';
import { getAllPostIds, getPostData } from 'lib/posts';

export default function Post({ postData }) {
  return (
    <>
    <head>
  <title>{postData.title}</title>
    </head>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
