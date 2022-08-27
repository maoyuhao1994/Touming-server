import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = '透明服务器'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>                
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="透明服务器" />
            </Head>
            <header>

            </header>
            {children}
            {home ? (
                <>

                </>
            ) : (
                <>
                    <h3 class="text-center">
                        <Link href="/">
                            <button class="btn btn-primary">Back to Home</button>
                        </Link>
                    </h3>
                </>
            )}
            <footer class="text-center">
                <p>
                    <a href="https://discord.gg/jQyWmgr2z8" target="_blank" rel="sponsored">加群</a>
                </p>
                <p class="small">
                    <br/><br/>
                    <a href="https://github.com/akbaryahya/YuukiPS-Web" target="_blank" rel="sponsored">网站基于Yuki修改|源码</a>
                </p>

            </footer>
        </div>
    )
}
