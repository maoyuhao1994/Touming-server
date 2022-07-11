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
            <Online server="天理一服 地址：电脑：1.casks.me 手机：https://1.casks.me" />
            <Online server="天理二服 电脑：2.casks.me  手机：https://2.casks.me" />
            <Online server="天理魂服 电脑：soul.casks.me  手机：https://soul.casks.me" />
            <Online server="天理2.8服 电脑：28.casks.me  手机：https://28.casks.me" />
          </div>

        </div>
        
        <p class="text-center">
          服务器地址是输入到代理里面的，请勿将其直接输入浏览器，不好的请看下方教程<br/>
          电脑的端口留空或者输443就好 <br/>
        </p>

        <p class="description">
        <a href="https://casks.me" target="_blank" rel="sponsored">网站|教程</a>
        </p>

      </div>
    </Layout>
  )
}
