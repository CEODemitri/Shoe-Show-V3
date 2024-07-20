import InfoCard from "@/app/components/InfoCard";
import CountdownTimer from "@/app/components/CountdownTimer";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import AllReleases from "@/app/components/AllReleases";

export default function Collections() {
  const homeSac = {
    title: "Sac Mentos",
    colors: "White Laser-Purple",
    rarity: "1 / 400",
  };

  return (
    <main>
      <div className="min-h-[92vh] flex flex-col gap-3 m-2 font-mono text-[#2C2B3C] bg-[#EEF1FC] rounded-md">
        {/* hero section */}
        <div className="mt-3 flex flex-col md:flex-row max-w-[1040px] m-auto">
          {/* left hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full max-w-[600px] m-auto flex flex-col gap-4">
            <InfoCard />
            <section className="h-1/3 flex gap-4">
              <Image
                src="/blog/otherLine.png"
                alt="line of antigue jordans"
                className="w-24 h-24 rounded-md"
                width={100}
                height={100}
              />
              <div>
                <h1>Article Title</h1>
                <div className="flex gap-10 text-[10px]">
                  <p>Date</p>
                  <p>Author Name</p>
                </div>
                <p className="text-xs mt-1 max-w-72">
                  Extra words here to describe the article. The words are meant
                  to only be this long. A snippet for time being. Get acquainted
                  ...
                </p>
              </div>
            </section>

            <button className="text-slate-200 px-5 py-2 rounded-md w-2/5 self-center bg-[#2C2B3C]">
              All Blogs
            </button>
          </article>

          {/* right hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full bg-red-100 max-w-[600px] rounded-md m-auto">
            <section>
              <div className="flex justify-around items-center">
                <Image
                  width={100}
                  height={100}
                  src="/crazy-8s.png"
                  className="w-56 h-60"
                  alt="crazy eight jordan 8"
                />
                <div className="pb-10 pr-16">
                  <h1 className="text-2xl">Crazy Love 8&apos;s</h1>
                  <h2>Jordan Retro 8</h2>
                  <h3>$260</h3>
                  <h1>October 4</h1>
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
        {/* <div className="flex gap-10 flex-wrap justify-center p-6 max-w-[920px] m-auto">
          <Card {...homeSac} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
        <AllReleases />

        <Footer />
      </div>
    </main>
  );
}
