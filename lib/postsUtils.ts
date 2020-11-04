import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { GetStaticPaths } from 'next';

const postsDir = path.join(process.cwd(), 'posts');

export type PostData = {
  slug: string;
  content?: string;
  contentHtml?: string;
  meta: {
    [key: string]: any;
  };
};

export type PostParams = {
  params: {
    slug: string;
  };
};

/**
 * Gets list of posts for use in home, archives pages etc
 * Sorts by most recent first
 */
export function getAllPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDir);

  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug: fileName.replace(/\.md[x]?$/, ''),
      meta: matterResult.data,
    };
  });

  const publishedPosts = allPostsData.filter(
    (post) => post.meta.draft !== 'true'
  );

  const sortedPosts = publishedPosts.sort((a, b) =>
    a.meta.date < b.meta.date ? 1 : -1
  );

  return sortedPosts;
}

/** Params necessary for getStaticPaths */
export function getAllPostParams(): PostParams[] {
  return getAllPostsData().map(({ slug }) => ({
    params: { slug },
  }));
}

/** Gets post data for single post */
export async function getPostData(slug: string): Promise<PostData> {
  //first look for mdx file over just md
  const fullPathMDX = path.join(postsDir, `${slug}.mdx`);
  const fullPathMD = path.join(postsDir, `${slug}.md`);
  // const fullPath = path.join(postsDir, id);
  const fullPath = fs.existsSync(fullPathMDX) ? fullPathMDX : fullPathMD;

  const fileContents = fs.readFileSync(fullPath);
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: matterResult.content,
    contentHtml,
    meta: matterResult.data,
  };
}
