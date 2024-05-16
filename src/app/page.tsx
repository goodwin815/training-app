import Banner from './home/banner';
import LoginSection from './home/login-section';

import Mentors from './home/mentors';
import Students from './home/students';
import VcSection from './home/vc-section';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-10 ">
      <Banner />
      <LoginSection />
      <VcSection />
      <Mentors />
      <Students />
    </main>
  );
}
