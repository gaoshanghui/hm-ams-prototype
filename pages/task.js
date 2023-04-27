import { useState } from 'react';
import Head from 'next/head';

export default function Task() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleOnClick = function () {
    // const childWindow = window.open('/child', 'childWindow');
    const childWindow = window.open('/child', 'subwin', 'width=800,height=600');

    // 子ウィンドウからメッセージを受け取るリスナー
    window.addEventListener('message', (event) => {
      // セキュリティ上の理由で、オリジンが異なるメッセージを無視する
      if (event.origin !== window.location.origin) return;

      // オリジンが同じの時に正常処理を行う
      if (event.data.selectedItem) {
        setSelectedItem(event.data.selectedItem);
      }
    });
  };

  return (
    <div>
      <Head>
        <title>修理売上明細入力</title>
      </Head>
      <main>
        <h1>修理売上明細入力</h1>
        <hr />

        {/* 別タブと通信する場合 */}
        <div>
          <h2>選択される項目</h2>
          <p>{selectedItem}</p>
          <button onClick={handleOnClick}>選択</button>
        </div>
      </main>
    </div>
  );
}
