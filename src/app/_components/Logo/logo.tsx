// components/Logo.tsx

import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/images/home/Logo.png" width={158} height={54} alt="logo" />
    </Link>
  );
};

export default Logo;
