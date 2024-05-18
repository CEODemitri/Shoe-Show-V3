import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="bg-[#DCE2F9] flex justify-between items-center px-5 border col-span-12">
        <a href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            class="w-14"
            alt="Shoe Show Logo"
            width={25}
            height={25}
          />
          <span className="title text-[#232230]">SHOE SHOW</span>
        </a>

        <section className="flex gap-5">
          <ul className="hidden sm:flex gap-5">
            <li>Calendar</li>
            <li>Charity</li>
            <li>Contact</li>
          </ul>
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
