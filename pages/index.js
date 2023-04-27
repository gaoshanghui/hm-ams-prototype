import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>業務ナビ</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>業務ナビ</h1>
        <hr />
        <ul>
          <li>
            <Link href="./tasks" target="_blank" rel="noopener noreferrer">
              対象業務一覧（従来方式）
            </Link>
          </li>
          <li>
            <Link href="./newtasks" target="_blank" rel="noopener noreferrer">
              対象業務一覧（新方式）
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
