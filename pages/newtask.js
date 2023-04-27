import { useState } from 'react';
import Head from 'next/head';
import Overlay from '../components/overlay';
import styles from '../styles/NewTask.module.css';

export default function NewTask() {
  const [subpage, setSubpage] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const openSubpage = function () {
    setSubpage(true);
  };

  const closeSubpage = function () {
    setSubpage(false);
  };

  const handleSelect = (value) => {
    setSelectedItem(value);
  };

  return (
    <div>
      <Head>
        <title>修理売上明細入力</title>
      </Head>
      <main>
        <h1>修理売上明細入力</h1>
        <hr />

        <div>
          <h2>選択される項目</h2>
          <p>{selectedItem}</p>
          <button onClick={openSubpage}>選択</button>
        </div>
      </main>

      {/* Popup形式で子ページを開く */}
      {subpage && (
        <Overlay>
          <div className={styles.subpage}>
            <button onClick={closeSubpage}>閉じる</button>
            <h2>ビジネスリースメンテ前受金情報</h2>
            <div>
              <button onClick={() => handleSelect('項目01')}>項目01</button>
              <button onClick={() => handleSelect('項目02')}>項目02</button>
              <button onClick={() => handleSelect('項目03')}>項目03</button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}
