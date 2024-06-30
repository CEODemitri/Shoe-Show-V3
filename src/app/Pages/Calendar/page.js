import InfoCard from "@/app/components/InfoCard";

export default function Collections() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', Sept]

  return (
    <main>
      <div className="min-h-[92vh] grid md:grid-cols-12 grid-rows-12 gap-3 m-2 font-mono">
        {/* hero section */}
        <div className="md:col-span-12 row-span-5 bg-red-500 rounded-md p-4 flex flex-column md:flex-row">
          {/* left hero */}
          <article className="w-full h-1/2 md:w-1/2 md:h-full bg-red-950"></article>

          {/* right hero */}
          <article className="w-full h-1/2 md:w-1/2 md:h-full bg-red-100"></article>
        </div>
      </div>
    </main>
  );
}
