import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

type CopyButtonProps = {
  copyData: () => void;
};

export default function CopyButton({ copyData }: CopyButtonProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyToClipboardButton onClick={copyData}>
      <span>
        {isCopied ? 'Beurteilungen exportieren' : 'Beurteilungen kopiert'}
      </span>
    </CopyToClipboardButton>
  );
}

const CopyToClipboardButton = styled(Button)`
  width: 50%;
  padding: 1rem 0;
`;
