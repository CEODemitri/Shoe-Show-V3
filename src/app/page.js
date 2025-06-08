import Image from "next/image";
import Link from "next/link";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="h-screen grid grid-cols-12 grid-rows-12">
          {/* hero section */}
          <section className="col-span-full row-span-6 bg-[#FEFCF3] px-4 grid-cols-subgrid grid-rows-subgrid">
              <article  className="text-[#4050A9] mt-4 col-span-4 row-span-full">
                  <p>Collect and Connect</p>
                  <h1 className="text-6xl tracking-wide text-justify">Lace up and plug in — your trusted <span className="text-[#A6AEDD]">pass</span> to the
                      <svg className="inline mx-7" width="56" height="56" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34 5.66666C18.377 5.66666 5.66663 18.377 5.66663 34C5.66663 49.623 18.377 62.3333 34 62.3333C49.623 62.3333 62.3333 49.623 62.3333 34C62.3333 18.377 49.623 5.66666 34 5.66666ZM11.3333 34C11.3333 31.4528 11.7753 29.0077 12.5545 26.7212L17 31.1667L22.6666 36.8333V42.5L28.3333 48.1667L31.1666 51V56.4712C20.0061 55.0687 11.3333 45.5373 11.3333 34ZM51.935 47.8068C50.0848 46.3165 47.2798 45.3333 45.3333 45.3333V42.5C45.3333 40.9971 44.7363 39.5558 43.6736 38.4931C42.6109 37.4303 41.1695 36.8333 39.6666 36.8333H28.3333V28.3333C29.8362 28.3333 31.2775 27.7363 32.3402 26.6736C33.4029 25.6109 34 24.1696 34 22.6667V19.8333H36.8333C38.3362 19.8333 39.7775 19.2363 40.8402 18.1736C41.9029 17.1109 42.5 15.6696 42.5 14.1667V13.0022C50.796 16.371 56.6666 24.5083 56.6666 34C56.6655 38.9999 55.0008 43.8572 51.935 47.8068Z" fill="#4050A9" fill-opacity="0.5"/>
                  </svg>
                      <span className="text-white with-stroke">sneaker</span> world .</h1>
              </article>
              <article className="w-1/2 col-start-5 col-span-4 row-start-1">
                  <div className="flex gap-16 mt-12">
                      <p className="w-3/5 text-justify tracking-wide">From heat to hype we have your front row to every release. Powered by passion begin to end, never miss a drop again. More Than a Shoe site we are a Culture.</p>
                      <svg width="90" height="77" viewBox="0 0 90 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 16.4156C0 13.5466 2.32579 11.2208 5.19481 11.2208H59.7403C62.6093 11.2208 64.9351 13.5466 64.9351 16.4156V70.961C64.9351 73.8301 62.6093 76.1558 59.7403 76.1558H5.1948C2.32579 76.1558 0 73.8301 0 70.961V16.4156Z" fill="#2A211D"/>
                          <path d="M89.0625 0.554688H82.2363C81.2793 0.554688 80.3711 0.99414 79.7851 1.74609L39.5215 52.752L20.2148 28.2891C19.9228 27.9182 19.5505 27.6184 19.126 27.4121C18.7014 27.2057 18.2357 27.0982 17.7637 27.0977H10.9375C10.2832 27.0977 9.92187 27.8496 10.3223 28.3574L37.0703 62.2441C38.3203 63.8262 40.7226 63.8262 41.9824 62.2441L89.6777 1.80469C90.0781 1.30664 89.7168 0.554688 89.0625 0.554688Z" fill="#E18965"/>
                      </svg>

                  </div>
              </article>
          </section>

          {/* links */}
          <section></section>
      </div>
    </main>
  );
}
