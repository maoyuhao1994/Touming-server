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
          欢迎来到 {siteTitle}
        </h1>

        <p class="description">
          玩的开心哦！
        </p>

        <div class="text-center py-4">
          
          <div class="stats bg-primary text-primary-content servers">
            <Online server="天理2.8一服" />
            <Online server="天理2.8二服" />
            <Online server="天理2.8魂服" />
            <Online server="天理2.8.5x服" />
            <Online server="天理2.7版本服" />
          </div>

        </div>
        
        <p class="text-center">
          服务器地址是输入到代理里面的，请勿将其直接输入浏览器，不会请看下方教程<br/>
          电脑的端口留空或者输443就好 <br/>
        </p>

        <p class="description">
        <a href="https://casks.me" target="_blank" rel="sponsored">网站|教程</a>
        </p>

      </div>
    </Layout>
  )
}
