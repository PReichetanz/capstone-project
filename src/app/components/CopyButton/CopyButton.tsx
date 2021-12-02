import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

type CopyButtonProps = {
  copyText: string;
};

export default function CopyButton({ copyText }: CopyButtonProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CopyToClipboardButton onClick={handleCopyClick}>
      <span>
        {isCopied ? 'Beurteilungen kopiert' : 'Beurteilungen kopieren'}
      </span>
    </CopyToClipboardButton>
  );
}

const CopyToClipboardButton = styled(Button)`
  width: 50%;
  padding: 1rem 0;
  margin-top: 2rem;
`;
