import React from 'react';
import Button from '../Button/button';
import Link from 'next/link';
import { Url } from 'url';

interface ActionsProps {
  withOutDelete?: boolean;
  link?: string | Url;
}

const Actions: React.FC<ActionsProps> = ({ withOutDelete, link }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link href={link ? link : ''}>
        <Button small>Update</Button>
      </Link>

      {!withOutDelete && (
        <Button small red>
          Delete
        </Button>
      )}
    </div>
  );
};

export default Actions;
