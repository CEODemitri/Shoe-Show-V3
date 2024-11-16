import Image from "next/image";
import Link from "next/link";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="md:h-[92vh] grid md:grid-cols-12 grid-rows-10 gap-3 my-2 md:m-2 font-mono">
        {/* hero */}
        <article className="md:col-span-6 row-span-3 md:row-span-10 border min-h-[1/4] bg-[#EEF1FC] rounded-md hover:shadow-2xl">
          <div className="h-full flex flex-col justify-between">
            <article className="py-8 px-5 ">
              <span className="block text-sm text-neutral-600 subtext">
                ABOVE IMPOSSIBLE
              </span>
              <section className="flex flex-col gap-4">
                <h1 className="text-2xl lg:text-4xl mt-3 md:w-[15ch] font-semibold text-[#2C2B3C]">
                  Flyer{" "}
                  <span className="text-white bg-red-300 px-2">Kicks</span>.
                </h1>
                <h2 className="text-xl md:text-2xl text-[#2C2B3C]">
                  Add new heaters to your Collection
                  <span className="text-red-300 px-1 inline-block">.</span>
                </h2>
              </section>
            </article>

            <article className="flex flex-col gap-4">
              <section className="flex gap-8 justify-between items-center py-5 px-5">
                <Link href="/Pages/Calendar">
                  <p className="bg-[hsl(220,28%,36%)] border-t-4 py-2 px-4 text-center text-white sm:text-2xl md:text-3xl hover:bg-[hsl(220,75%,36%)] drop-shadow-md rounded-md flex items-center gap-1">
                    <span className="">
                      <LiaCalendarWeekSolid />
                    </span>
                    <span className="text-[12px] md:text-[16px]">Calendar</span>
                  </p>
                </Link>
                <p className=" text-neutral-500 bottom-5 w-[25ch] text-md md:text-xl flex items-center gap-4">
                  <span>
                    <FaAngleDoubleLeft />
                  </span>{" "}
                  Out of this world inspiration. Take a peek.
                </p>
              </section>

              <section>
                <Image
                  src="/hero_imgs/string_6s.jpeg"
                  alt="Hero 6's"
                  width={750}
                  height={550}
                  className="w-[100%]"
                />
              </section>
            </article>
          </div>
        </article>

        {/* blog */}
        <article className="md:col-span-6 md:col-start-7 row-span-2 md:row-span-5 relative rounded-md py-2 md:py-8 px-5 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65 hover:opacity-80 rounded-md"
            style={{ backgroundImage: `url('/hero_imgs/showroom_3s.jpeg')` }}
          ></div>
          <section className="h-full flex justify-between items-end">
            <p className="sm:text-2xl lg:text-3xl drop-shadow-md text-[#232230]">
              Find the latest hype with our Blogs.
            </p>
            <button className="left-[90%] shadow-lg text-4xl z-10 text-[#F9C80E]">
              <FaSquareArrowUpRight />
            </button>
          </section>
        </article>

        {/* accesories */}
        <article className="md:col-span-3 md:col-start-7 row-span-2 md:row-start-6 md:row-span-5 min-h-[100px] bg-[#B76D68] rounded-md flex flex-col justify-between py-2 md:py-8 px-5 hover:shadow-2xl">
          <section className="flex justify-between">
            <span className="block text-sm text-neutral-200 subtext">
              Look Easy
            </span>
            <button className="left-[90%] shadow-lg text-4xl">
              <FaSquareArrowUpRight />
            </button>
          </section>
          <h2 className="text-neutral-200 text-3xl md:text-2xl lg:text-3xl text-wrap">
            Accesories
          </h2>
        </article>

        {/* socks */}
        <article className="md:col-span-3 md:col-start-10 row-span-2 md:row-start-6 md:row-span-3 min-h-[100px] bg-[#EEF1FC] px-5 special flex flex-col justify-between py-4 md:py-8 rounded-md hover:shadow-2xl">
          <section className="flex justify-between">
            <span className="block text-sm text-neutral-400 subtext">
              Need for Speed
            </span>
            <button className="left-[90%] shadow-lg text-4xl">
              <FaSquareArrowUpRight />
            </button>
          </section>
          <h2 className="text-[#727099] text-4xl mt-[20%]">Socks</h2>
        </article>

        {/* about us */}
        <article className="md:col-span-3 md:col-start-10 md:row-start-9 row-span-2 min-h-[100px] bg-[#DCE3F9] px-5 rounded-md flex flex-col justify-between py-2 md:py-8 hover:shadow-2xl">
          <section className="flex justify-between">
            <span className="block text-sm text-neutral-500 subtext">
              Bigger Hearts
            </span>
            <button className="left-[90%] shadow-lg text-4xl text-blue-600/60">
              <FaSquareArrowUpRight />
            </button>
          </section>
          <h2 className="text-[#727099] text-3xl md:text-2xl lg:text-3xl mt-[8%]">
            About Us
          </h2>
        </article>
      </div>
    </main>
  );
}
