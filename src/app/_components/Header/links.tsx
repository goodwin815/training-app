import { useState } from 'react';
import { header_links } from '@/app/_lib/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown } from '../icons/chevrone-down';

const Links = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();
  const handleMouseEnter = (name: string) => {
    setActiveLink(name);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  const isCurrentPath = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex items-center gap-8">
      {header_links.map((item) => (
        <div key={item.name} className="relative">
          {item.sublinks ? (
            <div onMouseEnter={() => handleMouseEnter(item.name)}>
              <button
                className="flex h-20 items-center gap-1 "
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  setActiveLink(activeLink === item.name ? null : item.name)
                }
              >
                <h3
                  className={
                    isCurrentPath(item.path) ? 'text-[#1A56DB]' : 'text-black'
                  }
                >
                  {item.name}
                </h3>
                <ChevronDown />
              </button>

              {activeLink === item.name && (
                <div
                  className="absolute  w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-md transition-opacity duration-300 ease-in-out"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.sublinksArray?.map((sublink) => (
                    <Link href={sublink.path} key={sublink.name}>
                      <h3 className="block px-4 py-2 hover:bg-gray-100">
                        {sublink.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.path}>
              <h3
                className={
                  isCurrentPath(item.path) ? 'text-[#1A56DB]' : 'text-black'
                }
              >
                {item.name}
              </h3>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;
