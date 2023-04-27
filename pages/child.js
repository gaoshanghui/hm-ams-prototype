import Head from 'next/head';

export default function ChildComponent() {
  const handleOnclick = function (selectedItem) {
    window.opener.postMessage({ selectedItem }, window.location.origin);
  };

  const handleWindowClose = () => {
    window.close();
  };

  return (
    <div>
      <Head>
        <title>ビジネスリースメンテ前受金情報</title>
      </Head>
      <main>
        <button onClick={handleWindowClose}>閉じる</button>
        <h2>ビジネスリースメンテ前受金情報</h2>
        <p>項目を選択する:</p>
        <ul>
          <button onClick={() => handleOnclick('項目01')}>項目01</button>
          <button onClick={() => handleOnclick('項目02')}>項目02</button>
          <button onClick={() => handleOnclick('項目03')}>項目03</button>
        </ul>
      </main>
    </div>
  );
}
