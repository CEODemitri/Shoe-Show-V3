import InfoCard from "@/app/components/InfoCard";

export default function Collections() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', Sept]

  return (
    <main>
      <div className="min-h-[92vh] grid md:grid-cols-12 grid-rows-12 gap-3 m-2 font-mono">
        {/* hero section */}
        <div className="md:col-span-12 row-span-5 bg-red-500 rounded-md p-4 flex flex-col md:flex-row max-w-[1040px">
          {/* left hero */}
          <article className="w-full h-[350px] md:w-1/2 md:h-full max-w-[600px] m-auto">
            <section className="h-1/3 flex m-4">
              <img src="#" alt="work in progress" />
              <div>
                <h1>Article Title</h1>
                <div className="flex gap-10 text-[10px]">
                  <p>Date</p>
                  <p>Author Name</p>
                </div>
                <p className="text-xs mt-1 w-[42ch]">
                  Extra words here to describe the article. The words are meant
                  to only be this long. A snippet for time being. Get acquainted
                  ...
                </p>
              </div>
            </section>
            <section className="h-1/3 flex m-4">
              <img src="#" alt="work in progress" />
              <div>
                <h1>Article Title</h1>
                <div className="flex gap-10 text-[10px]">
                  <p>Date</p>
                  <p>Author Name</p>
                </div>
                <p className="text-xs mt-1 w-[42ch]">
                  Extra words here to describe the article. The words are meant
                  to only be this long. A snippet for time being. Get acquainted
                  ...
                </p>
              </div>
            </section>

            <button className="bg-slate-200 px-5 py-2">All Blogs</button>
          </article>

          {/* right hero */}
          <article className="w-full h-[400px] md:w-1/2 md:h-full bg-red-100 max-w-[600px] m-auto"></article>
        </div>
      </div>
    </main>
  );
}
