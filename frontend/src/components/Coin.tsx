// components/Coin.tsx

import React from "react";
import Image from "next/image";

interface CoinProps {
  name: string;
  size?: number;
}

const Coin: React.FC<CoinProps> = React.memo(({ name, size =24 }) => {
  return (
    <Image
      width={size}
      height={size}
      src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${name}.svg`}
      alt={name}
      className="object-fill rounded-full"
    />
  );
});

Coin.displayName = 'Coin';

export default Coin;
