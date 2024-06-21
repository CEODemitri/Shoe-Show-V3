import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen md:h-[92vh] grid grid-cols-1 md:grid-cols-12 grid-rows-10 gap-3 m-2">
        <article className="md:col-span-6 row-span-5 md:row-span-10 border min-h-[1/4] bg-[#EEF1FC] rounded-md">
          <div className="h-[100%] flex flex-col justify-between">
            <article className="py-10 px-5 ">
              <span className="block text-sm text-neutral-600 subtext">
                Gifted Wheels
              </span>
              <h1 className="text-3xl lg:text-4xl mt-3 w-[15ch] font-semibold text-[#2C2B3C]">
                Hard to reach{" "}
                <span className="inline-block text-white bg-red-300 px-2">
                  Soles
                </span>
                .
              </h1>
              <h2 className="text-3xl text-[#2C2B3C]">
                See our Collection
                <span className="text-red-300 px-1 inline-block">.</span>
              </h2>
            </article>

            <article className="flex flex-col gap-4">
              <section className="flex gap-8 justify-between items-center py-5 px-5">
                <Link href="/Pages/Calendar">
                  <p className="bg-[hsl(220,78%,46%)] border-t-4 py-2 px-4 text-center text-white md:text-xl hover:bg-neutral-400 drop-shadow-md rounded-md">
                    Release Dates
                  </p>
                </Link>
                <p className="sm:text-2xl md:text-3xl text-neutral-500 bottom-5 w-[20ch] subtext">
                  - Rare sneakers added every month. Do better.
                </p>
              </section>

              <section>
                <Image
                  src="/hero_imgs/string_6s.jpeg"
                  alt="Hero 6's"
                  width={750}
                  height={550}
                />
              </section>
            </article>
          </div>
        </article>

        <article className="md:col-span-6 md:col-start-7 row-span-2 md:row-span-5 min-h-content relative rounded-md">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65 hover:opacity-80 rounded-md"
            style={{ backgroundImage: `url('/hero_imgs/showroom_3s.jpeg')` }}
          ></div>
          <section className="h-full flex items-end py-3 md:px-2">
            <p className="sm:text-2xl lg:text-4xl drop-shadow-md text-[#232230] ml-5">
              Stay current with our exclusive, dynamic calendar.
            </p>
            <button className="bg-[#dce2f9] rounded-full left-[90%] p-1 shadow-lg">
              <svg
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_83_37"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="45"
                  height="45"
                >
                  <rect
                    x="0.984863"
                    y="0.349304"
                    width="44"
                    height="44"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_83_37)">
                  <path
                    d="M12.7182 33.3493L10.1515 30.7826L27.7515 13.1826H11.9848V9.51593H33.9848V31.5159H30.3182V15.7493L12.7182 33.3493Z"
                    fill="#8599ea"
                  />
                </g>
              </svg>
            </button>
          </section>
        </article>

        <article className="md:col-span-3 md:col-start-7 md:row-start-6 md:row-span-5 min-h-[100px] bg-[#B76D68] rounded-md flex flex-col justify-between pt-2  md:pt-0 md:py-10">
          <section className="px-5 flex justify-between">
            <span className="block text-sm text-neutral-200 subtext">
              Look Easy
            </span>
            <button className="bg-[#DCE2F9] rounded-full p-1 shadow-lg btn-primary">
              <svg
                width="25"
                height="25"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_83_37"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="45"
                  height="45"
                >
                  <rect
                    x="0.984863"
                    y="0.349304"
                    width="44"
                    height="44"
                    fill="#DCE2F9"
                  />
                </mask>
                <g mask="url(#mask0_83_37)">
                  <path
                    d="M12.7182 33.3493L10.1515 30.7826L27.7515 13.1826H11.9848V9.51593H33.9848V31.5159H30.3182V15.7493L12.7182 33.3493Z"
                    fill="#8599ea"
                  />
                </g>
              </svg>
            </button>
          </section>
          <h2 className="text-neutral-200 text-4xl pl-5 text-wrap">
            Accesories
          </h2>
        </article>

        <article className="md:col-span-3 md:col-start-10 md:row-start-6 md:row-span-3 min-h-[100px] bg-[#EEF1FC] px-5 special flex flex-col justify-between pt-10 pb-5">
          <section className="flex justify-between">
            <span className="block text-sm text-neutral-400 subtext">
              Need for Speed
            </span>
            <button className="bg-[#DCE2F9] rounded-full p-1 shadow-lg btn-primary">
              <svg
                width="25"
                height="25"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_83_37"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="45"
                  height="45"
                >
                  <rect
                    x="0.984863"
                    y="0.349304"
                    width="44"
                    height="44"
                    fill="#DCE2F9"
                  />
                </mask>
                <g mask="url(#mask0_83_37)">
                  <path
                    d="M12.7182 33.3493L10.1515 30.7826L27.7515 13.1826H11.9848V9.51593H33.9848V31.5159H30.3182V15.7493L12.7182 33.3493Z"
                    fill="#8599ea"
                  />
                </g>
              </svg>
            </button>
          </section>
          <h2 className="text-[#727099] text-4xl mt-[20%]">Socks</h2>
        </article>

        <article className="md:col-span-3 md:col-start-10 md:row-start-9 row-span-2 min-h-[100px] bg-[#DCE3F9] pt-2 md:pt-4 px-5 rounded-md flex flex-col justify-between md:py-10">
          <section className="flex justify-between">
            <span className="block text-sm text-neutral-500 subtext">
              Bigger Hearts
            </span>
            <button className="bg-[#DCE2F9] rounded-full p-1 shadow-lg btn-primary">
              <svg
                width="25"
                height="25"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_83_37"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="45"
                  height="45"
                >
                  <rect
                    x="0.984863"
                    y="0.349304"
                    width="44"
                    height="44"
                    fill="#DCE2F9"
                  />
                </mask>
                <g mask="url(#mask0_83_37)">
                  <path
                    d="M12.7182 33.3493L10.1515 30.7826L27.7515 13.1826H11.9848V9.51593H33.9848V31.5159H30.3182V15.7493L12.7182 33.3493Z"
                    fill="#8599ea"
                  />
                </g>
              </svg>
            </button>
          </section>
          <h2 className="text-[#727099] text-4xl mt-[8%]">About Us</h2>
        </article>
      </div>
    </main>
  );
}
