import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
      <title>{siteTitle}</title>
      </Head>

      <div class="home">

        <h1 class="title">
          透明服务器状态监测
        </h1>

        <div class="text-center py-4">
          
          <div class="stats bg-primary text-primary-content servers">
            <Online server="s1" />
            <Online server="s2" />
            <Online server="s3" />
            <Online server="s4" />
            <Online server="s5" />
          </div>

        </div>
        
        <p class="text-center">
          服务器地址为：server1.yuanshen.edu.rs<br/>
          电脑的端口随意填写就好 <br/>
        </p>

        <p class="description">
        </p>

      </div>
    </Layout>
  )
}
