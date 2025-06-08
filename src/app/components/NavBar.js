import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const links = [
    {
      name: "Calendar",
      to: "/Pages/Calendar",
    },
    {
      name: "Market",
      to: "/Pages/Market",
    },
    {
      name: "Community",
      to: "/Pages/Community",
    },
    {
      name: "About Us",
      to: "/Pages/About",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-4 border col-span-12 font-mono overflow-hidden">
        <a href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            className="w-14"
            alt="Shoe Show Logo"
            width={25}
            height={25}
          />
        </a>

        <section className="flex gap-8 items-center">
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                href={link.to}
                key={link.id}
                className="hover:bg-blue-900 hover:text-white hover:px-4 hover:py-1 hover:scale-110 hover:rounded-md duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="#"
            className="bg-[#F9C80E] px-6 py-1 rounded-md text-[#2C2B3C] title drop-shadow-sm ml-6"
          >
            <svg width="40" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 30C50 24.6957 47.8929 19.6086 44.1421 15.8579C40.3914 12.1071 35.3043 10 30 10M30 50C32.9984 50.0018 35.9587 49.3286 38.6614 48.0302C41.3642 46.7319 43.7399 44.8417 45.6125 42.5" stroke="#1A2223" stroke-width="3.75" stroke-linecap="round"/>
              <path d="M10 30H35M35 30L27.5 22.5M35 30L27.5 37.5" stroke="#1A2223" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </a>
        </section>
      </nav>
    </>
  );
}
