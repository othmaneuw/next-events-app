import Link from "next/link";
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <Image width={50} height={50} src={'/images/avengers.jpg'} alt={'logo'} />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="about-us">About</Link>
        </nav>
      </div>
      <h1>Welcome to the Home Page</h1>
    </header>
  );
};
