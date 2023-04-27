import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Tasks.module.css';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    applicationNumber: '9999-9999',
    taskTitle: '修理売上入力',
    date: '2023/03/01',
  },
  {
    key: '2',
    applicationNumber: '8888-8888',
    taskTitle: '修理売上入力',
    date: '2023/03/02',
  },
];

const columns = [
  {
    title: '申請No.',
    dataIndex: 'applicationNumber',
    key: 'applicationNumber',
    render: (text) => (
      <Link href="./task" target="_blank" rel="noopener noreferrer">
        {text}
      </Link>
    ),
  },
  {
    title: '業務名',
    dataIndex: 'taskTitle',
    key: 'taskTitle',
  },
  {
    title: '申請日',
    dataIndex: 'date',
    key: 'date',
  },
];

export default function Tasks() {
  return (
    <div>
      <Head>
        <title>対象業務一覧</title>
      </Head>
      <main className={styles.main}>
        <h1>対象業務一覧</h1>
        <hr />
        <div className={styles.search}>
          <h2 className={styles.searchTitle}>検索条件</h2>
        </div>

        <hr />
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ position: ['topRight'] }}
          />
        </div>
      </main>
    </div>
  );
}
