import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/mentors/Avatar.png"
        width={48}
        height={48}
        alt="avatar"
      />
      <p className="ml-4 text-gray-700">Ralph Edwards</p>
    </div>
  );
};

export default Profile;
