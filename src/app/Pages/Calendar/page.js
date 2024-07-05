import InfoCard from "@/app/components/InfoCard";
import Image from "next/image";

export default function Collections() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', Sept]

  return (
    <main>
      <div className="min-h-[92vh] grid md:grid-cols-12 grid-rows-12 gap-3 m-2 font-mono text-[#2C2B3C]">
        {/* hero section */}
        <div className="md:col-span-12 row-span-5 bg-[#EEF1FC] rounded-md p-4 flex flex-col md:flex-row max-w-[1040px">
          {/* left hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full max-w-[600px] m-auto flex flex-col">
            <section className="h-1/3 flex gap-4">
              <Image
                src="/favicon.ico"
                alt="work in progress"
                className="w-20 h-20"
                width={0}
                height={0}
              />
              <div>
                <h1>Article Title</h1>
                <div className="flex gap-10 text-[10px]">
                  <p>Date</p>
                  <p>Author Name</p>
                </div>
                <p className="text-xs mt-1 w-72">
                  Extra words here to describe the article. The words are meant
                  to only be this long. A snippet for time being. Get acquainted
                  ...
                </p>
              </div>
            </section>
            <section className="h-1/3 flex gap-4">
              <Image
                src="/favicon.ico"
                alt="work in progress"
                className="w-20 h-20"
                width={0}
                height={0}
              />
              <div>
                <h1>Article Title</h1>
                <div className="flex gap-10 text-[10px]">
                  <p>Date</p>
                  <p>Author Name</p>
                </div>
                <p className="text-xs mt-1 w-72">
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
          <article className="w-full h-[400px] md:w-1/2 md:h-full bg-red-100 max-w-[600px]">
            <section>
              <div className="flex justify-center items-center">
                <img src="/crazy-8s.png" className="w-56 h-60" />
                <div className="pb-20">
                  <h1>Crazy Love 8's</h1>
                  <h2>Retro 8</h2>
                  <h3>$260</h3>
                </div>
              </div>
              <div></div>
            </section>
            <section></section>
            <section></section>
          </article>
        </div>
      </div>
    </main>
  );
}
