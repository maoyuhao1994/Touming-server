import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = '天理服务器'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>                
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="天理服务器" />
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
            <footer class="text-center py-3">
                <p>
                    <a href="https://discord.gg/RnRnYcEc7J">
                        <img src="https://cdn.discordapp.com/attachments/982111596966985798/982243198237802556/Untitled-2.jpg" alt="DockerGC"></img>
                    </a>
                </p>
                <p class="mt-4">
                    <a href="https://github.com/casksteven/Casks-server" target="_blank" rel="sponsored">修改至Yukki</a>
                </p>

            </footer>
        </div>
    )
}