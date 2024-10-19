import BlogCard from "@/app/components/BlogCard";
import CountdownTimer from "@/app/components/CountdownTimer";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Card from "@/app/components/Card";
import { shoes } from "@/app/components/Data";
import Link from "next/link";

export default function Collections() {
  return (
    <main>
      <div className="min-h-[92vh] flex flex-col gap-3 m-2 font-mono text-[#2c2b3b] bg-[#EEF1FC] rounded-md">
        {/* hero section */}
        <div className="mt-3 flex flex-col md:flex-row max-w-[1040px] m-auto gap-8 items-center">
          {/* left hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full max-w-[600px] m-auto flex flex-col gap-4 px-2">
            <section className=" p-4">
              <BlogCard />
            </section>
            <section className="outline outline-slate-300 rounded-sm p-4">
              <BlogCard />
            </section>
            <button className="text-slate-200 px-5 py-2 rounded-md w-2/5 self-center bg-[#2C2B3C] hover:bg-[#2c2b3c80]">
              All Blogs
            </button>
          </article>

          {/* right hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full bg-red-100 max-w-[600px] rounded-md">
            <section>
              <div className="flex items-center relative">
                <Image
                  width={150}
                  height={150}
                  src="/crazy-8s.png"
                  className="w-fit h-60 absolute left-60"
                  alt="crazy eight jordan 8"
                />
                <div className=" bg-[#2C2B3C20] w-60 px-4 h-fit mt-8">
                  <h1 className="text-xl">Crazy Love 8&apos;s</h1>
                  <h2 className="text-xs">Jordan Retro 8</h2>
                  <h3>$260</h3>
                  <h1 className="text-sm rounded-l-sm">November 10</h1>
                </div>
              </div>
            </section>
            <section>
              <CountdownTimer />
            </section>
          </article>
        </div>

        {/* main section */}
        {/* main banner */}
        <div className="bg-[url(/hero_imgs/collage.png)] h-24 flex items-end">
          <section className="bg-[#EEF1FC] px-4">
            <h1 className="text-xl md:text-2xl pt-2 rounded-tr-md">
              November 2024 - 2025
            </h1>
            <p className="text-sm">Premium Release Calendar</p>
          </section>
        </div>

        {/* filter banner */}
        <div className="bg-[#2C2B3C40] h-8 rounded-3xl w-3/5 m-auto"></div>

        {/* content */}
        <div className="flex gap-10 flex-wrap justify-center p-6 max-w-[920px] m-auto">
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <Link href={`../detail/${shoe.id}`}>
                <Card
                  key={shoe.id}
                  source={shoe.source}
                  title={shoe.title}
                  colors={shoe.colors}
                  brand={shoe.brand}
                  rarity={shoe.rarity}
                  sillo={shoe.sillo}
                  date={shoe.date}
                  price={shoe.price}
                />
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
