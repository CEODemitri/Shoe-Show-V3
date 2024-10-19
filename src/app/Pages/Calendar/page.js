import BlogCard from "@/app/components/BlogCard";
import CountdownTimer from "@/app/components/CountdownTimer";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Card from "@/app/components/Card";

export default function Collections() {
  const homeSac = {
    title: "Sac Mentos",
    colors: "White Laser-Purple",
    rarity: "1 / 400",
    brand: "Nike",
    sillo: "Jordan Retro 3",
    date: "2025-01-01",
    price: 1500,
    source: "/release/sacremento3home.png",
  };

  const bobcathome = {
    title: "Bobcats",
    colors: "White Orange Navy",
    rarity: "1 / 6000",
    brand: "Nike",
    sillo: "Jordan Retro 3",
    date: "2025-01-01",
    price: 450,
    source: "/release/bobcat3home.png",
  };

  const deepblack = {
    title: "Deep Black",
    colors: "White Black",
    rarity: "1 / 3600",
    brand: "Nike",
    sillo: "Jordan Retro 4",
    date: "2025-01-08",
    price: 1500,
    source: "/release/deepblack4s.png",
  };

  const bobcatten = {
    title: "Bobcat Tens",
    colors: "White Orange Navy",
    rarity: "1 / 1000",
    brand: "Nike",
    sillo: "Jordan Retro 11",
    date: "2025-01-16",
    price: 450,
    source: "/release/bobcat10.png",
  };

  const cream = {
    title: "Cream",
    colors: "White",
    rarity: "1 / 2000",
    brand: "Nike",
    sillo: "Jordan Retro 7",
    date: "2025-01-22",
    price: 1500,
    source: "/release/cream7s.png",
  };

  const gtown = {
    title: "Georgetown",
    colors: "White",
    rarity: "1 / 3000",
    brand: "Nike",
    sillo: "Jordan Retro 8",
    date: "2025-01-29",
    price: 2500,
    source: "/release/georgetown8s.png",
  };

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
                  <h1 className="text-sm rounded-l-sm">October 4</h1>
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
              August 2024 - 2025
            </h1>
            <p className="text-sm">Premium Release Calendar</p>
          </section>
        </div>

        {/* filter banner */}
        <div className="bg-[#2C2B3C40] h-8 rounded-3xl w-3/5 m-auto"></div>

        {/* content */}
        <div className="flex gap-10 flex-wrap justify-center p-6 max-w-[920px] m-auto">
          <Card {...homeSac} />
          <Card {...bobcathome} />
          <Card {...deepblack} />
          <Card {...bobcatten} />
          <Card {...cream} />
          <Card {...gtown} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
