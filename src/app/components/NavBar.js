import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const links = [
    {
      name: "Calendar",
      to: "/Pages/Calendar",
    },
    {
      name: "Charity",
      to: "/Pages/Charity",
    },
    {
      name: "Contact",
      to: "/Pages/Contact",
    },
  ];

  return (
    <>
      <nav className="bg-[#DCE2F9] flex justify-between items-center px-5 border col-span-12 font-mono">
        <a href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            className="w-14"
            alt="Shoe Show Logo"
            width={25}
            height={25}
          />
          <span className="title text-[#232230]">SHOE SHOW</span>
        </a>

        <section className="flex gap-5 items-center">
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            className="m-auto md:hidden"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>

          <a
            href="#"
            className="bg-[#F9C80E] px-6 py-1 rounded-md text-[#2C2B3C] title drop-shadow-sm"
          >
            Stories
          </a>
        </section>
      </nav>
    </>
  );
}
