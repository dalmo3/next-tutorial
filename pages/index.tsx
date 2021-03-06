import Head from 'next/head';
import { getAllPostsData, PostData } from 'lib/postsUtils';
import React from 'react';
import { Card, Divider, Grid, NavLink, Text } from 'theme-ui';
import Link from 'components/Link';
import { Styled } from 'theme-ui';

export default function Home({ allPostsData, siteConfig }) {
  return (
    <div>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <Styled.h1>Absolutest Freshest Content</Styled.h1>
      <Divider />
      <Grid
        sx={{
          gridGap: 3,
        }}>
        {allPostsData.map((postData: PostData) => {
          return (
            <Link href={`/posts/${postData.slug}`} key={postData.slug}>
              <Card
                sx={{
                  py: 1,
                  px: 4,
                  borderRadius: 10,
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                  '&:hover': {
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
                  },
                }}>
                <Styled.h2>{postData.meta.title}</Styled.h2>
                <Text as='span'>{postData.meta.date}</Text>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPostsData();
  const siteConfig = (await import('siteconfig')).default;
  // console.log(')
  return {
    props: {
      allPostsData,
      siteConfig,
    },
  };
}
