import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { GetStaticPaths } from 'next';

const postsDir = path.join(process.cwd(), 'posts');

type PostData<T> = T & {
  id: string;
  contentHtml?: string;
};

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md[x]?$/, '');
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data
    } as PostData<typeof matterResult.data>;
  });

  const sortedPosts = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

  return sortedPosts;
}

export function getAllPostIds() {
  return getSortedPostData().map(({ id }) => ({ params: { id } }));
}

export async function getPostData(id: string) {
  const fullPathMDX = path.join(postsDir, `${id}.mdx`);
  const fullPathMD = path.join(postsDir, `${id}.md`);
  // const fullPath = path.join(postsDir, id);
  const fullPath = fs.existsSync(fullPathMDX) ? fullPathMDX : fullPathMD;

  const fileContents = fs.readFileSync(fullPath);

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  } as PostData<typeof matterResult.data>;
}
