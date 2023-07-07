'use client';

import Image from 'next/image';

export default function CopyCode() {
  const copyClipboard = () => {
    const text = 'fuck';
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  return (
    <>
      <div>
        <button onClick={copyClipboard}>
          <Image src="copy.svg" alt="copy icon" width={32} height={32} />
        </button>
      </div>
    </>
  );
}
